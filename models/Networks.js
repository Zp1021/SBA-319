import mongoose from "mongoose";

const Schema = mongoose.Schema

const netSchema = new Schema({
    netName: {
        type: String,
        required: true,
    },
    netRating: {
        type: Number,
        required: true,
    }
})

let Networks = mongoose.model("Networks", netSchema)
export default Networks