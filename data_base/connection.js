const mongoose = require('mongoose')
const db = mongoose.connect('mongodb+srv://takshikaverma612:5cXHHv5Oi7otNj0H@cluster0.euinzpn.mongodb.net/').then(() => {
    console.log("connection successfully");
}).catch((error) => {
    console.log("connection error", error);
})
module.exports = db
