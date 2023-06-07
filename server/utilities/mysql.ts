// https://github.com/sidorares/node-mysql2
import mysql from 'mysql2/promise'
export type { RowDataPacket } from 'mysql2'

const mysql_username: string = process.env.USER
const mysql_user_password: string = process.env.PASSWORD
const mysql_root_password: string = process.env.MYSQL_ROOT_PASSWORD

const mysql_hostname: string = process.env.MYSQL_HOSTNAME || 'mariadb'
const mysql_database: string = process.env.MYSQL_DATABASE || 'chatters'

// use this for root operations
export const SQLRootPool = mysql.createPool({
    host: mysql_hostname,
    user: 'root',
    password: mysql_root_password || mysql_user_password,
})

// use this for everything else
export const SQLUserPool = mysql.createPool({
    host: mysql_hostname,
    user: mysql_username,
    password: mysql_user_password,
    database: mysql_database,
})

export async function CreateDatabase(db_name: string) {
    const sql_queries = [
        `CREATE DATABASE IF NOT EXISTS ${db_name}`,
        `GRANT ALL PRIVILEGES ON ${db_name}.* TO ${mysql_username}@'%'`,
    ]

    return Promise.all(
        sql_queries.map(async (query) => {
            return SQLRootPool.query(query).catch((error) => {
                throw error
            })
        })
    )
}

export async function CreateTable<T extends Record<string, string>>(
    table: string,
    columns: T
) {
    const table_columns: string = Object.entries(columns)
        .map(([key, value]) => `${key} ${value}`)
        .join(', ')

    const sqlquery = `CREATE TABLE IF NOT EXISTS ${table} (${table_columns})`

    return SQLUserPool.query(sqlquery).catch((error) => {
        throw error
    })
}

export async function InsertRow<T extends Record<string, string>>(
    table: string,
    row: T
) {
    const row_columns = Object.keys(row).join(', ')
    const row_values = Object.values(row)
        .map((value) => mysql.escape(value))
        .join(', ')
    const query = `INSERT INTO ${table} (${row_columns}) VALUES (${row_values})`

    return SQLUserPool.query(query).catch((error) => {
        throw error
    })
}

export default function () {
    return {
        root: SQLRootPool,
        user: SQLUserPool,
        createDatabase: CreateDatabase,
        createTable: CreateTable,
        insertRow: InsertRow,
    }
}
