//14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
//Grupo 3 ->Karla Ansatuña - Alex Trejo
// Sección 1: Ejercicios TypeScript
//
// Variables y Tipos:
// Define variables de distintos tipos (string, number, boolean, array, tuple, enum) y

// Realiza operaciones básicas con ellas
console.log("\x1b[36m%s\x1b[0m", "______________________________________________________");
console.log("\x1b[36m%s\x1b[0m", "Seccion 1: Variables y Tipos");
console.log("\x1b[36m%s\x1b[0m", "_______________________________________________________");



// String
let direccion: string = "Jaime Roldos Aguilera";

// -> Operacion basica con string concatenacion
console.log("<-------------------STRING------------------------->");
console.log("Tipo de dato: " + typeof(direccion));
console.log("Variable llamada direccion->", direccion);
console.log("<-Operacion basica con string concatenacion->");

let direccion_completa: string = direccion + " " + "y" + " " + "Luis Plaza Dañin 2";
console.log(direccion_completa);

console.log("<------------------------------------------------------>");

// Number
console.log("<---------------------NUMBER--------------------------->");

let numero_casa: number = 203;
console.log("Tipo de dato: " + typeof(numero_casa));
console.log("Variable llamada numero_casa->", numero_casa);

// -> Operacion basica con number suma
let nueva_numero_casa: number = numero_casa + 10;
console.log("<-Operacion basica con number suma-> 203 + 10 =", nueva_numero_casa);

console.log("<------------------------------------------------------>");

// Boolean
console.log("<----------------------BOOLEAN--------------------------->");

let estado: boolean = true;

console.log("Tipo de dato: " + typeof(estado));
console.log("Variable llamada estado->", estado);

// -> Operacion basica con boolean
let nuevo_estado: boolean = !estado;
console.log("Cambio de estado de true a  ->", nuevo_estado); // Output: false
console.log("<------------------------------------------------------>");

// Array
console.log("<----------------------ARRAY--------------------------->");

let personas: string[] = ["Juan", "Pedro", "Maria"];
console.log("Tipo de dato: " + typeof(personas));
console.log("Variable llamada personas->", personas);

// -> Operacion basica con array
console.log("<-Operacion basica con array->");
console.log("Agregar nuevo elemento al array personas-> Carlos");
let nueva_persona: string = "Carlos";
personas.push(nueva_persona);
console.log(personas);
console.log("<------------------------------------------------------>");

// Tuple
console.log("<----------------------TUPLE--------------------------->");

let persona: [string, number] = ["Juan", 25];

console.log("Tipo de dato: " + typeof(persona));
console.log("Variable llamada persona->", persona);

// -> Operacion basica con tuple
console.log("<-Operacion basica con tuple->");
console.log("Agregar nuevo elemento al tuple persona-> 25");
persona.push(25);

console.log(persona);

console.log("<------------------------------------------------------>");

// Enum

console.log("<----------------------ENUM--------------------------->");

enum EstadoCivil {
    Soltero,
    Casado,
    Divorciado,
    Viudo
}
let estado_civil: EstadoCivil = EstadoCivil.Casado;


console.log("Tipo de dato: " + typeof(EstadoCivil));    
console.log("Variable llamada EstadoCivil->", EstadoCivil);

// -> Operacion basica con enum
console.log("<-Operacion basica con enum->");
console.log("Estado Civil: ", EstadoCivil.Casado);

if (estado_civil === EstadoCivil.Casado) {
    console.log("La persona está casada.");  // Output: "La persona está casada."
}

console.log("\x1b[36m%s\x1b[0m", "<------------------------------------------------------>");




//14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
//Grupo 3 ->Karla Ansatuña - Alex Trejo
// Sección 1: Ejercicios TypeScript
//
// Funciones:
//Crea funciones con tipos de retorno explícitos y parámetros tipados.
//Implementa una función genérica que pueda aceptar y retornar diferentes tipos de datos.

console.log("\x1b[33m%s\x1b[0m", "______________________________________________________");
console.log("\x1b[33m%s\x1b[0m", "Seccion 1: Funciones");
console.log("\x1b[33m%s\x1b[0m", "_______________________________________________________");

// Tipos y funciones complejas para un hotel

type Habitacion = {
    numero: number;
    tipo: string;
    disponible: boolean;
    precio: number;
};

type Reserva = {
    habitacion: Habitacion;
    nombreHuesped: string;
    dias: number;
};

function reservarHabitacion(habitaciones: Habitacion[], nombreHuesped: string, dias: number, tipoHabitacion: string): Reserva | null {
    const habitacionDisponible = habitaciones.find(h => h.tipo === tipoHabitacion && h.disponible);

    if (habitacionDisponible) {
        habitacionDisponible.disponible = false;
        return {
            habitacion: habitacionDisponible,
            nombreHuesped: nombreHuesped,
            dias: dias
        };
    }

    return null;
}

