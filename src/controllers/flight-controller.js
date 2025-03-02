const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");

/**
 * POST :/ flight
 * req-body : {
 * flightNumber: 'AI-101',
 * airplaneId: 1,
 * departureId: 12,
 * arrvialAirportId: 3,
 * arrvialTime : '11:00',
 * departureTime :'12:00',
 * pric: 2000,
 * boardingGate: 12A,
 * totalSeats : 120
 * }
 *
 */
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createFlight(req, res) {
  console.log(req.body);
  try {
    SuccessResponse.message = "Airport created successfully";

    const flight = await FlightService.createFilght({
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    console.log(flight);
    SuccessResponse.data = flight;

    return res.status(201).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log(ErrorResponse);
    return res.status(500).json(ErrorResponse);
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

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
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

    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 * DELETE :/ airports/:id
 * req-body : {}
 *
 */
// async function destroyAirport(req, res) {
//   try {
//     const destroyAirport = await AirportService.destroyAirport(req.params.id);
//     SuccessResponse.data = destroyAirport;

//     return res.status(StatusCodes.OK).json(SuccessResponse);
//   } catch (error) {
//     ErrorResponse.error = error;
//     return res.status(error.statusCode).json(ErrorResponse);
//   }
// }

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
    createFlight,
//   getAllAirports,
  //   updateAirport,
};
