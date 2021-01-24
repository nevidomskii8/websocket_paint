import Tool from './Tool'

export default class Brush extends Tool {
    mouseDown // переменная для отслеживание нажатия на кнопку с актуальным инструментом
    constructor(canvas) {
        super(canvas)
        this.listen()   // НЕ ПОНИМАЮ ДЛЯ ЧЕГО ЗДЕСЬ ЗАДАЕТСЯ Ф-Я listen()
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
        this.ctx.beginPath() // сообщает о начале рисования новой линии
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
    mouseMoveHandler(e) {
        console.log('mouseMoveHandler()')
        if (this.mouseDown) {  // если кнопака выбора инструмента нажата - можно рисовать 
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x, y) {
        console.log('draw()')
        this.ctx.lineTo(x, y) // нативная функция для отрисовки
        this.ctx.stroke()  // задает цвет
    }
}

