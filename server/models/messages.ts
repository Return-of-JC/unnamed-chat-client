import { v4 as uuidv4 } from 'uuid'
import {
    CreateTable,
    InsertRow,
    SQLUserPool,
    RowDataPacket,
} from '../utilities/mysql'

export interface Message {
    id: string
    date: Date
    text: string
    user_id: string
    room_id: string
}

export async function CreateMessagesTable() {
    return CreateTable('messages', {
        id: 'varchar(255)',
        text: 'varchar(255)',
        date: 'datetime',
        user_id: 'varchar(255)',
        room_id: 'varchar(255)',
    })
}

export async function CreateMessage({ text, user_id, room_id }: Message) {
    return InsertRow('messages', {
        id: uuidv4(),
        date: new Date().toISOString(),
        text,
        user_id,
        room_id,
    })
}

export async function GetMessages({ user_id }: Message) {
    const inserts = [user_id]
    const sql = `SELECT * FROM messages WHERE user_id=?`

    return SQLUserPool.query<(Message & RowDataPacket)[]>(sql, inserts).catch(
        (error) => {
            throw error
        }
    )
}
