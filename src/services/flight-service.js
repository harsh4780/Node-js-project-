const { FlightRepository } = require("../repositories");
const { Op } = require("sequelize");
const flightRepository = new FlightRepository();
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/errors/app-error");
const { compareTime } = require("../utils/helper/datetime-helper");
// const { query } = require("express");

async function createFilght(data) {
  try {
    let timeValidate = compareTime(data.departureTime, data.arrivalTime);
    if (!timeValidate) {
      throw new AppError(
        "Departure time should be less than arrival time",
        StatusCodes.BAD_REQUEST
      );
    }
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw error;
  }
}

// async function updateAirport(id, data){
//     try {
//         const response = await airportRepository.update(id, data);
//         return response;
//     } catch (error) {
//         console.log(error);
//         if(error.statusCode === StatusCodes.NOT_FOUND){
//             throw new AppError('The airplane you requested to update is not present',error.statusCode);
//         }
//         throw new AppError('Cannot fetch all the airport planes', StatusCodes.INTERNAL_SERVER_ERROR, error);
//     }
// }
async function getAllFlights(query) {
  let customeFilter = {};
  let sortFilter= [];

  // trips =MUM-DEL
  if (query.trips) {
    [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customeFilter.departureAirportId = departureAirportId;
    customeFilter.arrivalAirportId = arrivalAirportId;
    // TODO : add a check that they are not same
  }
  // price = 3000
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customeFilter.price = {
      [Op.between]: [minPrice, ( (maxPrice == undefined )  ? 20000 : maxPrice)],
    };
  }
  // travellers = 2
  if(query.traverllers){
    customeFilter.totalSeats ={
        [Op.gte] : query.traverllers 
    };
  }

  // date filter 
  if(query.tripsDate){
    customeFilter.tripsDate = {
        [Op.gte] : query.tripsDate
    }
  }
  // sorting by params = 
  if(query.sort){
    const params = query.sort.split(",");
    const sortFilters = params.map((param) => param.split("_"));
    sortFilter = sortFilters;
  }
  try {
    const flights = await flightRepository.getAllFlights(customeFilter, sortFilter);
    return flights;
  } catch (error) {
    throw new AppError(
      "Cannot fetch the all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR,
      error
    );
  }
}

module.exports = {
  createFilght,
  getAllFlights,
};
