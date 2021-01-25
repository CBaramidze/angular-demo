const environment = process.env.NODE_ENV;

const config = {
  development: {
    server: {
      port: process.env.PORT || 5000,
      corsAllowList: ['http://localhost:3000']
    }
  },
  testing: {
    server: {
      port: process.env.PORT || 5001,
      corsAllowList: ['http://localhost:3000']
    }
  },
  production: {

  }
};

module.exports = config[environment];