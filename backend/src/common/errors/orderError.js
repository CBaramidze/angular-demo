/* 
  Order Api Error class
*/
class OrderApiError extends Error {
  constructor() {
    super();
    Error.captureStackTrace(this, this.constructor)
    this.name = 'OrderError';
    this.message = 'Unable to retreive orders';
    this.status = 500
  }
}

module.exports = {
  OrderApiError
};