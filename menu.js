// Ejercicio 1: Sistema de Reservas de Hotel
let habitaciones = [0, 0, 0, 0, 0];

const mostrarEstado = () => {
  console.log("\n=== Estado de Habitaciones ===");
  for (let i = 0; i < habitaciones.length; i++) {
    console.log(`Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}`);
  }
  console.log("=============================\n");
};

const reservarHabitacion = (num) => {
  if (num < 1 || num > 5) {
    console.log("⚠️ Error: Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones[num - 1] === 1) {
    console.log("⚠️ Error: La habitación ya está ocupada.");
  } else {
    habitaciones[num - 1] = 1;
    console.log(`✅ Habitación ${num} reservada con éxito.`);
  }
};

const liberarHabitacion = (num) => {
  if (num < 1 || num > 5) {
    console.log("⚠️ Error: Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones[num - 1] === 0) {
    console.log("⚠️ Error: La habitación ya está libre.");
  } else {
    habitaciones[num - 1] = 0;
    console.log(`✅ Habitación ${num} liberada con éxito.`);
  }
};

const sistemaReservas = () => {
  let opcion;
  do {
    console.log("\n--- Sistema de Reservas de Hotel ---");
    console.log("1. Ver estado de habitaciones");
    console.log("2. Reservar habitación");
    console.log("3. Liberar habitación");
    console.log("4. Regresar al menú principal");
    console.log("----------------------------------");

    opcion = prompt("Elige una opción:");

    if (opcion === "1") {
      mostrarEstado();
    } else if (opcion === "2") {
      let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
      reservarHabitacion(num);
    } else if (opcion === "3") {
      let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
      liberarHabitacion(num);
    } else if (opcion === "4") {
      console.log("Regresando al menú principal...");
    } else {
      console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "4");
};

// Ejercicio 2: Cajero Automático de Banco
let transacciones = [];

const consultarSaldo = () => {
  let saldo = transacciones.reduce((acc, trans) => acc + trans, 0);
  console.log(`\n💰 Saldo actual: $${saldo}`);
};

const depositar = (monto) => {
  if (monto > 0) {
    transacciones.push(monto);
    console.log(`✅ Depósito de $${monto} realizado con éxito.`);
  } else {
    console.log("⚠️ Error: El monto de depósito debe ser positivo.");
  }
};

const retirar = (monto) => {
  let saldo = transacciones.reduce((acc, trans) => acc + trans, 0);
  if (monto > saldo) {
    console.log("⚠️ Error: Saldo insuficiente.");
  } else if (monto > 500) {
    console.log("⚠️ Error: No se pueden retirar montos mayores a $500 en una sola transacción.");
  } else {
    transacciones.push(-monto);
    console.log(`✅ Retiro de $${monto} realizado con éxito.`);
  }
};

const cajeroAutomatico = () => {
  let opcion;
  do {
    console.log("\n--- Cajero Automático ---");
    console.log("1. Consultar saldo");
    console.log("2. Depositar");
    console.log("3. Retirar");
    console.log("4. Regresar al menú principal");
    console.log("-------------------------");

    opcion = prompt("Elige una opción:");

    if (opcion === "1") {
      consultarSaldo();
    } else if (opcion === "2") {
      let monto = parseInt(prompt("Ingresa el monto a depositar:"));
      depositar(monto);
    } else if (opcion === "3") {
      let monto = parseInt(prompt("Ingresa el monto a retirar:"));
      retirar(monto);
    } else if (opcion === "4") {
      console.log("Regresando al menú principal...");
    } else {
      console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "4");
};

// Ejercicio 3: Cola de Atención de Clientes en Supermercado
let colaClientes = [];
const maxCola = 7;

const agregarCliente = (nombre) => {
  if (colaClientes.length < maxCola) {
    colaClientes.push(nombre);
    console.log(`✅ ${nombre} se ha agregado a la cola.`);
  } else {
    console.log("⚠️ Error: La cola está llena. No se puede agregar más clientes.");
  }
};

const atenderCliente = () => {
  if (colaClientes.length > 0) {
    let cliente = colaClientes.shift();
    console.log(`✅ Atendiendo a ${cliente}.`);
  } else {
    console.log("⚠️ Error: No hay clientes en la cola.");
  }
};

const colaAtencionClientes = () => {
  let opcion;
  do {
    console.log("\n--- Cola de Atención de Clientes en Supermercado ---");
    console.log("1. Agregar cliente");
    console.log("2. Atender cliente");
    console.log("3. Ver cola");
    console.log("4. Regresar al menú principal");
    console.log("-----------------------------------------------");

    opcion = prompt("Elige una opción:");

    if (opcion === "1") {
      let nombre = prompt("Ingresa el nombre del cliente:");
      agregarCliente(nombre);
    } else if (opcion === "2") {
      atenderCliente();
    } else if (opcion === "3") {
      console.log("\nClientes en cola:");
      if (colaClientes.length === 0) {
        console.log("No hay clientes en la cola.");
      } else {
        colaClientes.forEach((cliente, index) => {
          console.log(`${index + 1}. ${cliente}`);
        });
      }
    } else if (opcion === "4") {
      console.log("Regresando al menú principal...");
    } else {
      console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "4");
};

// Ejercicio 4: Máquina Expendedora de Dulces y Gaseosas
let productos = ["Chicles", "Gaseosa", "Chocolate", "Caramelos", "Galletas"];
let cantidades = [5, 3, 2, 0, 6];

const mostrarInventario = () => {
  console.log("\n--- Inventario de la Máquina Expendedora ---");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto} - ${cantidades[index]} disponible(s)`);
  });
  console.log("--------------------------------------------\n");
};

const procesarPago = (monto) => {
  const precioProducto = 1;
  if (monto === precioProducto) {
    return true;
  } else {
    console.log("⚠️ Error: El pago no es correcto. Inserta una moneda de $1.");
    return false;
  }
};

const entregarProducto = (codigo) => {
  if (codigo < 1 || codigo > productos.length) {
    console.log("⚠️ Error: Código de producto inválido.");
    return false;
  }

  const indiceProducto = codigo - 1;

  if (cantidades[indiceProducto] > 0) {
    cantidades[indiceProducto]--;
    console.log(`✅ ¡Disfruta tu ${productos[indiceProducto]}!`);
    return true;
  } else {
    console.log(`⚠️ Error: ${productos[indiceProducto]} está agotado.`);
    sugerirProducto();
    return false;
  }
};

const sugerirProducto = () => {
  let sugerencia = "\nProductos disponibles:\n";
  let encontrado = false;
  for (let i = 0; i < productos.length; i++) {
    if (cantidades[i] > 0) {
      sugerencia += `${i + 1}. ${productos[i]} - ${cantidades[i]} disponible(s)\n`;
      encontrado = true;
    }
  }

  if (encontrado) {
    console.log(sugerencia);
  } else {
    console.log("⚠️ Todos los productos están agotados.");
  }
};

const maquinaExpendedora = () => {
  let opcion;
  do {
    console.log("\n--- Máquina Expendedora ---");
    console.log("1. Ver inventario");
    console.log("2. Comprar producto");
    console.log("3. Regresar al menú principal");
    console.log("--------------------------");

    opcion = prompt("Elige una opción:");

    if (opcion === "1") {
      mostrarInventario();
    } else if (opcion === "2") {
      let codigo = parseInt(prompt("Selecciona el código del producto (1-5):"));
      let pago = parseInt(prompt("Inserta una moneda de $1 para continuar."));
      if (procesarPago(pago)) {
        entregarProducto(codigo);
      }
    } else if (opcion === "3") {
      console.log("Regresando al menú principal...");
    } else {
      console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "3");
};

// Menú principal
const menuPrincipal = () => {
  let opcion;
  do {
    console.log("\n=========== Menú Principal ===========");
    console.log("1. Sistema de Reservas de Hotel");
    console.log("2. Cajero Automático de Banco");
    console.log("3. Cola de Atención de Clientes");
    console.log("4. Máquina Expendedora de Dulces y Gaseosas");
    console.log("5. Salir");
    console.log("=====================================");

    opcion = prompt("Elige una opción:");

    if (opcion === "1") {
      sistemaReservas();
    } else if (opcion === "2") {
      cajeroAutomatico();
    } else if (opcion === "3") {
      colaAtencionClientes();
    } else if (opcion === "4") {
      maquinaExpendedora();
    } else if (opcion === "5") {
      console.log("\nGracias por usar el sistema. ¡Hasta pronto!");
    } else {
      console.log("⚠️ Opción inválida.");
    }
  } while (opcion !== "5");
};

// Iniciar el menú principal
menuPrincipal();