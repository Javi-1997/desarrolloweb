let productos = [];

fetch("./javascript/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


 
 document.addEventListener("DOMContentLoaded", displayProducts);
  
  // Call the function to display the cart when the page loads
  document.addEventListener("DOMContentLoaded", displayCart);
  
const Producto = JSON.parse(localStorage.getItem("carrito"));
function displayCart() {
    // Retrieve cart items from localStorage
    
  
    // Get the container where you want to display the cart items
    const cartContainer = document.getElementById("cart-container");
  
    // Check if there are items in the cart
    if (Producto && Producto.length > 0) {
      // Loop through each item in the cart
      Producto.forEach(item => {
        // Create a new div for each item
        const divProductos = document.createElement("div");
  
        // Create elements for the product name and price
        const nombre = document.createElement("span");
        nombre.textContent = item.producto;
  
        const precio = document.createElement("span");
        precio.textContent = `$${item.precio.toFixed(2)}`;
  
        // Append product name and price to the div
        divProductos.appendChild(nombre);
        divProductos.appendChild(precio);
  
        // Append the div to the cart container
        cartContainer.appendChild(divProductos);
      });
    } else {
      // If the cart is empty, display a message
      const emptyCartMessage = document.createElement("p");
      emptyCartMessage.textContent = "Your cart is empty.";
      cartContainer.appendChild(emptyCartMessage);
    }
  }

  const almacenados = JSON.parse(localStorage.getItem("listaProductos"))/[];


  function displayProducts() {
  
  
    
    almacenados.forEach((producto) => {
      
      let productDiv = document.createElement("div");
         productDiv.className="divProductos";          
         productDiv.innerHTML =
         <><h2>${producto.nombre}</h2><p>${producto.precio}</p></>;

         divProductos.append(productDiv);
        })
       };
      // Create elements for the product name and price
     // const nombre = document.createElement("h3");
     // nombre.textContent = Producto.nombre;
  
 //     const precio = document.createElement("p");
   //   precio.textContent = `$${Producto.pr.toFixed(2)}`;
  
      // Append product name and price to the div
    //  productDiv.appendChild(nombre);
    //  productDiv.appendChild(precio);
  
      // Append the div to the products container
    //  productsContainer.appendChild(productDiv);
  //  });
 // }
  
  // Call the function to display the products when the page loads
  document.addEventListener("DOMContentLoaded", displayProducts);
  
  // Call the function to display the cart when the page loads
  document.addEventListener("DOMContentLoaded", displayCart);
  