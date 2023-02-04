import express from 'express'

//import mysql from 'mysql'
import { WebSocketServer } from 'ws'

const app = express()
const port = 3030
//const mysql_connection = mysql.createConnection({
//    host: 'database',
//    user: 'user',
//    password: 'password',
//    database: '',
//})

const wss_chat = new WebSocketServer({ noServer: true, path: '/chat' })
wss_chat.on('connection', (socket) => {
    socket.on('message', (message) => console.log(message.toString()))
})

app.get('/', (req, res) => {
    res.json('hello world!')
})

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

server.on('upgrade', (request, socket, head) => {
    const web_sockets = [wss_chat]

    web_sockets.forEach((web_socket) => {
        web_socket.handleUpgrade(request, socket, head, (socket) => {
            web_socket.emit('connection', socket, request)
        })
    })
})
