//Use NPM RUN watch to start the script

const EXPRESS = require('express');
const mongoose = require('mongoose');
const DOTENV = require('dotenv');
const CORS = require('cors');
const bodyParser = require('body-parser');
DOTENV.config();
const APP = EXPRESS();
APP.use(CORS());
APP.use(bodyParser.json());
const PORT = process.env.PORT || 8089;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (error) => {
    if (error) {
        console.log('Database Error: ', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Connection Sucessfull');
});

APP.get('/',()=>{
    console.log("Backend Server Running");
})

APP.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
});