
const { commonErrorHandler } = require('../common/error.helper');
const productsHelper = require('../common/products.helper');

module.exports = app => {
  app.get('/products', async (req, res) => {
    try {
      const products = await productsHelper.getAllProducts();
      res.send(products);
    } catch (error) {
      commonErrorHandler(res, error);
    }
  });
}
