
const productos= [
    {
      "id": 0,
      "titulo": "pen-drive 64gb",
      "precio": 5400,
      "imagen": "/img/productos/pendrives.jpg"
    },
    {
      "id": 1,
      "titulo": "Procesador",
      "precio": 179900,
      "imagen":"/img/productos/intel.jpg"
    },
    {
      "id": 2,
      "titulo": "Placa Madre",
      "precio": 73023,
      "imagen":"/img/productos/mother.jpg"
    },
    {
      "id": 3,
      "titulo": "Memoria Ram",
      "precio": 225003
    },
    {
      "id": 4,
      "titulo": "Placa de Video",
      "precio": 250000
    },
    {
      "id": 5,
      "titulo": "Gabinete",
      "precio": 45000
    }
  ]

  
const contenedorProductos = document.querySelector("#contenedor-productos");

function cargarProductos() {

    productos.forEach(producto =>{
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })
}

cargarProductos();