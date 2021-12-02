
/*  Metodos para seleciconar elementos del DOM (Nodos del tipo1) */
/*document.getElementById()  //nodo del tipo elemento que coincida con el id indicado
document.getElementsByTagName() // coleccion de elementos HTML
document.getElementsByClassName() // coleccion de elementos HTML
document.querySelector() // primer elemento que cumpla la condicion 
document.querySelectorAll() // todos los elementos que cumplan la condicion */

var title = document.getElementById("title");
console.log(title);
console.log(title.firstChild);

var linklist = document.getElementsByTagName("a")
console.log(linklist);
console.log(linklist[0]);
console.log(linklist[0].firstChild);

var itemslist = document.getElementsByClassName("item")
console.log(itemslist);
console.log(itemslist[2]);
console.log(itemslist[2].firstElementChild);

var title=document.querySelector("#title");
console.log(title);
console.log(title.firstChild);

var navbar=document.querySelector("#navbar");
console.log(navbar);

var item=document.querySelector(".item");
console.log(item);

var listitem=document.querySelectorAll(".item");
console.log(listitem);

//tipo de datos Primitivos 
//Underfined

var nota;
typeof nota; 

//bolean 
var esAdulto=true;
typeof (esAdulto);

//number
var precio=100;
typeof (precio);

//string 
var estrofa="hola mundo"
+"hola mundo 2"
estrofa;



