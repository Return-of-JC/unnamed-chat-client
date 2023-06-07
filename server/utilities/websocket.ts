import { Server } from 'http'
import { WebSocketServer } from 'ws'

export default function (express_server: Server) {
    const websocket_server = new WebSocketServer({ noServer: true })

    express_server.on('upgrade', (request, socket, head) => {
        websocket_server.handleUpgrade(request, socket, head, (socket) => {
            websocket_server.emit('connection', socket, request)
        })
    })

    websocket_server.on('connection', (socket) => {
        console.log('socket connected')
        socket.on('message', (message) => console.log(message.toString()))
    })

    return websocket_server
}
