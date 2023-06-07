import { v4 as uuidv4 } from 'uuid'
import {
    SQLUserPool,
    CreateTable,
    InsertRow,
    RowDataPacket,
} from '../utilities/mysql'

export interface User {
    user_id: string
    user_name: string
    user_password: string
    user_image: string
}

export async function CreateUsersTable() {
    return CreateTable('users', {
        id: 'varchar(255)',
        name: 'varchar(255)',
        password: 'varchar(255)',
        image: 'varchar(255)',
    })
}

export async function CreateUser(
    user_name: string,
    user_password: string,
    user_image?: string
) {
    return InsertRow('users', {
        user_id: uuidv4(),
        user_name,
        user_password,
        user_image,
    })
}

export async function SelectUser(user_id: string) {
    const inserts = [user_id]
    const sql = `SELECT * FROM users WHERE user_id=?`

    return SQLUserPool.query<(User & RowDataPacket)[]>(sql, inserts).catch(
        (error) => {
            throw error
        }
    )
}

export default function () {
    void CreateUsersTable()

    return {
        create: CreateUser,
        select: SelectUser,
    }
}
