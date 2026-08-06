import canvasState from "../store/canvasState"
import "../styles/toolbar.scss"
import toolState from "../store/toolState"
import Brush from "../tools/Brush"
import Rect from "../tools/Rect"
import Circle from "../tools/Circle"
import Line from "../tools/Line"
import Eraser from "../tools/Eraser"

function Toolbar() {
	return (
		<div className="toolbar">

			<div>
				<button className="toolbar__btn" style={{marginLeft: '10px'}} onClick={() => toolState.setTool(new Brush(canvasState.canvas))}>🖌️</button>
				<button className="toolbar__btn" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}>◼️</button>
				<button className="toolbar__btn" onClick={() => toolState.setTool(new Circle(canvasState.canvas))}>⭕</button>
				<button className="toolbar__btn" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}>🪌</button>
				<button className="toolbar__btn" onClick={() => toolState.setTool(new Line(canvasState.canvas))}>📈</button>
				<input className="color__pick" type="color" />
			</div>

			<div>
				<button className="toolbar__btn leftarrow">↪️</button>
				<button className="toolbar__btn rightarrow">↩️</button>
				<button className="toolbar__btn" style={{marginRight: '10px'}}>💾</button>
			</div>
			
		</div>
	)
}

export default Toolbar