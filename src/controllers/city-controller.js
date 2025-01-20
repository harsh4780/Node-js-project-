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

  async function destroyCity(req, res){
    try {
      const destroyCity = await CityService.destroyCity(req.params.id);
      SuccessResponse.data = destroyCity;
  
      return res
              .status(StatusCodes.OK) 
              .json(SuccessResponse);
    } catch (error) {
      ErrorResponse.error = error;
      return res
              .status(error.statusCode)
              .json(ErrorResponse);
    }
  }


  async function updateCity(req, res) {
    try {
      const updateCity = await CityService.updateCity(req.params.id, req.body.name);

      SuccessResponse.data = updateCity;

    return res
            .status(StatusCodes.OK) 
            .json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res
            .status(error.statusCode)
            .json(ErrorResponse);
  }
  }

module.exports = {
    createCity,
    destroyCity,
    updateCity,
}