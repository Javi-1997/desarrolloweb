

const carrito = [{ id: 1,  producto: "computadora", precio: 125000 },
                  {  id: 2,  producto: "notebook", precio: 700000 },
                  {  id: 3,  producto: "Pendrive"  , precio: 5000},
                  {  id: 4,  producto: "monitor" , precio: 100000}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

for (const producto of carrito) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(carrito));
 

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
    carrito.push(new Producto(objeto));

for (const producto of carrito)
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
    
