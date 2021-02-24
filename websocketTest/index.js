const btn = document.getElementById('btn')

const socket = new WebSocket('ws://localhost:5000')
socket.onopen = () => {
    socket.send(JSON.stringify({
        method: 'connection',
        id: 888,
        userName: 'myName'
    }))
}

socket.onmessage = (event) => {
    console.log('получено с сервера: ', event.data)
}


btn.onclick = () => {
    console.log('klick')
    socket.send(JSON.stringify({
        method: 'message',
        message: 'Hello',
        id: 888,
        userName: 'myName'
    }))
}