let transacciones = [];
let saldo = 0;

const consultarSaldo = () => {
  alert(`Tu saldo actual es: $${saldo}`);
};

const registrarTransaccion = (monto) => {
  if (transacciones.length >= 5) {
    transacciones.shift(); 
  }
  transacciones.push(monto); 
};

const depositar = (monto) => {
  if (monto <= 0) {
    alert("El monto a depositar debe ser mayor a 0.");
  } else {
    saldo += monto;
    registrarTransaccion(monto);
    alert(`Has depositado $${monto}.`);
    consultarSaldo();
  }
};

const retirar = (monto) => {
  if (monto <= 0) {
    alert("El monto a retirar debe ser mayor a 0.");
  } else if (monto > saldo) {
    alert("No tienes suficiente saldo para realizar esta operación.");
  } else if (monto > 500) {
    alert("No puedes retirar más de $500 en una sola transacción.");
  } else {
    saldo -= monto;
    registrarTransaccion(-monto);
    alert(`Has retirado $${monto}.`);
    consultarSaldo();
  }
};

const mostrarTransacciones = () => {
  let transaccionesTexto = "Últimas 5 transacciones:\n";
  if (transacciones.length === 0) {
    transaccionesTexto += "No hay transacciones registradas.";
  } else {
    transacciones.forEach((transaccion, index) => {
      transaccionesTexto += `${index + 1}. $${transaccion}\n`;
    });
  }
  alert(transaccionesTexto);
};

while (true) {
  let opcion = prompt("Cajero Automático\n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Ver últimas transacciones\n5. Salir\nElige una opción:");
  
  if (opcion === "1") {
    consultarSaldo();
  } else if (opcion === "2") {
    let monto = parseFloat(prompt("Ingresa el monto a depositar:"));
    depositar(monto);
  } else if (opcion === "3") {
    let monto = parseFloat(prompt("Ingresa el monto a retirar:"));
    retirar(monto);
  } else if (opcion === "4") {
    mostrarTransacciones();
  } else if (opcion === "5") {
    alert("Saliendo...");
    break;
  } else {
    alert("Opción inválida.");
  }
}
