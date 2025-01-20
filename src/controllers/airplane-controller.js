const { AirPlaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/**
 * POST :/ airplane
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

module.exports = {
  createAirPlane,
  getAllAirplanes,
};
