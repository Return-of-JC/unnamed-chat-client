import { WebSocketServer } from 'ws'
import { server } from './index'

const wss_chat = new WebSocketServer({ noServer: true, path: '/chat' })
wss_chat.on('connection', (socket) => {
    socket.on('message', (message) => console.log(message.toString()))
})

server.on('upgrade', (request, socket, head) => {
    const web_sockets = [wss_chat]

    web_sockets.forEach((web_socket) => {
        web_socket.handleUpgrade(request, socket, head, (socket) => {
            web_socket.emit('connection', socket, request)
        })
    })
})
