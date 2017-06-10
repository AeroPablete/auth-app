// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./router');

// App Setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

// Server Setup
mongoose.connect(config.db_uri)
    .then(() => {
        const server = http.createServer(app);
        server.listen(config.port);
        console.log(`Server listening on port ${config.port}`);
    })
    .catch(() => console.log('Error connecting to the database'));

