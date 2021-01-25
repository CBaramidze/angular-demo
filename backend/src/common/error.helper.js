const { logger } = require('./logger');

const commonErrorHandler = (res, err) => {
  logger.error(err);
  res.status(err.status).send(err.message);
}

module.exports = {
  commonErrorHandler
}