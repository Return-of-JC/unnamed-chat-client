// https://www.npmjs.com/package/mysql
import mysql from 'mysql'

const mysql_user: string = process.env.USER
const mysql_password: string = process.env.PASSWORD

export const RootConnection = mysql.createConnection({
    host: 'mariadb',
    user: 'root',
    password: mysql_password,
})

export const UserConnection = mysql.createConnection({
    host: 'mariadb',
    user: mysql_user,
    password: mysql_password,
})

// initialize the database
RootConnection.connect(() => {
    const initial_queries = [
        'CREATE DATABASE IF NOT EXISTS chatters',
        `GRANT ALL PRIVILEGES ON chatters.* TO '${mysql_user}'@'%'`,
    ]

    initial_queries.forEach((query) => {
        RootConnection.query(query, function (error) {
            if (error) throw error
        })
    })

    RootConnection.end()
})
