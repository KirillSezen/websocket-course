import { makeAutoObservable } from "mobx/src/internal.js";

class ToolState {
	tool = null
	constructor() {
		makeAutoObservable(this)
	}

	setTool(tool) {
		this.tool = tool
	}
}

export default new ToolState()