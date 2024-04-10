class Producto {
    constructor(id,nombre,precio) {
        this.id= id;
        this.nombre  = nombre;
        this.precio  = parseFloat(precio);
    }
    toJSON() {
            return { id: this.id, nombre: this.nombre, precio: this.precio };
         }
}
const listaProductos = [
    new Producto(0, "coca", 23),
    new Producto(1, "pepsi", 25),
    // Add more products as needed
];

// Store the array in localStorage
localStorage.setItem("listaProductos", JSON.stringify(listaProductos));

// Retrieve the array from localStorage
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));

console.log(almacenados);

//for (const objeto of almacenados)
  //  Producto.push(new Producto(objeto));
