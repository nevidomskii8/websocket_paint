import React, { useEffect, useRef, useState } from 'react'
import '../styles/canvas.scss'
import { observer } from 'mobx-react-lite'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../tools/Brush'
import { Modal , Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom'


const Canvas = observer(() => {
    const canvasRef = useRef()                           // дает возможность взаимодействовать с неконтролируемыми компонентами
    const userNameRef = useRef()
    const [modal, setModal] = useState(true)
    const params = useParams()

    const mouseDownHandler = () => {
        canvasState.pushToUndo(canvasRef.current.toDataURL())
    }

    console.log(params)

    useEffect(() => {                                   // при первом запуске приложения сохраняестся ссылка на canvas в canvasRef
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))  // setTool  передает в стейт mobX 
    }, [])

    useEffect(() => {
        if (canvasState.userName) {
            const socket = new WebSocket('ws://localhost:5000')
            socket.onopen = () => {
                console.log('connetion is succefull')
                socket.send(JSON.stringify({
                    id: params.id,
                    userName: canvasState.userName,
                    method: 'connection'
                }))
                socket.onmessage = (event) => {
                    console.log(event)
                }
            }
        }
    }, [canvasState.userName])

    const connectionHandler = () => {
        canvasState.setUserName(userNameRef.current.value)
        setModal(false)    
    }

    return (
        <div className='canvas'>
            <Modal show={modal} onHide={() => {}}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter yur name</Modal.Title>
                </Modal.Header>
                    <input type="text" ref={userNameRef} />
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => connectionHandler()}>
                        sign in
                    </Button>
                </Modal.Footer>
                </Modal>
            <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400} />
        </div>
    )
})

export default Canvas