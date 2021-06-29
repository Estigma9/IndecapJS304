//Objetos en JS
//Los objetos tienen propiedades y/o métodos
//Valores primitivos NO tienen propiedades, ni métodos

//Notación de un Objeto
//Forma 1
let usuario = {
    'primerNombre': "Alejandro",
    'apellido': "Garzón",
    'edad': 85,
    'colorOjos': "Cafe" 
};

document.getElementById("demo10.0").innerHTML = usuario.primerNombre + " " + usuario.apellido; 

//Forma 2
const usuario2 = new Object();
usuario2.primerNombre2 = "Lina";
usuario2.apellido2 = "Echeverri";
usuario2.edad2 = 41;
usuario2.colorOjos2 = "Cafe";
document.getElementById("demo10.1").innerHTML = usuario2.primerNombre2 + " " + usuario2.apellido2;


//Propiedades de los Objetos
//Otro llamado de la propiedad
document.getElementById("demo10.2").innerHTML = usuario["primerNombre"] + " tiene " + usuario["edad"] + " años.";


//Recorrer las propiedades con un bucle
let texto = "";

for (let key in usuario2) {
    texto = texto + usuario2[key] + " ";    
}

document.getElementById("demo10.3").innerHTML = texto;


//Agregar nuevas propiedades
usuario2.nacionalidad2 = "Colombiana";
document.getElementById("demo10.4").innerHTML = usuario2.primerNombre2 + " es " + usuario2.nacionalidad2;

//Eliminar una Propiedad
delete usuario2.colorOjos2;
document.getElementById("demo10.5").innerHTML = usuario2.primerNombre2 + " tiene ojos " + usuario2.colorOjos2;

let texto101 = "";

for (const key1 in usuario2) {
    texto101 = texto101 + usuario2[key1] + " ";  
}

document.getElementById("demo10.6").innerHTML = texto101;


//Objetos Anidados



