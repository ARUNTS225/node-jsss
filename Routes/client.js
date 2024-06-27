const express = require('express')
const ClientController = require('../Controller/client')
const router = express.Router()



router.post('/booking',ClientController. booked_data)
router.post('/bookings',ClientController.booking2)
router.get('/rooms',ClientController.room_data)
router.get('/customers',ClientController.customer) 
 router.get('/bookings/:customerName',ClientController.customer_data)
module.exports = router