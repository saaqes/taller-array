// Arreglo para las 5 habitaciones (0 = libre, 1 = ocupada)
let habitaciones = [0, 0, 0, 0, 0];

// Función para mostrar el estado de las habitaciones
const mostrarEstado = () => {
  let estado = "Estado de habitaciones:\n";
  for (let i = 0; i < habitaciones.length; i++) {
    estado += `Habitación ${i + 1}: ${habitaciones[i] === 0 ? "Libre" : "Ocupada"}\n`;
  }
  alert(estado);
};

// Función para contar cuántas habitaciones están libres
const contarHabitacionesLibres = () => {
  let libres = 0;
  for (let i = 0; i < habitaciones.length; i++) {
    if (habitaciones[i] === 0) {
      libres++;
    }
  }
  return libres;
};

// Función para reservar una habitación
const reservarHabitacion = (num) => {
  if (num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones[num - 1] === 1) {
    alert("Habitación ya ocupada.");
  } else {
    habitaciones[num - 1] = 1;
    alert(`Habitación ${num} reservada con éxito.`);
  }
  mostrarHabitacionesLibres();
};

// Función para liberar una habitación
const liberarHabitacion = (num) => {
  if (num < 1 || num > 5) {
    alert("Número de habitación inválido. Usa 1-5.");
  } else if (habitaciones[num - 1] === 0) {
    alert("Habitación ya está libre.");
  } else {
    habitaciones[num - 1] = 0;
    alert(`Habitación ${num} liberada con éxito.`);
  }
  mostrarHabitacionesLibres();
};

// Función para mostrar cuántas habitaciones están libres
const mostrarHabitacionesLibres = () => {
  let libres = contarHabitacionesLibres();
  alert(`Habitaciones libres: ${libres}`);
};

// Menú principal
while (true) {
  let opcion = prompt("1. Ver estado\n2. Reservar\n3. Liberar\n4. Salir\nElige una opción:");
  if (opcion === "1") {
    mostrarEstado();
  } else if (opcion === "2") {
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
    reservarHabitacion(num);
  } else if (opcion === "3") {
    let num = parseInt(prompt("Ingresa el número de habitación (1-5):"));
    liberarHabitacion(num);
  } else if (opcion === "4") {
    alert("Saliendo...");
    break;
  } else {
    alert("Opción inválida.");
  }
}