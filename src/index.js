const express = require('express');
const { testRoute } = require('./routes/test/testRoutes');
const app= express()
require('dotenv').config();
app.use('/test',testRoute);
let port =process.env.PORT;
app.listen(port,()=>{
    console.log('The server is listening on',port);
});