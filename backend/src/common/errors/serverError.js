/* 
  Generic Server Error class
*/
class ServerError extends Error {
  constructor() {
    super();
    Error.captureStackTrace(this, this.constructor)
    this.name = 'ServerError';
    this.message = 'Unable to fufill request';
    this.status = 500
  }
}

module.exports = {
  ServerError
};