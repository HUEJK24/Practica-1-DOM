//PARTE 1
//a)Uso del método getElementById y de la propiedad innerHTML.
document.getElementById("demo").innerHTML = "¡Hola!";

//b)Encuentra el elemento con id=”intro”.
const elemento = document.getElementById("intro");
console.log(elemento);


//c)Cambia el elemento de una etiqueta <p>.
document.getElementById("p1").innerHTML = "¡Nuevo texto!"

//d)Cambia el contenido de un elemento <h1>.
//Nota: Al intentar  agregar el código que proporciono la maestra, daba erro.
document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("titulo");
    elemento.innerHTML = "Nuevo Encabezado";
});


//PARTE 2
//a)En este ejemplo encuentra todos los elementos <p>de uno de tus proyectos .html
const elementosP = document.getElementsByTagName("p");
console.log(elementosP);

//b)Encuentra el elemento con id=”main” y luego encuentra todos los elementos <p>dentro del main.
const x = document.getElementById("main");
console.log(x);
const y = x.getElementsByTagName("p");
console.log(y);


//PARTE 3
//a)Si desea encontrar todos los elementos con el mismo nombre de clase, use getElementsByClassName().
const z = document.getElementsByClassName("intro")
console.log(z);

//PARTE 4
//a)Devuelve una lista de todos los elementos <p> con class =”intro”.
const v = document.querySelectorAll("p.intro");
console.log(v);

//b)Encuentra los elementos <li>hijos de <ul>, para ello debes crear una lista desordenada con al menos 5 elementos dentro de la lista.
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);

//c)Encontrar en la consola e imprimir el elemento <h1>.
const h1Element = document.querySelector("h1");
console.log(h1Element);

//d)Encontrar la clase listusando querySelector().
const list = document.querySelector(".list");
console.log(list);

//e)Imprimir  los  elementos <li>haciendo  uso  del  ciclo forEach()para  iterar  sobre  la  NodeList  e imprimir cada uno de los elementos.
const listaDeElementos = document.querySelectorAll("ul > li");
listaDeElementos.forEach((item) => {
    console.log(item);
});

//f)	Uso de la propiedad style para cambiar estilos en línea CSS.
const h1 = document.querySelector("h1");
h1.style.color = "blue";

//PARTE 5
//a)Encuentra el elemento de formulario con id=”frm1”,  en  la colección  de  formularios,  y  muestra todos los valores de los elementos.
const w = document.forms["frm1"];
let texto = "";
for (let i = 0; i < w.length; i++){
    texto += w.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = texto;
console.log(w);

//PARTE 6
//a)	Agregar elementos al árbol del DOM usando los métodos document.createElement(), appendChild() y haciendo uso de la propiedad textContent.
let lista = document.createElement("ul");
document.body.appendChild(list);

let element1 = document.createElement("li");
element1.textContent = "Flor";
lista.appendChild(element1);

let element2 = document.createElement("li");
element2.textContent = "Jaguar";
lista.appendChild(element2);


//PARTE 6 (me genero dudas)
//a)Agregar   elementos   al   árbol   del   DOM   usando losmétodosdocument.createElement(), appendChild()y haciendo uso de la propiedad textContent.
let datos = document.createElement("ul");
document.body.appendChild(daotos);
let element1 = document.createElement("li");
element1.textContent ="Flor";
datos.appendChild(element1);
let element2= document.createElement("li");
element2.textContent = "Jaguar";
datos.appendChild(element2);




//PARTE 7
//a)Crea un botón en el documento html, donde al hacer click aparezca un mensaje de alerta.
const button = document.getElementById("boton");
button.addEventListener("click", () => { 
    alert("Gracias por dar click");
});

//PARTE 8
//a)Si un campo de formulario (name) está vacío, se muestra una alerta con un mensaje y devuelve falso para evitar que se envíe y se redireccione a otra página.
function validarFormulario() {
    let x = document.forms["miFormulario"]["nombre"].value;
    if (x === "") {
        alert("Se debe completar el nombre");
        return false;
    }
}

//b)	Valida la entrada numérica que valide que la entrada sea numérica y que este en un rango entre 1 y 10. Para ello crea un input con id=”numero”, un botón de type=”button”y que  contenga  el atributo  onclick  donde  se  le  asigne el  valor  de  la  función. Crea también una etiqueta <p> con id = ”demo”.
function miFunction(){
    let x = document.getElementById("numero").value;
    let texto;
    if(isNaN(x) || x < 1 || x > 10){
        texto = "Entrada no válida";
    } else {
        texto = "Entrada correcta";
    }
    document.getElementById("resultado").innerHTML = texto;

}


// Asegurarse de que el DOM está completamente cargado antes de ejecutar el código
// PARTE 9 (me genero dudas)
    // a) Cambiar el valor de un atributo src de un elemento <img>.
    document.getElementById("imagen").src = "cat.jpg";
    console.log("Image src changed");


    // PARTE 10 (me genero dudas)
    // a) Agregar la hora actual a una etiqueta con id "tiempo".
    //var time = document.getElementById("time");
    //document.getElementById("tiempo").innerHTML = "Fecha: " +Date();
    document.getElementById("tiempo").innerHTML = "Fecha: " + Date();
    








