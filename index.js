import express from 'express'
import connectDB from './db.js';

import 'dotenv/config'


const app = express();

const PORT = process.env.PORT

app.get ('/', (req, res) => {
    res.send(`<h1>Hello World!
        <br>Welcome to SBA 319!</h1>`)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})