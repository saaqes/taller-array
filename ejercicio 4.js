let productos = ["Chicles", "Gaseosa", "Chocolate", "Caramelos", "Galletas"];
let cantidades = [5, 3, 2, 0, 6]; 

const mostrarInventario = () => {
  let inventario = "Inventario disponible:\n";
  for (let i = 0; i < productos.length; i++) {
    inventario += `${i + 1}. ${productos[i]} - ${cantidades[i]} disponible(s)\n`;
  }
  alert(inventario);
};

const procesarPago = (monto) => {
  const precioProducto = 1; 
  if (monto === precioProducto) {
    return true;
  } else {
    alert("El pago no es correcto. Inserta una moneda de $1.");
    return false;
  }
};

const entregarProducto = (codigo) => {
  if (codigo < 1 || codigo > productos.length) {
    alert("Código inválido. Elige un producto entre 1 y 5.");
    return false;
  }

  const indiceProducto = codigo - 1;

  if (cantidades[indiceProducto] > 0) {
    cantidades[indiceProducto]--; 
    alert(`¡Disfruta tu ${productos[indiceProducto]}!`);
    return true;
  } else {
    alert(`${productos[indiceProducto]} está agotado.`);
    sugerirProducto(); 
    return false;
  }
};

const sugerirProducto = () => {
  let sugerencia = "Productos disponibles:\n";
  let encontrado = false;
  for (let i = 0; i < productos.length; i++) {
    if (cantidades[i] > 0) {
      sugerencia += `${i + 1}. ${productos[i]} - ${cantidades[i]} disponible(s)\n`;
      encontrado = true;
    }
  }

  if (encontrado) {
    alert(sugerencia);
  } else {
    alert("Lo siento, todos los productos están agotados.");
  }
};

const interactuarConMaquina = () => {
  while (true) {
    mostrarInventario(); 
    let codigoProducto = parseInt(prompt("Selecciona el producto (1-5) o ingresa 0 para salir:"));
    
    if (codigoProducto === 0) {
      alert("Gracias por usar la máquina expendedora. ¡Hasta pronto!");
      break;
    }

    if (codigoProducto < 1 || codigoProducto > productos.length) {
      alert("Código inválido. Por favor, elige un número entre 1 y 5.");
      continue;
    }

    let pago = parseInt(prompt("Inserta una moneda de $1 para continuar."));

    if (procesarPago(pago)) {
      if (!entregarProducto(codigoProducto)) {
        continue;
      }
    }
  }
};

interactuarConMaquina();
