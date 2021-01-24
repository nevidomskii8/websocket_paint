// класс является родительским для каждого инструмента

export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d') // объект которые позволяет производить манипуляции с canvas
    }

    set fillColor(color) {
        this.ctx.fillStyle = color
    }
    
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }

    set lineWidth(width) {
        this.ctx.lineWidth = width
    }
    
    destroyEvents() {                      // обнуление слушателей при переключении на другой инструмент
        this.canvas.onmousemove = null
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
    }
} 