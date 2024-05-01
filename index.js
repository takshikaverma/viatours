const express = require('express');
const dotenv = require('dotenv');
const db = require('./data_base/connection');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const router = require("./Router/router");

dotenv.config();
/**middleware */
//cors
// app.use(cors());

// //parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({extended:false}))

// //parse application/json
// app.use(bodyParser.json())
// app.use('/public/uploads',express.static('public/uploads'))

//router
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on this ${process.env.PORT}`);
})