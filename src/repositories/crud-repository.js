const {StatusCodes} = require('http-status-codes');
const AppError = require('../utils/errors/app-error')
class crudRepository {
    constructor(model){
        this.model = model;
    }
    async create(data){
            const response = await this.model.create(data);
            return response;
        
    }
    async destroy(data){
       
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!response){
                throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);  // 404 Not Found error
            }
            return response;
       
    }

    async get(data){
        
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppError('Airplane not found', StatusCodes.NOT_FOUND);  // 404 Not Found error
            }
            return response;
        }
        
    
    async getAll(){
        
            const response = await this.model.findAll();
            return response;
        
        
    }
    
    async update(id,data){ // data is a object=> {column and value}
        
            const response = await this.model.update(data,{
                where:{
                    id:id,
                }
            });
            return response;
    }
        
    
}

module.exports = crudRepository;