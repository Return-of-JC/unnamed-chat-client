import 'dotenv/config'
import express from 'express'

import websocket from './utilities/websocket'
import { CreateDatabase } from './utilities/mysql'
import { CreateUsersTable } from './models/users'

const app = express()
const port = process.env.SERVER_PORT || 3030
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

void CreateDatabase('chatters')
void CreateUsersTable()

websocket(server)
