const express = require('express');
const app = express();
const morgan = require('morgan');
const {PORT} = require('./config');

const apiRoutes = require('./routes')

app.use(morgan('dev')); // log every request to the console

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', apiRoutes);

// app.get('/', (req, res) =>{
//     res.send('Hello, World!');
// })


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

