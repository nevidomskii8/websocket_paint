import Tool from './Tool'

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    listen() {
        console.log('listen()')
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    }

    mouseUpHandler(e) {
        console.log('mouseUpHandler()')
        this.mouseDown = false
    }
    mouseDownHandler(e) {
        console.log('mouseDownHandler()')
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
    mouseMoveHandler(e) {
        console.log('mouseMoveHandler()')
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x, y) {
        console.log('draw()')
        this.ctx.lineTo(x, y)
        this.ctx.stroke()
    }
}

