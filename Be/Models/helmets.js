const mongoose = require("mongoose");

const HelmetsSchema = new mongoose.Schema({
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
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    
    subtitle: {
        type: String,
        required: true
    },
}, { timestamps:true, strict: true})

module.exports = mongoose.model("helmetsModel", HelmetsSchema, "helmets")