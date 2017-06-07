var express = require('express')
var firebaseListener = require('./helpers/listenerFirebase.js')
var firebaseWrite = require('./helpers/writeFirebase.js')


var app = express()




app.listen(3000)
console.log(`Connect to port 3000`);
