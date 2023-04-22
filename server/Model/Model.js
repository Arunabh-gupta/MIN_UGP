const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    value: {
        type:Number,
        required: true
    },
    Date_Time: {
        type: Date,
        required: true
    } 
})

const dataDB = mongoose.model('dataDB', schema)
module.exports = dataDB;