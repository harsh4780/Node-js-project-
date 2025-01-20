
const express = require('express')
const router = express.Router();
const {cityController} = require('../../controllers');
const {CityMiddlewares} = require('../../middleware');
// /api/v1/city : POST 

router
    .post('/',
         CityMiddlewares.validateCreateRequest, // middleware to validate the city request data
         cityController.createCity);

// /api/v1/airplanes/:id DELETE
router.delete('/:id',cityController.destroyCity);

// /api/v1/airplanes/:id PATCH
router.patch('/:id',
    CityMiddlewares.validateCreateRequest, // middleware to validate the city request data
    cityController.updateCity);


module.exports = router