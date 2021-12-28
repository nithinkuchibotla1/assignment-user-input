
const express = require('express')
const fs = require('fs');
const app = express()
var cors = require('cors')
const port = 3000


fs.writeFile('index.html', '<h1>Hello World</h1>', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
  });
  app.listen(port, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})