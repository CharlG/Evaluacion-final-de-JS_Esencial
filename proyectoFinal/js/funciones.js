var estudiante = [
{"codigo" : "01", "nombre" : "Carlos", "nota" : 10},
{"codigo" : "02", "nombre" : "Luz", "nota" : 9 },
{"codigo" : "03", "nombre" : "Karen", "nota" : 8},
{"codigo" : "04", "nombre" : "Yuri", "nota" : 7},
{"codigo" : "05", "nombre" : "Joe", "nota" : 6},
{"codigo" : "06", "nombre" : "Chavita", "nota" : 5},
{"codigo" : "07", "nombre" : "Sandy", "nota" : 6},
{"codigo" : "08", "nombre" : "Piti", "nota" : 10},
{"codigo" : "09", "nombre" : "Jatzy", "nota" : 9},
{"codigo" : "10", "nombre" : "Angie", "nota" : 8}
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
function mostrarEstudiantes(){
	mostrarDatos(estudiante);
}
//"Codigo: " + json[i].codigo + " Nombre: " + json[i].nombre + " Nota: " + json[i].nota + "<br>";