import express from 'express'
import 'dotenv/config'

import connectDB from './db.js';
import Characters from './models/Characters.js';

const app = express();

const PORT = process.env.PORT

app.use(express.json())

app.get ('/', (req, res) => {
    res.send(`<h1>Hello World!
    <br>Welcome to SBA 319!</h1>`)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})