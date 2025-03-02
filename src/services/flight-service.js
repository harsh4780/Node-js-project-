const { FlightRepository } = require('../repositories')

const flightRepository = new FlightRepository();
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')
const {compareTime} = require('../utils/helper/datetime-helper');


async function createFilght(data) {
    try {
        let timeValidate = compareTime(data.departureTime, data.arrivalTime);
        if(!timeValidate){
            throw new AppError('Departure time should be less than arrival time', StatusCodes.BAD_REQUEST);
        }
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
        if(error.name === 'SequelizeValidationError') {
            let explanation = [];
            error.errors.forEach(err => explanation.push(err.message));
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

module.exports = {
    createFilght,   
}