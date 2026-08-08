import { observer } from "mobx-react-lite/src/observer.js"
import "../styles/canvas.scss"
import { useEffect, useRef } from "react"
import canvasState from "../store/canvasState"
import Brush from "../tools/Brush"
import toolState from "../store/toolState"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react"

const Canvas = observer(() => {
	const canvasRef = useRef()
	const usernameRef = useRef()
	const [modal, setModal] = useState(true)

	useEffect(() => {
		canvasState.setCanvas(canvasRef.current)
		toolState.setTool(new Brush(canvasRef.current))
	}, [])

	const mouseDownHandler = () => {
		canvasState.pushToUndo(canvasRef.current.toDataURL())
	}

	const connectHandler = () => {
		canvasState.setUserName(usernameRef.current.value)
		setModal(false)
	}

	return (
		<div className="canvas">

			<Modal show={modal} onHide={() => {}}>
        <Modal.Header >
          <Modal.Title>Введите ваше имя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<input type="text" ref={usernameRef}/>
				</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => connectHandler()}>
            Войти
          </Button>
        </Modal.Footer>
      </Modal>

			<canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={600} height={400}/>

		</div>
	)
})

export default Canvas