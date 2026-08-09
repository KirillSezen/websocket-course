const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const cors = require('cors')

const aWss = WSServer.getWss()
const PORT = process.env.PORT || 5050

app.use(cors())
app.use(express.json())

app.ws('/', (ws, req) => {
	ws.on('message', (msg) => {
		msg = JSON.parse(msg)
		switch (msg.method) {
			case "connection":
				connectionHandler(ws, msg)
				break
			case "draw":
				broadcastConnection(ws, msg)
				break
		}
	})
})

app.post('/image', (req, res) => {

})

app.get('/image', (req, res) => {

})

app.listen(PORT, () => console.log(`Server started at ${PORT}`))

const connectionHandler = (ws, msg) => {
	ws.id = msg.id
	broadcastConnection(ws, msg)

	ws.send('You successfully connected !')
}

const messageHandler = (ws, msg) => {
	console.log(JSON.parse(msg))
}

const broadcastConnection = (ws, msg) => {
	aWss.clients.forEach(client => {
		if (client.id === msg.id) {
			client.send(JSON.stringify(msg))
		}
	})
}