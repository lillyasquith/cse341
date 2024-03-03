// W01 Learning Activity: Web Services and Node Architecture
// const express = require( 'express' );
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Ly');
// });

// const port = 3000;

// app.listen(process.env.port || port);
// console.log('Web Server is listening at port' + (process.env.port || port));






// Contacts Project: Part 1 START HERE

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import Routes
app.use('/', require('./routes'));

// Start the server
app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
