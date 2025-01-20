
const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')
const {CityRepository} = require('../repositories')



const cityRepository = new CityRepository ();

async function createCity(data){
    try {
        const city = await cityRepository.create(data);
        return city;
} catch (error) {
    
   if(error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
     let explanation = [];
     error.errors.forEach(err => explanation.push(err.message));
    throw new AppError(explanation, StatusCodes.BAD_REQUEST);
   }
    throw new AppError('Failed to create city', StatusCodes.INTERNAL_SERVER_ERROR);
}
}


async function destroyCity(id){
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (error) {
        console.log(error);
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch the City', StatusCodes.INTERNAL_SERVER_ERROR, error);  
  }
}


async function updateCity(id, data){
    try {
        const response = await cityRepository.update(id, data);
        return response;
    } catch (error) {
        console.log(error);
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to update is not present',error.statusCode);
        }
        throw new AppError('Cannot fetch the City', StatusCodes.INTERNAL_SERVER_ERROR, error);  
    }
}

module.exports ={
    createCity,
    destroyCity ,
    updateCity
}