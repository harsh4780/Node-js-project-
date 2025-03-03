const CrudRepository = require('./crud-repository')
const { Flight , Airplane, Airport, City} = require('../models');
const {Sequelize} = require('sequelize');


class FlightRepository extends CrudRepository {
    constructor() {
       super(Flight);
    }
   async  getAllFlights(filter, sortFilter) {
        const response = await Flight.findAll({
            where: filter,
            order: sortFilter,
            include :[
               { 
                model: Airplane,
                as: 'airplaneDetail', 
               },
              {
                model: Airport,
                as: 'departureAirport', 
                required: true,
                on: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code")), // Match `code` in Airport,
                include:{
                  model : City,
                  required: true,
                }
              },
              {
                model: Airport,
                as: 'arrivalAirport', 
                required: true,
                on: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code")), // Match `code` in Airport
                include:{
                  model : City,
                  required: true,
                }
              }
        ]
        });
        return response;
    }
}

module.exports = FlightRepository