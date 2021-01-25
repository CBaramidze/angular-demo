const app = require('../src/app');
const chaiHttp = require('chai-http');
const http = require('http');
const server = http.createServer(app);

before(async () => {
  global.app = server;
  global.chai = require('chai');
  global.expect = global.chai.expect;
  global.chai.use(chaiHttp);
});

after((done) => {
  global.chai.request(app).close();
  done();
});

