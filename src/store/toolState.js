import { makeAutoObservable } from "mobx"

class ToolState {
    tool = null
    constructor() {
        makeAutoObservable(this)
    }
    setTool(tool) {
        console.log('tool from setTool', tool)
        this.tool = tool
    }
}

export default new ToolState()