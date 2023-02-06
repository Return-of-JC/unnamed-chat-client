import 'dotenv/config'
import express from 'express'

import websocket from './utilities/websocket'
import { InitalizeDatabase } from './utilities/mysql'

const app = express()
const port = process.env.SERVER_PORT || 3030
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

InitalizeDatabase()

websocket(server)
