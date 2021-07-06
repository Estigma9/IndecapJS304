//Objetos en JS
//Los objetos tienen propiedades y/o métodos
//Valores primitivos NO tienen propiedades, ni métodos

//Notación de un Objeto
//Forma 1
let usuario = {
    'primerNombre': "Alejandro",
    'apellido': "Garzón",
    'edad': 85,
    'colorOjos': "Café" 
};

document.getElementById("demo10.0").innerHTML = usuario.primerNombre + " " + usuario.apellido; 

//Forma 2
const usuario2 = new Object();
usuario2.primerNombre2 = "Lina";
usuario2.apellido2 = "Echeverri";
usuario2.edad2 = 41;
usuario2.colorOjos2 = "Café";
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
let usuario3 = {
    'primerNombre3': "Luis",
    'apellido3': "Rodríguez",
    'edad3': 19,
    'colorOjos3': "Café",
    'instruMusicales': {
        'instrumento1': 'Piano',
        'instrumento2': 'Guitarra',
        'instrumento3': 'Marimba',
        'instrumento4': 'Llamador',
        'instrumento5': 'Flauta de Pan',
        'instrumento6': 'Saxofón',
        'instrumento7': 'Trombon',
    }
};

document.getElementById("demo10.7").innerHTML = usuario3.instruMusicales.instrumento5;


//Objeto con Matrices
let usuario4 = {
    'primerNombre4': "Yuleima",
    'apellido4': "Rodríguez",
    'edad4': 30,
    'colorOjos4': "Café",
    'carros': [
        {'nombre': 'Renault', 'modelos': ["Duster", "Megane", "Koleos", "Kwid"]},
        {'nombre': 'Ford', 'modelos': ["Fiesta", "FUsion", "Explorer", "F-150"]},
        {'nombre': 'Fiat', 'modelos': ["500", "Punto", "Panda", "Uno"]},
    ],
};

let texto102 = "";

for (let i in usuario4.carros) {
    texto102 = texto102 + "<h2>" + usuario4.carros[i].nombre + "</h2>";
    for (let j in usuario4.carros[i].nombre) {
        texto102 = texto102 + usuario4.carros[i].modelos[j] + "<br>";        
    }
};

document.getElementById("demo10.8").innerHTML = texto102;


//Métodos
let usuario5 = {
    //Propiedades
    primerNombre5: "Jhons",
    apellidos5: "Garret",
    edad5: 24,
    colorOjos5: "Café",
    
    //Métodos
    nombreCompleto: function(){
        return this.primerNombre5 + " " + this.apellidos5;   
    }
};

document.getElementById("demo10.9").innerHTML = usuario5.nombreCompleto();


//Agregar un Método
usuario5.nombreEdad = function(){
    return this.primerNombre5 + " tiene " + this.edad5 + " años.";
};

document.getElementById("demo10.10").innerHTML = usuario5.nombreEdad();


//Visualización de los Objetos
let usuario6 = {
    //Propiedades
    primerNombre6: "Daniel",
    apellidos6: "Calle",
    edad6: 26,
    colorOjos6: "Café",
    hoy: new Date(),
    
    //Métodos
    nombreCompleto6: function(){
        return this.primerNombre6 + " " + this.apellidos6;   
    }
};

document.getElementById("demo10.11").innerHTML = usuario6;
document.getElementById("demo10.12").innerHTML = Object.values(usuario6);

const arregloUsuario = Object.values(usuario6);
document.getElementById("demo10.13").innerHTML = arregloUsuario;

//Visualización con JSON
let cadenaUsuario = JSON.stringify(usuario6);
document.getElementById("demo10.14").innerHTML = cadenaUsuario;

document.getElementById("demo10.15").innerHTML = typeof cadenaUsuario;

usuario6.nombreCompleto6 = usuario6.nombreCompleto6.toString();
document.getElementById("demo10.16").innerHTML = JSON.stringify(usuario6);


//Accesores de Objetos Getter y Setter
//get
let usuario7 = {
    //Propiedades
    primerNombre7: "Bryan",
    apellido7: "Niño",
    edad7: 24,
    colorOjos7: "Cafe",
    idioma: 'Ingles',
    
    //Métodos
    get idiom() {
        return this.idioma
    }  
};

document.getElementById("demo10.17").innerHTML = usuario7.idiom;

//set
let usuario8 = {
    //Propiedades
    primerNombre8: "Jhon",
    apellido8: "Gómez",
    edad8: 24,
    colorOjos8: "Cafe",
    idioma: '',
    
    //Métodos
    set lengua(valor) {
        this.idioma = valor
    }  
};

usuario8.lengua = "Francés";

document.getElementById("demo10.18").innerHTML = usuario8.idioma;


//Constructores
//Función constructora
function Usuarios(first, last, age, eyes){
    //Propiedades
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyes;
    this.nationality = "Islandes"; 

   //Métodos
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
};

//Crear el Objeto
const miAbuela = new Usuarios("Helena", "Hernández", 80, "Azules");

document.getElementById("demo10.19").innerHTML = 
"Mi abuela es " + miAbuela.firstName + " " + miAbuela.lastName + " y tiene " + miAbuela.age + " años.";

//Agregar un método a mi objeto
miAbuela.fullName = function(){
    return this.firstName + " " + this.lastName; 
};

document.getElementById("demo10.20").innerHTML = 
"Mi abuela es " + miAbuela.fullName();

//Agregar propiedad al constructor
//No funciona igual que con un Objeto
Usuarios.nationality = "Noruega";

miAmigo = new Usuarios("Jose", "Acosta", 41, "Café");

document.getElementById("demo10.21").innerHTML = 
"Mi amigo " + miAmigo.firstName + " " + miAmigo.lastName + " es de " + miAmigo.nationality;

document.getElementById("demo10.22").innerHTML = miAmigo.fullName();


