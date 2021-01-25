const fs = require('fs');

/*
  Handles multiple route files allowing single line call in app.js
  looks thorugh the /routes folder and requires in all files which are not index.js
*/
module.exports = (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.js') return;
    const name = file.substr(0, file.indexOf('.'));
    require(`./${name}`)(app)
  })
}