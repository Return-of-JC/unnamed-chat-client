import { v4 as uuidv4 } from 'uuid'
import {
    SQLUserPool,
    CreateTable,
    InsertRow,
    RowDataPacket,
} from '../utilities/mysql'

export interface User {
    [key: string]: string
    user_id: string
    user_name: string
    user_password: string
    user_image: string
}

export async function CreateUsersTable() {
    return CreateTable<User>('users', {
        user_id: 'varchar(255)',
        user_name: 'varchar(255)',
        user_password: 'varchar(255)',
        user_image: 'varchar(255)',
    })
}

export async function CreateUser(
    user_name: string,
    user_password: string,
    user_image?: string
) {
    return InsertRow<User>('users', {
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
