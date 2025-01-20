
const express = require('express')
const router = express.Router();
const {cityController} = require('../../controllers');
const {CityMiddlewares} = require('../../middleware');
// /api/v1/city : POST 

router
    .post('/',
        CityMiddlewares.validateCreateRequest, // middleware to validate the city request data
         cityController.createCity);



module.exports = router