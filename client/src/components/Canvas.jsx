import { observer } from "mobx-react-lite/src/observer.js"
import "../styles/canvas.scss"
import { useEffect, useRef } from "react"
import canvasState from "../store/canvasState"
import Brush from "../tools/Brush"
import toolState from "../store/toolState"

const Canvas = observer(() => {
	const canvasRef = useRef()

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasRef.current))
	}, [])

	const mouseDownHandler = () => {
		canvasState.pushToUndo(canvasRef.current.toDataURL())
	}

	return (
		<div className="canvas">
			
			<canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400}/>

		</div>
	)
})

export default Canvas