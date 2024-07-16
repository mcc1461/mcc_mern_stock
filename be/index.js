const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//: Connect to MongoDB
const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected to mern_stock');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
}
dbConnection();


app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));


app.use('/auth', require('./routes/authRoute'));


















app.get('/', (req, res) => {
    res.send('Hello World');
    }
);


app.listen(8061, () => {
    console.log('Server is running on port 8061');
    }
);
