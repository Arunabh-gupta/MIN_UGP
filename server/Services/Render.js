// exports.catalog = (req, res)=>{
//     res.render('catalog')
// }
const axios = require('axios')


exports.add_entry = (req , res)=>{
    
    res.render('add_data');
}
exports.StressCell_Route = (req , res)=>{
    axios.get("http://localhost:5000/StressCell")
    .then((response) => {
        res.render('StressCell', {data_entries: response.data});
    })
    .catch(err => {
        res.send(err)
    })
    
}
exports.AWTT_Route = (req , res)=>{
    res.render('AWTT');
}
exports.DHTT_Route = (req , res)=>{
    res.render('DHTT');
}
exports.RCL_Route = (req , res)=>{
    res.render('RCL');
}
exports.RTT_Route = (req , res)=>{
    res.render('RTT');
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

