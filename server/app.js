require('dotenv').config();
const express = require('express');
const connectToDatabase = require('./DB/connection');
const hotelAddingRoute = require('./routes/hotel');
const getHotelRoute = require('./routes/hotel');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const uri = process.env.URI;
connectToDatabase(uri);

app.use('/', getHotelRoute);
app.use('/', hotelAddingRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
