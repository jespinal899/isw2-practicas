

//cODIGO VIEJO



function calcularISV(precioBase) {
  if (typeof precioBase !== "number" || precioBase < 0) {
    console.log("El precio base debe ser un número positivo.");
  }


 //numero y string magicos smell 
  const isv = precioBase *0.15;
  const t = precioBase + isv;

  return { precioBase, isv, t };
}

// Uso:
const resultado = calcularISV(1000);
console.log(`ISV: ${resultado.isv} | Total: ${resultado.total}`);




















//CODIGO RESTAURADO



const ISV_RATE = 0.15;

function calcularISV(precioBase) {
  if (typeof precioBase !== "number" || precioBase < 0) {
    console.log("El precio base debe ser un número positivo.");
  }


  const isv = precioBase * ISV_RATE;
  const total = precioBase + isv;

  return { precioBase, isv, total };
}



// Uso:
const resultado = calcularISV(1000);
console.log(`ISV: ${resultado.isv} | Total: ${resultado.total}`);




