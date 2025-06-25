import express from 'express'
import 'dotenv/config'

import connectDB from './db.js';
import Characters from './models/Characters.js';
import Items from './models/Items.js';
import Networks from './models/Networks.js';

const app = express();

const PORT = process.env.PORT

app.use(express.json())

// Starting page
app.get('/', (req, res) => {
    res.send(`<h1>Hello World!
    <br>Welcome to SBA 319!</h1>
    <h2>In order to check the data you created check 
    <br>the following links:<h2>
    <h3><a href='/api/characters'>Characters</a></h3>
    <h3><a href='/api/items'>Items</a></h3>
    <h3><a href='/api/networks'>Networks</a></h3>`)
})

// List of Characters
app.get('/api/characters', async (req, res) => {
    const chars = await Characters.find({})
    res.json(chars)
})

// List of Items
app.get('/api/items', async (req, res) => {
    const items = await Items.find({})
    res.json(items)
})

// List of Networks
app.get('/api/networks', async (req, res) => {
    const networks = await Networks.find({})
    res.json(networks)
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

app.post('/api/items', async (req, res) => {
    try {
        console.log(req.body)
        const newItem = await Items.create(req.body)
        res.send(newItem)
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
})

app.post('/api/networks', async (req, res) => {
    try {
        console.log(req.body)
        const newNetwork = await Networks.create(req.body)
        res.send(newNetwork)
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

app.patch('/api/items/:id', async (req, res) => {
    try {
        console.log(req.body)
        const query = { _id: req.params.id }
        const update = { $set: req.body }
        const updatedItem = await Items.updateOne(query, update)

        res.send(updatedItem)
    } catch (error) {
        res.status(400).json({ errror: error.message })
    }
})

app.patch('/api/networks/:id', async (req, res) => {
    try {
        console.log(req.body)
        const query = { _id: req.params.id }
        const update = { $set: req.body }
        const updatedNetwork = await Networks.updateOne(query, update)

        res.send(updatedNetwork)
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

app.delete('/api/items/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body)
        const deletedItem= await Items.findByIdAndDelete(id)
        res.send(deletedItem)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.delete('/api/networks/:id', async (req, res) => {
    try {
        const id = req.params.id
        console.log(req.body)
        const deletedNet= await Networks.findByIdAndDelete(id)
        res.send(deletedNet)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    connectDB()
})