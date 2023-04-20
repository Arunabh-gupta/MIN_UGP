const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type:Number,
        required: true
    } 
})

const dataDB = mongoose.model('dataDB', schema)
module.exports = dataDB;