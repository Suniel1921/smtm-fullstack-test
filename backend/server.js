const express = require('express');
const app = express();
const dotenv = require("dotenv");
const dbConnection = require('./config/dbConn');
dotenv.config();
const marketRoute = require ("./routes/marketRoute");
const cors = require ('cors');
const PORT = process.env.PORT || 5000;

//middlware
app.use(express.json())
app.use(cors());


//calling datbase 
dbConnection();

//routes
app.use('/api/v1/market', marketRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port no : ${PORT}`);
});
