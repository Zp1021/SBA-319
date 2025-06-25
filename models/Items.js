import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
    armor: {
        type: String,
        required: true,
    },
    sword: {
        type: String,
        required: true,
        
    },
    potions: {
        type: String,
        required: true,
    }
})

let Items = mongoose.model("Items", itemSchema)
export default Items