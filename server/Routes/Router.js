const express = require('express')
const route = express.Router();
const services = require('../Services/Render')
const controller = require('../Controller/Controller')


/**
 * @description Root Route
 * @method Get /
 */
route.get('/',services.indexRoute)

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
module.exports = route