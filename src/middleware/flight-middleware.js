
const {StatusCodes} = require('http-status-codes')
const { ErrorResponse } = require('../utils/common')
const AppError = require('../utils/errors/app-error')
function validateCreateRequest(req, res, next){
    if(!req.body.flightNumber){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['flightNumber Not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.airplaneId){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['airplaneId not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.departureAirportId){
        ErrorResponse.message = 'Something went wrong in flight middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['departureAirportId  is  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.arrivalAirportId){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['arrivalAirportId  is  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.arrivalTime){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['arrivalTime  is  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.departureTime){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['departureTime  is  not found in the incomming request'],
             StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    if(!req.body.totalSeats){
        ErrorResponse.message = 'Something went wrong in flights middleware please try again';
        
        ErrorResponse.error = new AppError(
            ['totalSeats  is  not found in the incomming request'],
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