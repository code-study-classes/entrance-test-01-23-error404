import getPath from "./get-path.js";
import fs from 'fs'
import redlineSync from 'readline-sync'
import reader from './file-reader.js';

const updater = (fPath,puttern) => {
const filePath = getPath(fPath);
const oldData = reader('__fixtures__/region.csv').length;
console.log(oldData);
fs.appendFileSync(filePath, puttern, 'utf-8');
};
export default(updater);


