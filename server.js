const express = require( 'express' );
const app = express();
const bodyParser = require('body-parser');
const mongodb = require('./data/database');


const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    }
    else {
      // Start the server
      app.listen(port, () => {
        console.log(`Running on port ${port}`);
      });
    }
  
  });