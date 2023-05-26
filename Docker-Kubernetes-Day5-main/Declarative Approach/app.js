const express = require('express');
var os = require("os");
var hostname = os.hostname();

const app = express();

app.get('/', (req, res) => {
  console.log("input request received");
  res.send(`
    <h1>Hello from this NodeJS app! in ${hostname}</h1>
    <p>Try sending a request to /error and see what happens</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
