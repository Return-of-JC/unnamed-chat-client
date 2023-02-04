import express from 'express'

const app = express()
const port = 3030

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
require('dotenv').config()

export const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

require(__dirname + '/database.ts')
require(__dirname + '/websockets.ts')

app.get('/', (req, res) => {
    res.send('hello world')
})
