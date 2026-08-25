
const DESCUENTO_PRODUCTO_CARO = 0.9;
const DESCUENTO_VIP = 0.95;
const DESCUENTO_ESPECIAL = 0.85;
const CARGO_TARJETA = 25;
const DESCUENTO_EFECTIVO = 10;
const LIMITE_PRODUCTO_CARO = 1000;

function calcularTotal(productos, metodoPago, esVip, descuentoEspecial) {

    let total = 0;

    if (productos.length === 0) {
        console.log("No hay productos");
        return 0;
    }

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].precio > LIMITE_PRODUCTO_CARO) {
            total += productos[i].precio *
                productos[i].cantidad *
                DESCUENTO_PRODUCTO_CARO;
        } else {
            total += productos[i].precio * productos[i].cantidad;
        }

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

    if (metodoPago === "TARJETA") {
        total = total + CARGO_TARJETA;
    }

    if (metodoPago === "EFECTIVO") {
        total = total - DESCUENTO_EFECTIVO;
    }

    console.log("Total:", total);

    return total;
}

module.exports = { calcularTotal };
