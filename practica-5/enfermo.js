function calcularTotal(productos, metodoPago, esVip, descuentoEspecial) {

    let total = 0;

    if (productos.length === 0) {

        console.log("No hay productos");

        return 0;

    }

    for (let i = 0; i < productos.length; i++) {

        if (productos[i].precio > 1000) {

            total += productos[i].precio * productos[i].cantidad * 0.9;

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

        total = total * 0.95;

    }

    if (descuentoEspecial === true) {

        total = total * 0.85;

    }

    if (metodoPago === "TARJETA") {

        total = total + 25;

    }

    if (metodoPago === "EFECTIVO") {

        total = total - 10;

    }

    console.log("Total:", total);

    return total;

}

module.exports = { calcularTotal };