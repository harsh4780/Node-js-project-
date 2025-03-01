
const {StatusCodes} = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')
function validateCreateRequest(req, res, next){
    if(!req.body.name){
        ErrorResponse.message = 'Something went wrong in airplane middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['Name not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = 'Something went wrong in airplane middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['Air port Code  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = 'Something went wrong in airplane middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['city id is  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    next();
} 

module.exports = {
    validateCreateRequest,
}