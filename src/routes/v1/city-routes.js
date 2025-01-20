
const express = require('express')
const router = express.Router();
const {cityController} = require('../../controllers')


// /api/v1/city : POST 

router
    .post('/', cityController.createCity);



module.exports = router