function calcularCostoTotal(reserva: Reserva): number {
    return reserva.habitacion.precio * reserva.dias;
}

function cancelarReserva(reserva: Reserva, habitaciones: Habitacion[]): void {
    const habitacionReservada = habitaciones.find(h => h.numero === reserva.habitacion.numero);
    
    if (habitacionReservada) {
        habitacionReservada.disponible = true;
    }
}

let habitaciones: Habitacion[] = [
    { numero: 101, tipo: "simple", disponible: true, precio: 50 },
    { numero: 102, tipo: "doble", disponible: true, precio: 80 },
    { numero: 103, tipo: "suite", disponible: false, precio: 120 },
    { numero: 104, tipo: "suite", disponible: true, precio: 550 }
];

const reserva = reservarHabitacion(habitaciones, "Juan Perez", 3, "doble");
console.log(reserva); // Output: { habitacion: { numero: 102, tipo: 'doble', disponible: false, precio: 80 }, nombreHuesped: 'Juan Perez', dias: 3 }

if (reserva) {
    const costoTotal = calcularCostoTotal(reserva);
    console.log(`Costo total de la estancia: ${costoTotal}`); // Output: Costo total de la estancia: 240

    cancelarReserva(reserva, habitaciones);
    console.log(habitaciones); // Output: la habitación 102 vuelve a estar disponible
}

// Función genérica
function actualizarInformacion<T extends Habitacion, K extends keyof T>(habitacion: T, campo: K, valor: T[K]): T {
    habitacion[campo] = valor;
    return habitacion;
}

let habitacionActualizar = { numero: 104, tipo: "simple", disponible: true, precio: 60 };
actualizarInformacion(habitacionActualizar, "precio", 70);
console.log(habitacionActualizar); // Output: { numero: 104, tipo: 'simple', disponible: true, precio: 70 }

console.log("\x1b[33m%s\x1b[0m", "______________________________________________________");


//14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
//Grupo 3 ->Karla Ansatuña - Alex Trejo
// Sección 1: Ejercicios TypeScript
//
// Interfaces:
//Define una interfaz para un objeto que represente un usuario con propiedades como
//id, name, email, y age.
//Crea una función que acepte un objeto de tipo Usuario y retorne una cadena con la
//información del usuario formateada.

console.log("\x1b[35m%s\x1b[0m", "______________________________________________________");
console.log("\x1b[35m%s\x1b[0m", "Seccion 1: Interfaces");
console.log("\x1b[35m%s\x1b[0m", "_______________________________________________________");


interface Usuario {
    id: number;
    name: string;
    email: string;
    age: number;
}


function formatUser(user: Usuario): string {
    return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
}


const usuarios: Usuario[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        age: 30
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        age: 25
    },
    {
        id: 3,
        name: "Michael Johnson",
        email: "michael@example.com",
        age: 35
    }
];


function formatUsers(users: Usuario[]): string {
    return users.map(user => formatUser(user)).join('\n');
}


const usersInfo = formatUsers(usuarios);
console.log(usersInfo);


//14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
//Grupo 3 ->Karla Ansatuña - Alex Trejo
// Sección 1: Ejercicios TypeScript
//
// Clases:
//● Define una clase Persona con propiedades privadas y métodos públicos.
//Extiende la clase Persona para crear una clase Empleado con propiedades
//adicionales y métodos.

console.log("\x1b[35m%s\x1b[0m", "______________________________________________________");


console.log("\x1b[32m%s\x1b[0m", "______________________________________________________");
console.log("\x1b[32m%s\x1b[0m", "Seccion 1: Clases");
console.log("\x1b[32m%s\x1b[0m", "_______________________________________________________");

// Definición de la clase Persona
// Definición de la clase Persona
class Persona {
    private nombre: string;
    private edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    
    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }





    saludar(): string {
        return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

}

// Definición de la clase Empleado que extiende Persona
class Empleado extends Persona {
    private salario: number;

    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad);
        this.salario = salario;
    }

    // Método público para obtener el salario
    getSalario(): number {
        return this.salario;
    }

    // Método público para trabajar
    trabajar(): string {
        return `${this.getNombre()} está trabajando.`;
    }
}

// Ejemplo de uso
const personaJuan = new Persona("Juan", 30);
console.log(personaJuan.saludar()); 

const empleadoPedro = new Empleado("Pedro", 35, 2000);
console.log(empleadoPedro.saludar()); 
console.log(empleadoPedro.trabajar()); 
console.log("\x1b[32m%s\x1b[0m", "_______________________________________________________");