fetch("https://dolarapi.com/v1/dolares/blue")
  .then(response => response.json())
  .then(data => console.log(data));

let carrito = []

if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function buscarInfo(buscado, array) {
    let busqueda = array.filter(
        (producto) => producto.toLowerCase().includes(buscado.toLowerCase()) ||
            producto.titulo.toLowerCase().includes(buscado.toLowerCase())
    )

    if (busqueda.length == 0) {
        coincidencia.innerHTML = ""
        let nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML = `<p> 0 coincidencias</p>`
        coincidencia.appendChild(nuevoDiv)
        mostrarCatalogo(array)
    } else {
        coincidencia.innerHTML = ""
        mostrarCatalogo(busqueda)
    }
}

function MenoraMayor(array) {
    let menorMayor = [].concat(array)
    menorMayor.sort((a, b) => (a.precio - b.precio))
    mostrarCatalogo(menorMayor)
}

function MayoraMenor(array) {
    let mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => (b.precio - a.precio))
    mostrarCatalogo(mayorMenor)
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array)
    alfabeticamente.sort((a, b) => {
     
        return 0;
    })
    mostrarCatalogo(alfabeticamente)
}

let divProductos = document.getElementById("productos")
let btnGuardarLibro = document.getElementById("guardarProductoBtn")
let buscador = document.getElementById("buscador")
let btnVerCatalogo = document.getElementById("verCatalogo")
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")

function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const producto of array) {
        let itemnuevo = document.createElement("div")
        itemnuevo.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        itemnuevo.innerHTML = `<div id="${producto.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${producto.imagen}" alt="${producto.titulo} de ${producto.autor}">
        <div class="card-body">
            <h4 class="card-title">${producto.titulo}</h4>
            <p>Autor: ${producto.autor}</p>
            <p class="">Precio: ${producto.precio}</p>
        <button id="agregarBtn${producto.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        divProductos.appendChild(itemnuevo)
        let btnAgregar = document.getElementById(`agregarBtn${producto.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(producto)
        })
    }
}

function agregarAlCarrito(producto) {
    carrito.push(producto)
    localStorage.setItem("", JSON.stringify(carrito))
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
      <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
      <div class="card-body">
              <h4 class="card-title">${productoCarrito.titulo}</h4>
          
              <p class="card-text">$${productoCarrito.precio}</p> 
              <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
      </div>    
  </div>
`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            cardProducto.remove()
            carrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(carrito))


        })

    });

}

function cargarProducto(array) {
    let inputAutor = document.getElementById("autorInput")
    let inputTitulo = document.getElementById("tituloInput")
    let inputPrecio = document.getElementById("precioInput")

    let productoCreado = new producto(array.length + 1, inputAutor.value, inputTitulo.value, parseInt(inputPrecio.value), "productoNuevo.jpg")
    array.push(productoCreado)
    localStorage.setItem("estanteria", JSON.stringify(array))
    mostrarCatalogo(array)
    inputAutor.value = ""
    inputTitulo.value = ""
    inputPrecio.value = ""
}

btnGuardarProducto.addEventListener("click", () => {
    cargarProducto(estanteria)
})

buscador.addEventListener("input", () => {
    buscarInfo(buscador.value, estanteria)
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(carrito)
})

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        ordenarMayorMenor(estanteria)
    }

    else if (selectOrden.value == 2) {
        ordenarMenorMayor(estanteria)
    }

    else if (selectOrden.value == 3) {
        ordenarAlfabeticamente(estanteria)
    }
    else {
        mostrarCatalogo(estanteria)
    }
})

mostrarCatalogo(estanteria)