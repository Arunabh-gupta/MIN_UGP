const express = require('express')
const route = express.Router();
const services = require('../Services/Render')
const controller = require('../Controller/Controller')
const StressCell_controller = require('../Controller/StressCell.controller')


/**
 * @description Root Route
 * @method Get /
 */
route.get('/',services.StressCell_Route)
// route.get('/StressCell',services.StressCell_Route)
route.get('/AWTT',services.AWTT_Route)
route.get('/DHTT',services.DHTT_Route)
route.get('/RCL',services.RCL_Route)
route.get('/RTT',services.RTT_Route)
/**
 * @description for add-entry
 * @method Get /add-entry
 */
route.get('/add-entry', services.add_entry);

// API
route.post('/api/entry', controller.create)
route.get('/api/entry', controller.find)
route.get('/api/entry/:id', controller.update)
route.get('/api/entry/:id', controller.delete)




// StressCell API
route.post('/StressCell', StressCell_controller.create);
route.get('/StressCell', StressCell_controller.find);
route.post('/StressCell/:id', StressCell_controller.update);
route.post('/StressCell/:id', StressCell_controller.delete);
module.exports = route