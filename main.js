// alert('Hola mundo');

var nombre = "Victor Robles";
var altura = 190;

// AGREGAMOS INFORMACION EN HTML
// var concatenacion = nombre + " " + altura;
// document.write(concatenacion);

// AGREGAMOS INFORMACION EN HTML
// var datos = document.getElementById("datos")
// datos.innerHTML = `
//     <h1>Soy la caja de datos</h1>
//     <h2>Mi nombre es: ${nombre}</h2>
//     <h3>Mido ${altura}</h3>
// `;

// CONDICIONALES
// if (altura >= 190) {
//     datos.innerHTML += `<h1>Eres una persona ALTA</h1>`;
// } else {
//     datos.innerHTML += `<h1>Eres una persona BAJITA</h1>`;
// }

// BUCLES ITERADORES
// for (var i = 2000; i <= 2020; i++) {
//     // Bloque de instrucciones
//     datos.innerHTML += "<h2>Estamos en el año " + i;
// }

// FUNCIONES
function muestraMiNombre(nombre, altura) {
    var misDatos = datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido ${altura}</h3>
    `;
    return misDatos;
}

function imprimir() {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraMiNombre("Victor Robles WEB", 190);
}

imprimir();

// VARIABLES ARRAY
var nombres = ["Victor", "Antonio", "Joaquin"];
// alert(nombres[1]);
// alert(nombres.length);

// RECORREMOS ARRAY CON BUCLE FOR
// for (i = 0; i < nombres.length; i++) {
//     document.write(nombres[i] + '</br>');
// }

// RECORREMOS ARRAY CON EL METODO "FOREACH", EL CUAL EJECUTA UNA FUNCION ANONIMA POR CADA ELEMENTO DEL ARREGLO
// nombres.forEach(function (nombre, i) {
//     document.write(nombre + '</br>');
// })

// LO MISMO QUE ANTES, PERO EJECUTA UNA FUNCION DE FLECHA EN LUGAR DE UNA FUNCION ANONIMA, ES MAS CONCISO Y MODERNO ESCRIBIRLO ASI
nombres.forEach((nombre, i) => {
    document.write(nombre + '</br>');
})

// FUNCION ANONIMA
const sum = function (a, b) {
    return a + b;
}

// FUNCION DE FLECHA
const sum2 = (a, b) => {
    return a + b;
}

// FUNCION DE FLECHA CON SINTAXIS MAS BREVE
const sum3 = (a, b) => a + b;

// OBJETOS JSON
var coche = {
    modelo: 'Mercedes Clase A',
    velocidad_maxima: 500,
    antiguedad: 2020,
    mostrarDatos() {
        console.log(this.modelo, this.velocidad_maxima, this.antiguedad)
        console.log(this.modelo, this.velocidad_maxima, this.antiguedad)
        console.log(this.modelo, this.velocidad_maxima, this.antiguedad)
    },
    propiedad1: "Valor aleatorio"
}

document.write("<h1>" + coche.antiguedad + "</h1>");
coche.mostrarDatos();
console.log(coche);

// PROMESAS

/* Explicame estas lineas de codigo
Estas líneas de código muestran un ejemplo de código JavaScript que utiliza promesas.
Una promesa es un objeto en JavaScript que representa la terminación o el fracaso de una operación asíncrona. Una promesa se puede usar para manejar cualquier código que tenga un tiempo de espera o que requiera una respuesta de un servidor.
La primera línea crea una nueva promesa llamada "saludar". Se pasa una función a la promesa que toma dos argumentos: "resolve" y "reject". Estos dos argumentos son funciones que se llamarán cuando la promesa se resuelva o se rechace, respectivamente.
La función que se pasa a la promesa establece un temporizador de 2000 milisegundos (2 segundos) con la función "setTimeout". Después de 2 segundos, se define una variable "saludo" con una cadena de texto.
Si la variable "saludo" es verdadera, entonces se llama a la función "resolve" y se pasa el valor de "saludo". Si la variable "saludo" es falsa, entonces se llama a la función "reject" y se pasa una cadena de texto "No hay saludo disponible".
Después de crear la promesa, se utiliza el método "then" para procesar el resultado de la promesa. El método "then" recibe una función que se ejecutará cuando la promesa se resuelva. En este caso, se utiliza la función "alert" para mostrar el resultado en una ventana emergente.
Si la promesa es rechazada, se puede usar el método "catch" para procesar el error. El método "catch" recibe una función que se ejecutará cuando la promesa sea rechazada. En este caso, se utiliza la función "alert" para mostrar el mensaje de error en una ventana emergente.
En resumen, este código muestra cómo crear y usar una promesa para manejar código asíncrono y mostrar el resultado o el error en una ventana emergente.
*/

/* Para que se utilizan las promesas?
Las promesas se utilizan para manejar código asíncrono en JavaScript.
El código asíncrono es aquel que no se ejecuta de manera secuencial o sincrónica, es decir, no espera a que una tarea se complete antes de comenzar la siguiente. Por ejemplo, una petición a un servidor o un temporizador.
Las promesas permiten manejar este tipo de código de manera más sencilla y legible, permitiendo la ejecución de código cuando una tarea asíncrona se complete, sin tener que usar callbacks anidados.
Además, las promesas ofrecen una forma de manejar errores de manera más clara y controlada. Con las promesas, puedes especificar código que se ejecutará en caso de éxito o fracaso de la operación asíncrona, lo que es mucho más fácil de mantener y debuguear que los callbacks anidados.
En resumen, las promesas se utilizan para manejar código asíncrono y ofrecen una forma más clara y controlada de manejar resultados y errores en este tipo de código.
*/
function generarSaludo() {

    var saludar = new Promise((resolve, reject) => {

        setTimeout(() => {
            let saludo = "Hola muy buenas a todos chavales!!!";
            // saludo = false

            if (saludo) {
                resolve(saludo);
            } else {
                reject('No hay saludo disponible');
            }
        }, 2000);

    });

    return saludar;
}

// Buscar ".then" en otros proyectos
generarSaludo()
    .then(resultado => {
        alert(resultado);
    })
    .catch(err => {
        alert(err);
    });

console.log("Se ejecuta antes de la promesa, ya que esta espera 2 segundos");
