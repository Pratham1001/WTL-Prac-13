const express = require('express');
const morgan = require('morgan')
require('dotenv').config()
const app = express();

app.use('/',express.static('./www'))
app.use(morgan('dev'))

app.listen(3000,()=>console.log('Listening on Port 3000...'))