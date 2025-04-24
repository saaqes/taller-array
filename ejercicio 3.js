let cola = [];
const capacidadMaxima = 7;

const agregarCliente = (nombre) => {
  if (cola.length >= capacidadMaxima) {
    alert("La cola está llena. No se puede agregar más clientes.");
  } else {
    cola.push(nombre);
    alert(`${nombre} ha sido agregado a la cola.`);
  }
};

const atenderCliente = () => {
  if (cola.length === 0) {
    alert("No hay clientes en la cola.");
  } else {
    let clienteAtendido = cola.shift(); 
    alert(`Se ha atendido a: ${clienteAtendido}`);
  }
};

const verCola = () => {
  if (cola.length === 0) {
    alert("La cola está vacía.");
  } else {
    let colaTexto = "Clientes en la cola:\n";
    cola.forEach((cliente, index) => {
      colaTexto += `${index + 1}. ${cliente}\n`;
    });
    alert(colaTexto);
  }
};

while (true) {
  let opcion = prompt("Cola de Atención en Supermercado\n1. Ver cola\n2. Agregar cliente\n3. Atender cliente\n4. Salir\nElige una opción:");

  if (opcion === "1") {
    verCola(); 
  } else if (opcion === "2") {
    let nombre = prompt("Ingresa el nombre del cliente:");
    agregarCliente(nombre); 
  } else if (opcion === "3") {
    atenderCliente(); 
  } else if (opcion === "4") {
    alert("Saliendo...");
    break;
  } else {
    alert("Opción inválida.");
  }
}
