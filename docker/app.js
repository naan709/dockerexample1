let express = require('express')

//import connectToDatabase from './helpers.mjs'

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>First docker session!</h2>');
  console.log("Input Request received")
});

//await connectToDatabase();

app.listen(3000);
