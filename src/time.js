
//const time = () => Date = new Date().toLocaleTimeString;

function ObtenerFecha()
{
let day =getDate();
let month =getMonth() + 1;
let year = getFullYear();
let hours = getHours().toString().padStart(2, '0');
let minutes = getMinutes().toString().padStart(2, '0');
let seconds = getSeconds().toString().padStart(2, '0');
let fecha = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}
export default ObtenerFecha();


