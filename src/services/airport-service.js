const { AirportRepository } = require('../repositories')

const airportRepository = new AirportRepository();
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')

async function createAirport(data){
        try {
                const airport = await airportRepository.create(data);
                return airport;
        } catch (error) {
           
           if(error.name === 'SequelizeValidationError') {
             let explanation = [];
             error.errors.forEach(err => explanation.push(err.message));
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
           }
            throw error;
        }
}

async function getAllAirports(){
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
          throw new AppError('Cannot fetch all the airports planes', StatusCodes.INTERNAL_SERVER_ERROR, error);  
    }
}

async function getAirport(id){
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (error) {
       
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch the airport planes', StatusCodes.INTERNAL_SERVER_ERROR, error);  
        
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch all the airport planes', StatusCodes.INTERNAL_SERVER_ERROR, error);  
  }
}


async function updateAirport(id, data){
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (error) {
        console.log(error);
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The airplane you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch all the airport planes', StatusCodes.INTERNAL_SERVER_ERROR, error);  
    }
}

module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    destroyAirport,
    updateAirport,
}