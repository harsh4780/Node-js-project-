const { AirplaneRepository } = require('../repositories')

const airplaneRepository = new AirplaneRepository();
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')

async function createAirplane(data){
        try {
                const airplane = await airplaneRepository.create(data);
                return airplane;
        } catch (error) {
           
           if(error.name === 'SequelizeValidationError') {
             let explanation = [];
             error.errors.forEach(err => explanation.push(err.message));
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
           }
            throw error;
        }
}

async function getAllAirplanes(){
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
          throw new AppError('Cannot fetch all the airplanes planes', StatusCodes.INTERNAL_SERVER_ERROR, error);  
    }
}


module.exports = {
    createAirplane,
    getAllAirplanes,
}