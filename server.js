const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require("body-parser")
const app = express()
const path = require('path')


process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
  
  process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
  });
const connectDB = require('./server/Database/Connection')

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080


//log requests
app.use(morgan('tiny'))

//mongoDB connection
connectDB();


// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set('view engine','ejs')
// app.set('views', path.resolve(__dirname, "views/ejs"))


//load assets
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))

app.listen(PORT, ()=>{console.log(`Server is running on http://localhost:${PORT}`)})


// load routers
var routes = require('./server/Routes/Router')
app.use('/', routes) 