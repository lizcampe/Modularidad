const svr = require ('http');
const url = require ('url');
const modelo = require ('./orm');

const host ='127.0.0.1';
const puerto = '8080';

const servidor = svr.createServer((pet,resp) => { 
	resp.setHeader ('Content-Type', 'text/plain');
	if (pet.method =='GET'){
		respuesta= procesaGet(pet);
		resp.statusCode=200;
		} else if (pet.method == 'POST') {
			respuesta = procesaPost(pet);
			resp.statusCode =200;
		}else {
			resp.statusCode =404;

		}
		resp.end(respuesta);
});

servidor.listen(puerto, host, () => {
	console.log ('La aplicación está corriendo en : '+host+':'+puerto);
});

function procesaGet(peticion) {

	console.log (peticion.url);

	let miURL= url.parse(peticion.url, TRUE);
	if startsWith()  {
		let nuevoRegistro ={
			nombre: miURL.query.n,
			apellido_paterno: miURL.query.ap,
			apellido_materno: miURL.query.am
		}
		modelo.push(nuevoRegistro);
		}
	}


let objeto = {nombre: "valor", apellido_paterno: "valor", apellido_materno: "valor", 
modelo.push (objeto);
}
function procesaPost(peticion){


}