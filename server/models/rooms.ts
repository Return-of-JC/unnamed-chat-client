import { v4 as uuidv4 } from 'uuid'
import { CreateTable, InsertRow } from '../utilities/mysql'

export interface Room {
    id: string
    name: string
}

export async function CreateRoomsTable() {
    return CreateTable('rooms', {
        id: 'varchar(255)',
        name: 'varchar(255)',
    })
}

export async function CreateRoom({ name }: Room) {
    return InsertRow('messages', {
        id: uuidv4(),
        name
    })
}
