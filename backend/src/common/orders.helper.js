const constants = require("./constants");
const fsHelper = require("./fs.helper");
const { OrderApiError } = require("./errors/orderError");

class OrdersHelper {

  getAllOrders = async () => {
    try {
      return await fsHelper.read(constants.DATA_FILES.ORDERS);
    } catch (error) {
      throw new OrderApiError();
    }
  }

  postOrder = async (orders) => {
    try {
      return await fsHelper.write(constants.DATA_FILES.ORDERS, {
        products: [...orders],
        total: orders.map((product) => product.quantity * product.price).reduce((a, b) => a + b, 0)
      });
    } catch (error) {
      console.log(error);
      throw new OrderApiError();
    }
  }
}
module.exports = new OrdersHelper();