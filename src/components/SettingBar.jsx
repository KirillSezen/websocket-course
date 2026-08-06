import toolState from "../store/toolState"
import "../styles/toolbar.scss"

function SettingBar() {
	return (
		<div className="setting-bar">

			<label htmlFor="line-width">Толщина линии</label>
			<input
			onChange={e => toolState.setLineWidth(e.target.value)}
			style={{margin:'0 10px'}}
			id="line-width"
			type="number"
			defaultValue={1}
			min={1} max={50}/>

			<label htmlFor="fill-color">Цвет заливки</label>
			<input
			onChange={e => toolState.setFillColor(e.target.value)}
			style={{margin:'0 10px'}}
			id="fill-color"
			type="color"
			/>

			<label htmlFor="stroke-color">Цвет линии</label>
			<input
			onChange={e => toolState.setStrokeColor(e.target.value)}
			style={{margin:'0 10px'}}
			id="stroke-color"
			type="color"
			/>

		</div>
	)
}

export default SettingBar