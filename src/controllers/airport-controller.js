const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/**
 * POST :/ airports/
 * req-body : {name: 'IGI', city: 5, code :'DEL', }
 *
 */
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createAirport(req, res) {
  console.log(req.body)
  try {
    SuccessResponse.message = "Airport created successfully";
    console.log(req.body);
    const airport = await AirportService.createAirport({
      name: req.body.name,
      code : req.body.code,
      adddress : req.body.adddress,
      cityId : req.body.cityId,
    });
    console.log(airport);
    SuccessResponse.data = airport;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}


/**
 * get :/ airportsAll
 * req-body : {}
 *
 */
async function getAllAirports(req, res) {
  try {
    const allAirports = await AirportService.getAllAirports();
    SuccessResponse.data = allAirports;

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
 * get :/ airports/:id
 * req-body : {}
 *
 */
async function getAirport(req, res) {
    try {
      const getAirport = await AirportService.getAirport(req.params.id);
      SuccessResponse.data = getAirport;
  
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
 * DELETE :/ airports/:id
 * req-body : {}
 *
 */
async function destroyAirport(req, res) {
    try {
      const destroyAirport = await AirportService.destroyAirport(req.params.id);
      SuccessResponse.data = destroyAirport;
  
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


//   async function updateAirport(req, res){
    
//     try {
//         const updatedAirplane = await AirportService.updateAirport(req.params.id, req.body.capacity);

//         SuccessResponse.data = updateAirport;
  
//       return res
//               .status(StatusCodes.OK) 
//               .json(SuccessResponse);
//     } catch (error) {
//       ErrorResponse.error = error;
//       return res
//               .status(error.statusCode)
//               .json(ErrorResponse);
//     }
//   }


module.exports = {
  createAirport,
  getAllAirports,
  getAirport,
  destroyAirport,
//   updateAirport,
};
