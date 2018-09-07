var botonAdd = document.getElementById('addIngrediente');
var botonCrearSapo = document.getElementById('crearSapo');
//botonAdd.addEvenListener('click', addIngredientes); //Estoy llamando la funcion de abajo descrita
//botonCrearSapo.addEvenListener('click', addSapo); // Estoy llamando la funcion de abajo 

function addIngredientes() {
// El array con los ingredientes
var ingredientes = ['aspirinas', 'fotones', 'gramófono'];
// Armamos la cadena recorriendo el array
var cadena = "<ul>";
for (var i=0, len=ingredientes.length; i<len; i++) {
cadena += "<li>"+ingredientes[i]+"</li>";
}
cadena += "</ul>";
// Insertamos la cadena
var maquina = document.getElementById('maquina').innerHTML = cadena;
// Cambiamos el estado de la máquina
var clasesMaquina = document.getElementById('maquina').classList;
clasesMaquina.remove('vacia');
clasesMaquina.add('llena');
}
function crearSapo() {
// Seleccionamos la máquina para tenerla ya almacenada para todas las operaciones que vienen ahora
	var maquina = document.getElementById('maquina');
	var sapo = "<div>Soy un sapo de colores que baila swing</div>";
	// Comprobamos que la máquina está llena
	if ( maquina.classList.contains('llena') ) {
	// Añadimos un sapillo
	maquina.insertAdjacentHTML('afterend', sapo);
	}
}
function init() {
// Seleccionamos los botones
var botonAdd = document.getElementById('addIngrediente');
var botonCrear = document.getElementById('crearSapo');
// Lanzamos las escuchas
botonAdd.addEventListener('click', addIngredientes);
botonCrear.addEventListener('click', crearSapo);
// Reseteamos la máquina poniéndola vacía
var maquina = document.getElementById('maquina');
maquina.setAttribute('class', 'vacia');
}

