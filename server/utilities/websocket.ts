import { Server } from 'http'
import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ noServer: true })

export default function (server: Server, socket_url: string) {
    server.on('upgrade', (request, socket, head) => {
        if (request.url === socket_url) {
            wss.handleUpgrade(request, socket, head, (socket) => {
                wss.emit('connection', socket, request)
            })
        }
    })

    return wss
}

module.exports = wss
