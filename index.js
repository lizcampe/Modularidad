'use strict'
const http = require('http'); 
const router = require('./router');
const port=3000;



http.createServer(router).listen(3000)