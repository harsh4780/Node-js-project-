const express = require('express')
const router = express.Router();
const {AirplaneMiddlewares } = require('../../middleware')
const {airplaneController} = require('../../controllers')

router
      .post('/', 
        AirplaneMiddlewares.validateCreateRequest,  // middleware to validate the airplane request data
        airplaneController.createAirPlane);

router.get('/',airplaneController.getAllAirplanes);
router.get('/:id',airplaneController.getAirplane);
module.exports = router;