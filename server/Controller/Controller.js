const dataDB = require("../Model/Model")

// Create and save new data
exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({message: "Cannot fill empty data entry"})
        return
    }
    console.log(req.body)
    // new data entry
    const new_entry = new dataDB({
        name: req.body.name,
        value: req.body.value,
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

// Retrieve a single data entry
exports.find = (req, res) => {
    if(req.query.id){
        const id = req.query.id;
        dataDB.findById(id)
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
        dataDB.find()
        .then(entry => {
            res.send(entry)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message||"Some error occured while retrieving information"
            })
        })
    }
}

// Update an existing data entry
exports.update = (req, res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})

    }
    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message : `Cannot update user with ${id}. Maybe user not found`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error update use information"})
    })
}

// Delete an existing data entry
exports.delete = (req, res) => {
    const id = req.params.id

    userDB.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot delete with id ${id}. Maybe id is wrong`})
            }
            else{
                res.send({
                    message:"User was deleted succesfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user"
            })
        })
}