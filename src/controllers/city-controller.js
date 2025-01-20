const { StatusCodes } = require("http-status-codes");
const {CityService } = require('../services')
/**
 * POST :/ cities
 * req-body : {name : 'London}
 *
 */
const { SuccessResponse, ErrorResponse } = require("../utils/common");



async function createCity(req, res) {
    
    try {
      SuccessResponse.message = "City created successfully";
      const city = await CityService.createCity({ name: req.body.name,});
      SuccessResponse.data = city;
      return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res.status(error.statusCode).json(ErrorResponse);
    }
  }

module.exports = {
    createCity,
}