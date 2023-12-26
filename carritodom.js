
    "carrito"; [
     {
       "id": 0,
       "nombre": "pen-drive 64gb",
       "precio": 5400,
       "imagen": "imagen.jpg"
     },
     {
       "id": 1,
       "nombre": "Procesador",
       "precio": 179900
     },
     {
       "id": 2,
       "nombre": "Placa Madre",
       "precio": 73023
     },
     {
       "id": 3,
       "nombre": "Memoria Ram",
       "precio": 225003
     },
     {
       "id": 4,
       "nombre": "Placa de Video",
       "precio": 250000
     },
     {
       "id": 5,
       "nombre": "Gabinete",
       "precio": 45000
     }
   ]

   

fetch('carrito')
  .then(response => response.json())
  .then(data => {

    localStorage.setItem('productos', JSON.stringify(productos))});

localStorage.setItem('esValido', true);
localStorage.setItem('unNumero', 1);
localStorage.setItem('hola', 'a');

let hola = localStorage.getItem("hola");
let mensaje = localStorage.getItem('bienvenida');
const productoss = JSON.parse(localStorage.getItem('productos')); 
let numero = parseInt(localStorage.getItem('unNumero')); 

console.log(productoss); 
console.log(bandera); 
console.log(numero);   
sessionStorage.setItem('seleccionados', JSON.stringify(carrito)),
sessionStorage.setItem('esValido', JSON.stringify(false)),
sessionStorage.setItem('email', 'info@email.com');


let lista = JSON.parse(sessionStorage.getItem('seleccionados'));
let banderaa = JSON.parse(sessionStorage.getItem('esValido'));
let email = sessionStorage.getItem('email');

console.log(typeof lista);   
console.log(typeof banderaa); 
console.log(typeof email);   

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}
 

 localStorage.setItem('bienvenida', '¡Hola Coder!');
localStorage.setItem('esValido', true);
 
localStorage.removeItem('bienvenida');
localStorage.clear()

const producto = { id: 2, producto: "Arroz" };
const enJSON    = JSON.stringify(producto1);

console.log(enJSON); 
console.log(typeof producto1);
console.log(typeof enJSON);    

localStorage.setItem("pepe", enJSON); 

const enJSON1    = '{"id":2,"producto":"computadora"}';
const producto1 = JSON.parse(enJSON);

console.log(typeof enJSON);     
console.log(typeof producto1);  
console.log(producto1.producto); 

const producto2 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto2.id);  // 2    */ 

const productos = [{ id: 1,  producto: "computadora", precio: 125000 },
                  {  id: 2,  producto: "notebook", precio: 700000 },
                  {  id: 3,  producto: "Pendrive"  , precio: 5000},
                  {  id: 4,  producto: "monitor" , precio: 100000}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));
 

class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos1 = [];

for (const objeto of almacenados)
    productos.push(new Producto(objeto));

for (const producto of productos)
    producto.sumaIva();
 
let usuario;
let usuarioEnLS = localStorage.getItem("usuario");

if (usuarioEnLS) 
    { usuario = JSON.parse(usuarioEnLS);
    } else 
    {
        usuario = prompt("Ingrese su nombre de usuario");
        localStorage.setItem("usuario", JSON.stringify(usuario));
    }
    
