// //14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
// //Grupo 3 ->Karla Ansatuña - Alex Trejo
// // Sección 1: Ejercicios TypeScript
// //
// // Clases:
// //● Define una clase Persona con propiedades privadas y métodos públicos.
// //Extiende la clase Persona para crear una clase Empleado con propiedades
// //adicionales y métodos.



// // Definición de la clase Persona
// // Definición de la clase Persona
// class Persona {
//     private nombre: string;
//     private edad: number;

//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }

//     getNombre(): string {
//         return this.nombre;
//     }

//     setNombre(nombre: string): void {
//         this.nombre = nombre;
//     }

    
//     getEdad(): number {
//         return this.edad;
//     }

//     setEdad(edad: number): void {
//         this.edad = edad;
//     }





//     saludar(): string {
//         return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
//     }

// }

// // Definición de la clase Empleado que extiende Persona
// class Empleado extends Persona {
//     private salario: number;

//     constructor(nombre: string, edad: number, salario: number) {
//         super(nombre, edad);
//         this.salario = salario;
//     }

//     // Método público para obtener el salario
//     getSalario(): number {
//         return this.salario;
//     }

//     // Método público para trabajar
//     trabajar(): string {
//         return `${this.getNombre()} está trabajando.`;
//     }
// }

// // Ejemplo de uso
// const personaJuan = new Persona("Juan", 30);
// console.log(personaJuan.saludar()); 

// const empleadoPedro = new Empleado("Pedro", 35, 2000);
// console.log(empleadoPedro.saludar()); 
// console.log(empleadoPedro.trabajar()); 