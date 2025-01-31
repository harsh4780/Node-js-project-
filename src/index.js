const express = require('express');
const app = express();
const morgan = require('morgan');
const {PORT} = require('./config');
const {sequelize} = require('sequelize');

const apiRoutes = require('./routes')

app.use(morgan('dev')); // log every request to the console

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

// app.get('/', (req, res) =>{
//     res.send('Hello, World!');
// })


app.listen(PORT, async ()=>{
    console.log(`Server is running on port ${PORT}`);

    const {City, Airport} = require('./models');
    const bengaluru = await City.findByPk(1);

    // const airport = await Airport.create({name:'Kempegoda Airport', code:'BLR', cityId:1});
    // const hubLli = await bengaluru.createAirport({name:'Hubballi Airport', code:'HBL'});
    // console.log(hubLli);
    // const airportsInBlr = await bengaluru.getAirports();
    // console.log(airportsInBlr);

    
});

