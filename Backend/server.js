const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const FrontendHost = "http://localhost:3000";
const AccessOrigin = "Access-Contrl-Allow-Origin";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.options('*',cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

app.get('/',(req,res)=>{
    res.setHeader(AccessOrigin,FrontendHost);
    res.json({message:`Our project is running on port ${7001}`});
    res.send();
});

const database = require("./app/models/index");
database.sequelize.sync();

require("./app/routes/studentRoutes")(app);

require("./app/routes/citiesRoutes")(app);

app.listen(process.env.PORT || 7001, ()=>{
    console.log("server started");
    console.log({message:`Our project is running on port ${7001}`})
});