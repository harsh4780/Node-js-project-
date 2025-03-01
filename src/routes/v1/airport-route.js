const express = require('express')
const router = express.Router();
const {airportMiddlewares } = require('../../middleware')
const {airportController} = require('../../controllers')

// /api/v1/airplanes POST
router
      .post('/', 
        airportMiddlewares.validateCreateRequest,  // middleware to validate the airplane request data
        airportController.createAirport);


// /api/v1/airport GET
router.get('/',airportController.getAllAirports);

// /api/v1/airport/:id GET
router.get('/:id',airportController.getAirport);

// /api/v1/airport/:id DELETE
router.delete('/:id',airportController.destroyAirport);

// /api/v1/airplanes/:id PATCH
// router.patch('/:id',airportController.updateAirplane);
module.exports = router;