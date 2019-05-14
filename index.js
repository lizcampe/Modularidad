
const http = require ('http');
const router = require ('./orm');
http.createServer(router).listen(8080);


