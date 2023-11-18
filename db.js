const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://admin:admin@cluster0.a2sgvgw.mongodb.net/mern';
mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on('connected', () => {
    console.log(`mongodb connected`);
});

db.on('error', () => {
    console.log(`mongodb connection failed`);
});

module.exports = mongoose;
