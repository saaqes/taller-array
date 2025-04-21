// Arreglo para simular la cola de atención de clientes (capacidad de 7)
let cola = [];
const capacidadMaxima = 7;

// Función para agregar un cliente a la cola
const agregarCliente = (nombre) => {
  if (cola.length >= capacidadMaxima) {
    alert("La cola está llena. No se puede agregar más clientes.");
  } else {
    cola.push(nombre); // Añadir el cliente al final de la cola
    alert(`${nombre} ha sido agregado a la cola.`);
  }
};

// Función para atender al siguiente cliente (el primero en llegar)
const atenderCliente = () => {
  if (cola.length === 0) {
    alert("No hay clientes en la cola.");
  } else {
    let clienteAtendido = cola.shift(); // Eliminar al primer cliente de la cola
    alert(`Se ha atendido a: ${clienteAtendido}`);
  }
};

// Función para ver la cola actual
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

// Menú principal
while (true) {
  let opcion = prompt("Cola de Atención en Supermercado\n1. Ver cola\n2. Agregar cliente\n3. Atender cliente\n4. Salir\nElige una opción:");

  if (opcion === "1") {
    verCola(); // Ver los clientes en la cola
  } else if (opcion === "2") {
    let nombre = prompt("Ingresa el nombre del cliente:");
    agregarCliente(nombre); // Agregar un nuevo cliente a la cola
  } else if (opcion === "3") {
    atenderCliente(); // Atender al siguiente cliente
  } else if (opcion === "4") {
    alert("Saliendo...");
    break; // Salir del programa
  } else {
    alert("Opción inválida.");
  }
}