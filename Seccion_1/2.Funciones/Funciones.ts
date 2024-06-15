// //14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
// //Grupo 3 ->Karla Ansatuña - Alex Trejo
// // Sección 1: Ejercicios TypeScript
// //
// // Funciones:
// //Crea funciones con tipos de retorno explícitos y parámetros tipados.
// //Implementa una función genérica que pueda aceptar y retornar diferentes tipos de datos.



// // Tipos y funciones complejas para un hotel

// type Habitacion = {
//     numero: number;
//     tipo: string;
//     disponible: boolean;
//     precio: number;
// };

// type Reserva = {
//     habitacion: Habitacion;
//     nombreHuesped: string;
//     dias: number;
// };

// function reservarHabitacion(habitaciones: Habitacion[], nombreHuesped: string, dias: number, tipoHabitacion: string): Reserva | null {
//     const habitacionDisponible = habitaciones.find(h => h.tipo === tipoHabitacion && h.disponible);

//     if (habitacionDisponible) {
//         habitacionDisponible.disponible = false;
//         return {
//             habitacion: habitacionDisponible,
//             nombreHuesped: nombreHuesped,
//             dias: dias
//         };
//     }

//     return null;
// }

// function calcularCostoTotal(reserva: Reserva): number {
//     return reserva.habitacion.precio * reserva.dias;
// }

// function cancelarReserva(reserva: Reserva, habitaciones: Habitacion[]): void {
//     const habitacionReservada = habitaciones.find(h => h.numero === reserva.habitacion.numero);
    
//     if (habitacionReservada) {
//         habitacionReservada.disponible = true;
//     }
// }

// let habitaciones: Habitacion[] = [
//     { numero: 101, tipo: "simple", disponible: true, precio: 50 },
//     { numero: 102, tipo: "doble", disponible: true, precio: 80 },
//     { numero: 103, tipo: "suite", disponible: false, precio: 120 },
//     { numero: 104, tipo: "suite", disponible: true, precio: 550 }
// ];

// const reserva = reservarHabitacion(habitaciones, "Juan Perez", 3, "doble");
// console.log(reserva); // Output: { habitacion: { numero: 102, tipo: 'doble', disponible: false, precio: 80 }, nombreHuesped: 'Juan Perez', dias: 3 }

// if (reserva) {
//     const costoTotal = calcularCostoTotal(reserva);
//     console.log(`Costo total de la estancia: ${costoTotal}`); // Output: Costo total de la estancia: 240

//     cancelarReserva(reserva, habitaciones);
//     console.log(habitaciones); // Output: la habitación 102 vuelve a estar disponible
// }

// // Función genérica
// function actualizarInformacion<T extends Habitacion, K extends keyof T>(habitacion: T, campo: K, valor: T[K]): T {
//     habitacion[campo] = valor;
//     return habitacion;
// }

// let habitacionActualizar = { numero: 104, tipo: "simple", disponible: true, precio: 60 };
// actualizarInformacion(habitacionActualizar, "precio", 70);
// console.log(habitacionActualizar); // Output: { numero: 104, tipo: 'simple', disponible: true, precio: 70 }
