require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const helmet = require('helmet');
const config = require('./config');
const ErrorHelper = require('./common/error.helper');
const app = express();

/* 
  Express Middleware
*/
//app.use(requireHTTPS); <- Production Feature : Should reject out any attempt to communicate outside of TLS
app.use(helmet()) // Ensure this stays near top of middleware stack for security
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'))

// Routes
require('./routes')(app)

var publicDir = path.join(__dirname, 'public');

// For images
app.use('/public', express.static(publicDir));

/* Error Handler not caught in endpoint*/
app.use((err, req, res, next) => {
  console.log(res);
  ErrorHelper.commonErrorHandler(res, err)
});

app.listen(config.server.port, () => {
  console.log(`Server Started: Listenting on http://localhost:${config.server.port}`)
});

module.exports = app;