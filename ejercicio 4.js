// Arreglos para los productos y sus cantidades
let productos = ["Chicles", "Gaseosa", "Chocolate", "Caramelos", "Galletas"];
let cantidades = [5, 3, 2, 0, 6]; // El stock de cada producto (cantidad disponible)

// Función para mostrar el inventario de la máquina
const mostrarInventario = () => {
  let inventario = "Inventario disponible:\n";
  for (let i = 0; i < productos.length; i++) {
    inventario += `${i + 1}. ${productos[i]} - ${cantidades[i]} disponible(s)\n`;
  }
  alert(inventario);
};

// Función para procesar el pago
const procesarPago = (monto) => {
  const precioProducto = 1; // El precio de cada producto es 1 moneda
  if (monto === precioProducto) {
    return true;
  } else {
    alert("El pago no es correcto. Inserta una moneda de $1.");
    return false;
  }
};

// Función para entregar el producto
const entregarProducto = (codigo) => {
  if (codigo < 1 || codigo > productos.length) {
    alert("Código inválido. Elige un producto entre 1 y 5.");
    return false;
  }

  const indiceProducto = codigo - 1; // Ajuste al índice de los arreglos

  if (cantidades[indiceProducto] > 0) {
    cantidades[indiceProducto]--; // Reducir la cantidad del producto en el inventario
    alert(`¡Disfruta tu ${productos[indiceProducto]}!`);
    return true;
  } else {
    alert(`${productos[indiceProducto]} está agotado.`);
    sugerirProducto(); // Si el producto está agotado, sugiere otro
    return false;
  }
};

// Función para sugerir un producto disponible
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

// Función principal para interactuar con la máquina expendedora
const interactuarConMaquina = () => {
  while (true) {
    mostrarInventario(); // Mostrar el inventario
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
        // Si no se pudo entregar el producto (agotado), se sugiere otro
        continue;
      }
    }
  }
};

// Iniciar la máquina expendedora
interactuarConMaquina();