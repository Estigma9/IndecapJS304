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
document.getElementById("demo9.5").innerHTML = typeof carros2;

//Con Array
const carros3 = new Array("Jaguar", "Aston Martin", "Land Rover");
document.getElementById("demo9.6").innerHTML = carros3;
document.getElementById("demo9.7").innerHTML = typeof carros3;

//Cambiar un elemento
carros3[1] = "McLaren";  
document.getElementById("demo9.8").innerHTML = carros3;


//Propiedad longitud (length)
const fruit = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.9").innerHTML = fruit.length;
document.getElementById("demo9.10").innerHTML = fruit[fruit.length-1] ;

//Recorrer la matriz
//Con for
let text = "<ul>";

for (let i = 0; i < fruit.length; i++) {
    text = text + "<li>" + fruit[i] + "</li>";
}

text = text + "</ul>";

document.getElementById("demo9.11").innerHTML = text;


//Con foreach
//forma 1
let text1 = "<ul>";
fruit.forEach(misFrutas);
text1 = text1 + "</ul>";
document.getElementById("demo9.12").innerHTML = text1;

function misFrutas(valor){
    text1 = text1 + "<li>" + valor + "</li>";
}


//forma 2
let text2 = "<ul>";
fruit.forEach(valor => {
    text2 = text2 + "<li>" + valor + "</li>";
});

text2 = text2 + "</ul>";
document.getElementById("demo9.13").innerHTML = text2;


//Agregar elementos con un push
const fruit2 = ["Papayas", "Melones", "Fresas", "Sandias"]; 
document.getElementById("demo9.14").innerHTML = fruit2;

function agregarFruta(){
    fruit2.push("Limón");
    document.getElementById("demo9.15").innerHTML = fruit2;
}


//Agregar elementos con un length
const fruit3 = ["Duraznos", "Piñas", "Peras", "Uvas"];
document.getElementById("demo9.16").innerHTML = fruit3;

function agregarFruta2(){
    fruit3[fruit3.length] = "Mandarinas";
    document.getElementById("demo9.17").innerHTML = fruit3;
}


//Advertencia. Huecos indefinidos en la matriz
const fruit4 = ["Duraznos", "Piñas", "Peras", "Uvas"];
fruit4[8] = "Arandanos";

let text3 = "<ul>";

for (let i = 0; i < fruit4.length; i++) {
    text3 = text3 + "<li>" + fruit4[i] + "</li>";
}

text3 = text3 + "</ul>";

document.getElementById("demo9.18").innerHTML = text3;


//Identificar una matriz o un objeto
let instituto = "Indecap";
document.getElementById("demo9.19").innerHTML = typeof fruit4;
document.getElementById("demo9.20").innerHTML = Array.isArray(fruit4);
document.getElementById("demo9.21").innerHTML = Array.isArray(instituto);
document.getElementById("demo9.22").innerHTML = fruit4 instanceof Array;


//Converitir la matriz en String toString()
document.getElementById("demo9.23").innerHTML = fruit4.toString();
document.getElementById("demo9.24").innerHTML = typeof fruit4.toString();


//Unir los elementos de una matriz join()
document.getElementById("demo9.25").innerHTML = fruit4.join("*");


//Hacer estallar pop()
const fruit5 = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.26").innerHTML = fruit5;

fruit5.pop();
document.getElementById("demo9.27").innerHTML = fruit5;


//Remover el primer elemento shift()
const fruit6 = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.28").innerHTML = fruit6;
fruit6.shift();
document.getElementById("demo9.29").innerHTML = fruit6;
document.getElementById("demo9.30").innerHTML = fruit6.shift();


//Agregar un elemento al pricipio unshift()
document.getElementById("demo9.31").innerHTML = fruit6;
document.getElementById("demo9.32").innerHTML = fruit6.unshift("Papayas");
document.getElementById("demo9.33").innerHTML = fruit6;


//Eliminar un elemento de matriz delete
const fruit7 = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.34").innerHTML = fruit7;
delete fruit7[1];
document.getElementById("demo9.35").innerHTML = fruit7;


//Empalmar una matriz splice()
const fruit8 = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.36").innerHTML = "Matriz Original: <br>" + fruit8;

function empalmar(){
    fruit8.splice(2, 0, "Papayas", "Limones");
    document.getElementById("demo9.37").innerHTML = "Matriz Nueva: <br>" + fruit8;
}

//Eliminar elementos con splice()
const fruit9 = ["Bananas", "Manzanas", "Kiwis", "Mangos"];
document.getElementById("demo9.38").innerHTML = "Matriz Original: <br>" + fruit9;

function empalmar1(){
    fruit9.splice(2, 1);
    document.getElementById("demo9.39").innerHTML = "Matriz Nueva: <br>" + fruit9;
}


//Concatenar matrices
const boys = ["Luis", "Alejandro", "Jhons"];
const girls = ["Lina", "Yuleima", "Margarita"];
const miGrupo = girls.concat(boys);
document.getElementById("demo9.40").innerHTML = miGrupo;
document.getElementById("demo9.41").innerHTML = typeof miGrupo;
document.getElementById("demo9.42").innerHTML = Array.isArray(miGrupo);

const girls2 = girls.concat("María");
document.getElementById("demo9.43").innerHTML = girls2;


//Cortar una matriz slice()
const subGrupo = miGrupo.slice(4);
document.getElementById("demo9.44").innerHTML = subGrupo;

const subGrupo1 = miGrupo.slice(1, 3);
document.getElementById("demo9.45").innerHTML = subGrupo1;



//Organizar la matriz sort()
const clase = ["Luis", "Alejandro", "Jhons", "Lina", "Yuleima", "Margarita"];
document.getElementById("demo9.46").innerHTML = clase;

function ordenarAsc(){
    clase.sort();
    document.getElementById("demo9.47").innerHTML = clase;
}


//reverse()
function dirOpuesta(){
    clase.reverse();
    document.getElementById("demo9.48").innerHTML = clase;
}


//Ordenar una matriz que tiene objetos
const carros4 = [
    {marca: "Volvo", año: 2016},
    {marca: "Saab", año: 2007},
    {marca: "BMW", año: 2006}
];

mostrarCarros();

function ordenCarros(){
    carros4.sort(function(a, b){return a.año - b.año});
    mostrarCarros();
}

function mostrarCarros(){
    document.getElementById("demo9.49").innerHTML = 
    carros4[0].marca + " " + carros4[0].año + "<br>" +
    carros4[1].marca + " " + carros4[1].año + "<br>" +
    carros4[2].marca + " " + carros4[2].año;
}
