const mongoose = require('mongoose');
const dotenv = require("dotenv");

dotenv.config()

const url = process.env.MONGO_URI;
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))