const fs = require('fs');
const path = require("path");

class FsHelper {
  read = (file) => {
    return new Promise((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, file), (err, data) => {
        if (err) reject(err);
        resolve(JSON.parse(data));
      })
    })
  }

  write = async (file, data) => {
    let fileData = await this.read(file);
    return new Promise((resolve, reject) => {
      fileData.push(data);
      fs.writeFile(path.resolve(__dirname,file), JSON.stringify(fileData), (err) => {
        if (err) reject(err);
        resolve(data);
      })
    })
  }
}

module.exports = new FsHelper();