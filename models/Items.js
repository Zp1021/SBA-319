import mongoose from "mongoose";

const Schema = mongoose.Schema

const itemSchema = new Schema({
    armor: {
        type: String,
        required: true,
    },
    weapon: {
        type: String,
        required: true,
        
    },
    potions: {
        type: String,
        required: true,
    }
})

itemSchema.index({armor: 1});
itemSchema.index({weapon: 1});
itemSchema.index({potions: 1});

let Items = mongoose.model("Items", itemSchema)
export default Items