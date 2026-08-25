const DESCUENTO_PRODUCTO_CARO = 0.9;
const DESCUENTO_VIP = 0.95;
const DESCUENTO_ESPECIAL = 0.85;
const CARGO_TARJETA = 25;
const DESCUENTO_EFECTIVO = 10;
const LIMITE_PRODUCTO_CARO = 1000;

function calcularSubtotalProducto(producto) {
    const subtotal = producto.precio * producto.cantidad;

    if (producto.precio > LIMITE_PRODUCTO_CARO) {
        return subtotal * DESCUENTO_PRODUCTO_CARO;
    }

    return subtotal;
}

function aplicarMetodoPago(total, metodoPago) {
    if (metodoPago === "TARJETA") {
        return total + CARGO_TARJETA;
    }

    if (metodoPago === "EFECTIVO") {
        return total - DESCUENTO_EFECTIVO;
    }

    return total;
}

function calcularTotal(productos, metodoPago, esVip, descuentoEspecial) {

    if (!productos.length) {
        console.log("No hay productos");
        return 0;
    }

    let total = 0;

    for (let i = 0; i < productos.length; i++) {

        total += calcularSubtotalProducto(productos[i]);

        if (productos[i].categoria === "comida") {
            console.log("Comida procesada");
        }

        if (productos[i].categoria === "comida") {
            console.log("Comida procesada");
        }
    }

    if (esVip === true) {
        total = total * DESCUENTO_VIP;
    }

    if (descuentoEspecial === true) {
        total = total * DESCUENTO_ESPECIAL;
    }

    total = aplicarMetodoPago(total, metodoPago);

    console.log("Total:", total);

    return total;
}

module.exports = {
    calcularTotal,
    calcularSubtotalProducto,
    aplicarMetodoPago
};
