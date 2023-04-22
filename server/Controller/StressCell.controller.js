const StressCellDB = require("../Model/StressCell.model")
const moment = require("moment-timezone")
// const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");
// Create a new data entry
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Cannot fill empty data entry"})
        return
    }
    console.log(req.body)
    // new data entry
    const new_entry = new StressCellDB({
        stress_cell: req.body.stress_cell,
        date: moment.tz(req.body.date, "Asia/Kolkata").format('MM/DD/YYYY'),
        // time: req.body.time,
        condition: req.body.condition,
        value: req.body.value,
        reason: req.body.reason
    })
    // console.log(entry.body.Date_Time);
    new_entry
        .save(new_entry)
        .then(data => {
            console.log(data);
            // res.send(data)
            res.redirect("/")
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                
                message: err.message || "Some error eccored while submitting data"
            })
        })
}
// Find a single data entry or array of entries
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        StressCellDB.findById(id)
            .then(data=>{
                if(!data){
                    res.status(404).send({message: "Not found with id "+id})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: "Error retrieving user with id: "+id})
            })
    }
    else{
        StressCellDB.find()
        .then(entry => {
            console.log(entry)
            res.send(entry)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message||"Some error occured while retrieving information"
            })
        })
    }
}

// Update a single data entry
exports.update = (req, res) => {

}

// Delete a single data entry
exports.delete = (req, res) => {

}