import express from 'express'
import 'dotenv/config'

import connectDB from './db.js';
import Characters from './models/Characters.js';

const app = express();

const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
    res.send(`<h1>Hello World!
    <br>Welcome to SBA 319!</h1>`)
})

app.get('/api/characters', async (req, res) => {
    const chars = await Characters.find({})
    res.json(chars)
})

app.post('/api/characters', async (req, res) => {
    try {
        console.log(req.body)
        const newChar = await Characters.create(req.body)
        res.send(newChar)
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
})

app.patch('/api/characters/:id', async (req, res) => {
    try {
        console.log(req.body)
        const query = { _id: req.params.id }
        const update = { $set: req.body }
        const updatedChar = await Characters.updateOne(query, update)

        res.send(updatedChar)
    } catch (error) {
        res.status(400).json({ errror: error.message })
    }
})

app.delete('/api/characters/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body)
        const deletedChar = await Characters.findByIdAndDelete(id)
        res.send(deletedChar)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    connectDB()
})