var estudiante = [
{"codigo" : "01", "nombre" : "Carlos", "nota" : 9},
{"codigo" : "02", "nombre" : "Luz", "nota" : 9},
{"codigo" : "03", "nombre" : "Karen", "nota" : 8},
{"codigo" : "04", "nombre" : "Yuri", "nota" : 7},
{"codigo" : "05", "nombre" : "Joe", "nota" : 8},
{"codigo" : "06", "nombre" : "Chavita", "nota" : 5},
{"codigo" : "07", "nombre" : "Sandy", "nota" : 6},
{"codigo" : "08", "nombre" : "Piti", "nota" : 8},
{"codigo" : "09", "nombre" : "Jatzy", "nota" : 9},
{"codigo" : "10", "nombre" : "Angie", "nota" : 1}
];

function mostrarDatos(json){
var output = "<h3>Datos de los alumnos</h3> <br>";
	output += "<table style='width: 100%;' border = 1>" + 
							"<tr>" +
								"<th>Codigo</th>" +
								"<th>Nombre</th>" +
								"<th>Nota</th>" +
							"</tr>" ;
	for (var i = 0; i < json.length; i++) {
			output += "<tr>" +
							"<td>" + json[i].codigo + "</td>" +
							"<td>" + json[i].nombre + "</td>" +
							"<td>" + json[i].nota + "</td>" +
					  "</tr>";
		}	
output += "</table>";
document.getElementById("panel").innerHTML = output;
}
function promedio(json){
	var promedio = 0;
	var suma =0;
	for (var i = 0; i < json.length; i++) {
		suma += json[i].nota;
	}
	promedio = suma/10;
	document.getElementById("panel").innerHTML = promedio;
}
function mayorNota(json){
	var out = "<h3> Mayor Nota </h3>";
	var pos = 0;

	for (var i = 0; i < json.length; i++) {
		if (json[i].nota > pos) {
			pos = json[i].nota;
		}
	}
	out += "La nota mayor es: " + pos;
	document.getElementById("panel").innerHTML = out;
}
function menorNota(json){
	var out = "<h3>Menor Nota </h3>"
	var pos = json[0].nota;
	for (var i = 0; i < json.length; i++) {
		if (json[i].nota < pos) {
			pos = json[i].nota
		}
	}
	out += "La nota menor es de: " + pos;
	document.getElementById("panel").innerHTML = out;
}
function mostrarEstudiantes(){
	mostrarDatos(estudiante);
}
function mostrarPromedio(){
	promedio(estudiante);
}
function mostrarMayor(){
	mayorNota(estudiante);
}
function mostrarMenor(){
	menorNota(estudiante);
}