const express = require('express')
const router = express.Router();
const {AirplaneMiddlewares } = require('../../middleware')
const {airplaneController} = require('../../controllers')

// /api/v1/airplanes POST
router
      .post('/', 
        AirplaneMiddlewares.validateCreateRequest,  // middleware to validate the airplane request data
        airplaneController.createAirPlane);


// /api/v1/airplanes GET
router.get('/',airplaneController.getAllAirplanes);

// /api/v1/airplanes/:id GET
router.get('/:id',airplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
router.delete('/:id',airplaneController.destroyAirplane);

// /api/v1/airplanes/:id PATCH
router.patch('/:id',airplaneController.updateAirplane);
module.exports = router;