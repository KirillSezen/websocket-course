import { makeAutoObservable } from "mobx/src/internal.js";

class CanvasState {
	canvas = null
	constructor() {
		makeAutoObservable(this)
	}

	setCanvas(canvas) {
		this.canvas = canvas
	}
}

export default new CanvasState()