//Métodos de los Arreglos o Matrices


//Arreglos
const carros = ["Saab", "Volvo", "BMW"];
document.getElementById("demo9.0").innerHTML = carros;
document.getElementById("demo9.1").innerHTML = carros[1];

const carros1 = [
    "Renault",
    "Mazda",
    "Ford"
];
document.getElementById("demo9.2").innerHTML = carros1;
document.getElementById("demo9.3").innerHTML = carros1[1];

//Asignar valores
const carros2 = [];
carros2[0] = "Ssang Yong";
carros2[1] = "Channa";
carros2[2] = "BYD";
document.getElementById("demo9.4").innerHTML = carros2;

//Con Array
const carros3 = new Array("Jaguar", "Aston Martin", "Land Rover");
document.getElementById("demo9.5").innerHTML = carros3;

//Cambiar un elemento
carros3[1] = "McLaren";  
document.getElementById("demo9.6").innerHTML = carros3;


//Lo propiedad longitud (length)
const fruit = ["Bananas", "Manzanas", "Kiwis", "Mango"];
document.getElementById("demo9.7").innerHTML = fruit.length;
document.getElementById("demo9.8").innerHTML = fruit[fruit.length-1] ;

//Recorrer la matriz
let text = "<ul>";

for (let i = 0; i < fruit.length; i++) {
    text = text + "<li>" + fruit[i] + "</li>";
}

text = text + "</ul>";

document.getElementById("demo9.9").innerHTML = text;





