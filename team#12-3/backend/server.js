const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const doctorRoutes = require('./routes/doctorRoutes');
const userRoutes = require('./routes/userRoutes');

mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const con = mongoose.connection

con.on('open', () => {
    console.log("DB Connection successful...");
})

con.on('error', () => {
    console.log("DB connection failed...");
})

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,() => {
    console.log('Listening on Port',process.env.PORT);
});


app.use('/api/doctor', doctorRoutes);
app.use('/api/user', userRoutes);
