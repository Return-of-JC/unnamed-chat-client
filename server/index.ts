import 'dotenv/config'
import express from 'express'

import { CreateDatabase } from './utilities/mysql'
import { CreateUsersTable } from './models/users'
import { CreateMessagesTable } from './models/messages'
import { CreateRoomsTable } from './models/rooms'
import { CreateParticipantTable } from './models/participants'

export const app = express()
export const port = process.env.SERVER_PORT || 3030
export const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

void CreateDatabase('chatters')
void CreateUsersTable()
void CreateMessagesTable()
void CreateRoomsTable()
void CreateParticipantTable()
