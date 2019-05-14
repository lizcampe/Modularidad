//Aquí usamos el JSON y lo volvemos un objeto manejable por 
const datos = require ("./basedatos.json");
const modelo =()=> {
	return datos;

}

module.exports = modelo;