// хранит информацию о конвасе и вспомогательных инструментах

import { makeAutoObservable } from "mobx"

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)// делает данные которые хр-ся в этом классе отслеживаемыми
                                // реакт отслеживает изменения  и перерендиревает компонент
    }
    setTool(tool) {  // функция-екшн  которая меняет состояние
        console.log('tool from setTool', tool)
        this.tool = tool
    }
    
    setFillColor(color) {
        this.tool.fillColor = color
    }

    setStrokeColor(color) {
        this.tool.strokeColor = color
    }

    setLineWidth(width) {
        this.tool.lineWidth = width
    }

}

export default new ToolState()