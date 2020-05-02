require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log("Connected to the database"));

app.use(express.json())

//CORS on ExpressJS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.APP_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


const proposalsRouter = require('./routers/proposals');
app.use('/proposals', proposalsRouter);

app.listen(777, () => console.log('Server started..'));
