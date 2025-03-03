const express = require('express')
const router = express.Router();
const {flightMiddlewares } = require('../../middleware')
const {flightController} = require('../../controllers')

// /api/v1/flight POST
router
      .post('/', 
        flightMiddlewares.validateCreateRequest,  // middleware to validate the airplane request data
        flightController.createFlight);

 // /api/v1/flight?trips=MUM-DEL GET
router
      .get('/', 
        flightController.getAllFlights);
module.exports = router;