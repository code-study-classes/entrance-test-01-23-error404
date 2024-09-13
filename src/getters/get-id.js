import reader from "../file-reader.js"

const getId = (fPath) =>{
    const id = reader(fPath).length;
}
export default(getId);