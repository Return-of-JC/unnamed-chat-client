import { v4 as uuidv4 } from 'uuid'
import {
    CreateTable,
    InsertRow,
    SQLUserPool,
    RowDataPacket,
} from '../utilities/mysql'

export interface Participant {
    id: string
    date: Date
    user_id: string
    room_id: string
}

export async function CreateParticipantTable() {
    return CreateTable('participants', {
        id: 'varchar(255)',
        date: 'datetime',
        user_id: 'varchar(255)',
        room_id: 'varchar(255)',
    })
}

export async function CreateParticipant({ user_id, room_id }: Participant) {
    return InsertRow('messages', {
        id: uuidv4(),
        date: new Date().toISOString(),
        user_id,
        room_id,
    })
}

export async function GetParticipants({ room_id }: Participant) {
    const inserts = [room_id]
    const sql = `SELECT * FROM participants WHERE room_id=?`

    return SQLUserPool.query<(Participant & RowDataPacket)[]>(
        sql,
        inserts
    ).catch((error) => {
        throw error
    })
}
