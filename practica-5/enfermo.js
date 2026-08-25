function p(c, t, vip, e) {
    let r = 0;

    if (c.length === 0) {
        console.log("No hay productos");
        return 0;
    }

    for (let i = 0; i < c.length; i++) {

        if (c[i].precio > 1000) {
            r += c[i].precio * c[i].cantidad * 0.9;
        } else {
            r += c[i].precio * c[i].cantidad;
        }

        if (c[i].categoria === "comida") {
            console.log("Comida procesada");
        }

        if (c[i].categoria === "comida") {
            console.log("Comida procesada");
        }
    }

    if (vip === true) {
        r = r * 0.95;
    }

    if (e === true) {
        r = r * 0.85;
    }

    if (t === "TARJETA") {
        r = r + 25;
    }

    if (t === "EFECTIVO") {
        r = r - 10;
    }

    console.log("Total:", r);

    return r;
}

module.exports = { p };