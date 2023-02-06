// https://www.npmjs.com/package/mysql
import mysql from 'mysql'

const mysql_username: string = process.env.USER
const mysql_user_password: string = process.env.PASSWORD
const mysql_root_password: string = process.env.MYSQL_ROOT_PASSWORD

const mysql_hostname: string = process.env.MYSQL_HOSTNAME || 'mariadb'
const mysql_database: string = process.env.MYSQL_DATABASE || 'chatters'

// use this for root operations
export const SQLRootConnection = mysql.createConnection({
    host: mysql_hostname,
    user: 'root',
    password: mysql_root_password || mysql_user_password,
})

// use this for everything else
export const SQLUserConnection = mysql.createConnection({
    host: mysql_hostname,
    user: mysql_username,
    password: mysql_user_password,
    database: mysql_database,
})

export function InitalizeDatabase(): void {
    const setup_queries = [
        `CREATE DATABASE IF NOT EXISTS ${mysql_database}`,
        `GRANT ALL PRIVILEGES ON ${mysql_database}.* TO '${mysql_username}'@'%'`,
    ]

    SQLRootConnection.connect()

    setup_queries.forEach((query) => {
        SQLRootConnection.query(query, function (error) {
            if (error) throw error
        })
    })

    SQLRootConnection.end()
}

export default SQLUserConnection
