const constants = require("./constants");
const fsHelper = require("./fs.helper");
const { ProductApiError } = require("./errors/productError");
const { logger } = require("./logger");

class ProductsHelper {
  getAllProducts = async () => {
    try {
      return await fsHelper.read(constants.DATA_FILES.PRODUCTS);
    } catch (error) {
      throw new ProductApiError();
    }
  }
}
module.exports = new ProductsHelper();