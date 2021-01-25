/* 
  Product Api Error class
*/
class ProductApiError extends Error {
  constructor() {
    super();
    Error.captureStackTrace(this, this.constructor)
    this.name = 'ProductError';
    this.message = 'Unable to retreive products';
    this.status = 500
  }
}

module.exports = {
  ProductApiError
};