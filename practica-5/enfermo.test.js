const { calcularTotal } = require("./enfermo");

function assertEquals(actual, expected, message) {
    if (actual !== expected) {
        throw new Error(
            `${message} | esperado=${expected}, obtenido=${actual}`
        );
    }
}

function test(nombre, fn) {
    try {
        fn();
        console.log(` ${nombre}`);
    } catch (error) {
        console.error(` ${nombre}`);
        console.error(error.message);
    }
}

test("carrito vacío retorna 0", () => {
    assertEquals(
        calcularTotal([], "EFECTIVO", false, false),
        0,
        "Debe retornar cero"
    );
});

test("descuento por producto caro", () => {
    const resultado = calcularTotal(
        [{ precio: 2000, cantidad: 1, categoria: "otros" }],
        "TARJETA",
        false,
        false
    );

    assertEquals(resultado, 1825, "Debe aplicar descuento");
});

test("descuento VIP", () => {
    const resultado = calcularTotal(
        [{ precio: 100, cantidad: 1, categoria: "otros" }],
        "TARJETA",
        true,
        false
    );

    assertEquals(resultado, 120, "Debe aplicar VIP");
});