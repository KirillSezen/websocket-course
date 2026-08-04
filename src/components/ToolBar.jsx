import "../styles/toolbar.scss"

function Toolbar() {
	return (
		<div className="toolbar">

			<div>
				<button className="toolbar__btn" style={{marginLeft: '10px'}}>🖌️</button>
				<button className="toolbar__btn">◼️</button>
				<button className="toolbar__btn">⭕</button>
				<button className="toolbar__btn">🪌</button>
				<button className="toolbar__btn">📈</button>
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