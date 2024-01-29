const mongoose = require("mongoose");

const marketSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },


    title: {
        type: String,
        required: true,
    },
   

    

},{timestamps: true})


const marketModel = mongoose.model("marketModel", marketSchema);
module.exports = marketModel;