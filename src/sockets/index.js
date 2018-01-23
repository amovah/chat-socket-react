import fs from 'fs';
import { resolve } from 'path';

function getModules(dir) {
  let result = [];
  let files = fs.readdirSync(dir);

  for (let file of files) {
    if (file !== 'index.js') {
      fs.lstatSync(resolve(dir, file)).isFile() ?
      result.push(resolve(dir, file)) :
      result.push(...getModules(resolve(dir, file)));
    }
  }

  return result;
}

let files = getModules(__dirname);
let modules = [];

for (let file of files) {
  modules.push(require(file));
}

export default modules;
