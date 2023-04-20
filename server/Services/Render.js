// exports.catalog = (req, res)=>{
//     res.render('catalog')
// }
const axios = require('axios')


exports.add_entry = (req , res)=>{
    res.render('add_data');
}

exports.indexRoute = (req, res) => {
    axios.get("http://localhost:3000/api/entry")
    .then((response) => {
        res.render('index', {data_entries: response.data})
    })
    .catch(err => {
        res.send(err)
    })
}