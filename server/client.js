const btn = document.getElementById('btn')

const socket = new WebSocket('ws://localhost:5000/')
socket.onopen = () => {
	socket.send(JSON.stringify({
		method: "connection",
		message: "button pressed",
		name: "Kirill Sezen",
		age: 22
	}))
}

socket.onmessage = () => {
	console.log('Message from server: ', event.data)
}

btn.onclick = () => {
	socket.send(JSON.stringify({
		method: "message",
		message: "button pressed",
		name: "Kirill Sezen",
		age: 22
	}))
}