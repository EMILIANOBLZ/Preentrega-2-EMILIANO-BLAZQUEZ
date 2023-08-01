const productos = [
    { nombre: "Mercedes", precio: 18500000, stock: 112},
    { nombre: "Fiat", precio: 500000, stock: 5 },
    { nombre: "Porsche", precio: 34500000, stock: 4 },
    { nombre: "Renault", precio: 11500000, stock: 8 },
    { nombre: "Bmw", precio: 23800000, stock: 12 },
];

// Funciones
function mostrarListaProductos() {
    alert("A continuación se procede a mostrar nuestra lista de productos");
    let todoslosProductos = productos.map(
        (producto) => `${producto.nombre} ${producto.precio}$`
    );
    alert(todoslosProductos.join("-"));
}

function obtenerProductoPorNombre(nombreProducto) {
    return productos.find(
        (producto) => producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
    );
}

function agregarProductoAlCarrito(producto, unidades) {
    if (producto.stock >= unidades) {
        carrito.push({ producto, unidades, precio: producto.precio });
        producto.stock -= unidades;
    } else {
        alert("No hay suficiente stock disponible para esa cantidad de unidades.");
    }
}

function liberarStock(producto, unidades) {
    producto.stock += unidades;
}

function realizarCompra() {
    do {
        let producto = prompt("Seleccione un producto para su carrito");
        if (producto === null) break;

        producto = obtenerProductoPorNombre(producto);
        if (producto) {
            let unidades = parseInt(prompt("Cuantas unidades desea adquirir?"));
            if (Number.isInteger(unidades) && unidades > 0) {
                agregarProductoAlCarrito(producto, unidades);
            } else {
                continue; // Si la cantidad no es válida, se vuelve al inicio del bucle sin mostrar ningún mensaje.
            }
        } else {
            alert("Producto no válido. Por favor, seleccione uno de los productos disponibles.");
        }
    } while (confirm("Quiere proseguir en su compra con algún otro producto?"));
}

// Inicio del programa
let carrito = [];
let seleccion = prompt("Hola bienvenido a Amg dynasty, ¿desea comprar algún producto? (si o no)").toLowerCase();

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor, seleccione 'si' o 'no'");
    seleccion = prompt("Hola bienvenido a Amg dynasty, ¿desea comprar algún producto? (si o no)").toLowerCase();
}

if (seleccion === "si") {
    mostrarListaProductos();
    realizarCompra();
    alert("Gracias por visitarnos, lo esperamos pronto.");
} else if (seleccion === "no") {
    alert("Gracias por visitarnos, lo esperamos pronto.");
}

const total = carrito.reduce((acc, item) => acc + item.precio * item.unidades, 0);
console.log(`El total de su compra es de: $${total}`);
