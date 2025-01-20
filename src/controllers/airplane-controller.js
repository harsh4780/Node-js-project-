const { AirPlaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/**
 * POST :/ airplanes
 * req-body : {modelNumber :'airbus320', capacity : 200}
 *
 */
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirPlane(req, res) {
  // console.log(req.body)
  try {
    SuccessResponse.message = "Air Plane created successfully";

    const airplane = await AirPlaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}


/**
 * get :/ airplanes
 * req-body : {}
 *
 */
async function getAllAirplanes(req, res) {
  try {
    const allAirplanes = await AirPlaneService.getAllAirplanes();
    SuccessResponse.data = allAirplanes;

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


/**
 * get :/ airplanes/:id
 * req-body : {}
 *
 */
async function getAirplane(req, res) {
    try {
      const getAirplanes = await AirPlaneService.getAirplane(req.params.id);
      SuccessResponse.data = getAirplanes;
  
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
  createAirPlane,
  getAllAirplanes,
  getAirplane,
};
