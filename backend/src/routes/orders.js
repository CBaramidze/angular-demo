
const { commonErrorHandler } = require('../common/error.helper');
const ordersHelper = require('../common/orders.helper');

module.exports = app => {
  app.get('/orders', async (req, res) => {
    try {
      const orders = await ordersHelper.getAllOrders();
      res.send(orders);
    } catch (error) {
      commonErrorHandler(res, error);
    }
  });
  
  app.post('/orders', async (req, res) => {
    try {
      const order = await ordersHelper.postOrder(req.body);
      res.send(order);
    } catch (error) {
      commonErrorHandler(res, error);
    }
  });
}
