const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDb = require('./src/config/db');
const router = require('./src/routes/drink.routes')

dotenv.config();
const app = express();
const port = 6000;

app.use(morgan('dev'));
app.use(express.json());

connectDb();

app.get('/', (req, res) => {
    res.send('Welcome To My Drink API');
});

app.use('/api/v1', router)

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// })
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
    
});