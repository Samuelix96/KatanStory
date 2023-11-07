const mongoose= require("mongoose")

const StandsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    subtitle:{
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
}, {timestamps: true, strict: true})

module.exports= mongoose.model("standsModel", StandsSchema, "stands")