This is a base node js project template , which anyone can as it is has been 
prepared ,by keeping some of the most important code  principles and project
management reccomondations. Feel free to change anything

`src` ->  Inside the src folder all the actual source code regarding the projecct will 
reside, this will not include any kind of tests . (You might want to make seprate tests
folder)


Lets take a look the `src` folder

 - `config` -> In this folder anything and everthing regarding any configations or setup libraries
 or modules will be done . For example: Settings up `dotenv` so that we can use the environment
 variables in a cleaner fashion , this is done in the server config. One mor example can be to 
 setup you logging libraries to meaningful logs, configuration this library should also be done here


  - `routes` -> In the routes folder we register a route and this corresponding middleware and controller
  to it. 

  - `middleware` -> they are just going to intercept the incoming requests where we can write our validates ,
  authenticators etc.

 - `controllers` -> they are kind of last middleware as post then you call you business layer to remote to execute
 layer to execute the business logic. In Controller we just receive the incoming request and data passed to business
 layer and once returned output , we structure the API response in Controller  and send the output.


- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the 
raw queries will go here.

- `services` -> this folder contains all the business logic and intercts with repositories for data from the database

- `utils` -> this contains helper methods for and error methods


### Setup the project 

- Download the template from github and open it in your favorite test editor
- Go inside the folder part and execute the following command 
``` 
    npm install 

- In the root directory create a new `env` file and add the following env variables'
    ```
        PORT => port number of your choice
    ```
    ex:
    ```
        PORT=3000
    ```


- Inside the src/config folder create a new `config.json` and write a follwowing codes
```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


- go inside a `src` folder and execute following command
```
    npx sequelize init 

```
- By executing the above command you will get migration and seeders folder along with a config.json 
inside the config folder 

- If You are setting up your development environment , then write the name of your development username of your db
and password of your db and dilect mentioned whatever db you are using for ex:
mysql , mariadb etc

- If you're setting up test or prod enviourment , make sure you also the host with hosted db url 


- To run the server execute
```
npm run dev 
```