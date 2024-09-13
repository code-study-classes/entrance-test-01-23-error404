import updater from "../file-updater.js";
import getId from '../getters/get-id.js'
import readlineSync from 'readline-sync'
//завернуть в функцию
const setRegion = (name = '') => {
    let newRegion;
    if(name === ''){
     newRegion = readlineSync.question('New region:').toLowerCase().trim();
     
    } else{
        newRegion = name;
    }
const id = getId('__fixteres__/region.csv')

updater('__fixteres__/region.csv', `\n${id}|${newRegion}`);
return id;
};
export default setRegion;