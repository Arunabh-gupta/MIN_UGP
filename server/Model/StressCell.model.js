const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    stress_cell:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    // time:{
    //     type: String,
    //     required: true
    // },
    condition:{
        type: String,
        required: true
    },
    value:{
        type: Number
    },
    reason:{
        type: String
    }

})

const StressCell_DB = mongoose.model('StressCell_DB', schema)
module.exports = StressCell_DB;