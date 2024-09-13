import updater from "../file-updater.js";
import getId from "../getters/get-id.js";
import readlineSync from "readline-sync";
import reader from "../file-reader.js";
import setRegion from "./set-region.js";

const setHotel = () =>{
const newHotel = readlineSync.question("New hotel: ").toLowerCase().trim();
const id = getId('__fixtures__/hotel.csv');
const regionToAdd = readlineSync.question('Region: ').toLowerCase().trim();
const region = reader('__fixtures__/region.csv');
const filtered = region.filter((string) => {
    const[, name] = string.split(';');
    return name === readlineSync ? true : false;
});
console.log(filtered);
let regionId;
if (filtered.length !== 0){
    regionId = filtered.at(0).split(';').at(0);
} else{
    console.log(`Регион ${regionToAdd} не существует`);
    const markToAdd = readlineSync.question('Вы хотите добавить новый регион? [y/n]').toLowerCase().trim();
    if(markToAdd === 'y'){
        regionId = setRegion(regionToAdd);
    } else{
        return false;
    }
};
updater('__fixtures__/hotel.csv', `\n${id};${newHotel}:${regionId}`);

return true;
};
setHotel();
//export default{setHotel};
