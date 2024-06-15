// //14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
// //Grupo 3 ->Karla Ansatuña - Alex Trejo
// // Sección 1: Ejercicios TypeScript
// //
// // Variables y Tipos:
// // Define variables de distintos tipos (string, number, boolean, array, tuple, enum) y

// // Realiza operaciones básicas con ellas
// console.log("______________________________________________________");
// console.log("Seccion 1: Variables y Tipos");
// console.log("_______________________________________________________");

// // String
// let direccion: string = "Jaime Roldos Aguilera";

// // -> Operacion basica con string concatenacion
// console.log("<-------------------STRING------------------------->");
// console.log("Tipo de dato: " + typeof(direccion));
// console.log("Variable llamada direccion->", direccion);
// console.log("<-Operacion basica con string concatenacion->");

// let direccion_completa: string = direccion + " " + "y" + " " + "Luis Plaza Dañin 2";
// console.log(direccion_completa);

// console.log("<------------------------------------------------------>");

// // Number
// console.log("<---------------------NUMBER--------------------------->");

// let numero_casa: number = 203;
// console.log("Tipo de dato: " + typeof(numero_casa));
// console.log("Variable llamada numero_casa->", numero_casa);

// // -> Operacion basica con number suma
// let nueva_numero_casa: number = numero_casa + 10;
// console.log("<-Operacion basica con number suma-> 203 + 10 =", nueva_numero_casa);

// console.log("<------------------------------------------------------>");

// // Boolean
// console.log("<----------------------BOOLEAN--------------------------->");

// let estado: boolean = true;

// console.log("Tipo de dato: " + typeof(estado));
// console.log("Variable llamada estado->", estado);

// // -> Operacion basica con boolean
// let nuevo_estado: boolean = !estado;
// console.log("Cambio de estado de true a  ->", nuevo_estado); // Output: false
// console.log("<------------------------------------------------------>");

// // Array
// console.log("<----------------------ARRAY--------------------------->");

// let personas: string[] = ["Juan", "Pedro", "Maria"];
// console.log("Tipo de dato: " + typeof(personas));
// console.log("Variable llamada personas->", personas);

// // -> Operacion basica con array
// console.log("<-Operacion basica con array->");
// console.log("Agregar nuevo elemento al array personas-> Carlos");
// let nueva_persona: string = "Carlos";
// personas.push(nueva_persona);
// console.log(personas);
// console.log("<------------------------------------------------------>");

// // Tuple
// console.log("<----------------------TUPLE--------------------------->");

// let persona: [string, number] = ["Juan", 25];

// console.log("Tipo de dato: " + typeof(persona));
// console.log("Variable llamada persona->", persona);

// // -> Operacion basica con tuple
// console.log("<-Operacion basica con tuple->");
// console.log("Agregar nuevo elemento al tuple persona-> 25");
// persona.push(25);

// console.log(persona);

// console.log("<------------------------------------------------------>");

// // Enum

// console.log("<----------------------ENUM--------------------------->");

// enum EstadoCivil {
//     Soltero,
//     Casado,
//     Divorciado,
//     Viudo
// }
// let estado_civil: EstadoCivil = EstadoCivil.Casado;


// console.log("Tipo de dato: " + typeof(EstadoCivil));    
// console.log("Variable llamada EstadoCivil->", EstadoCivil);

// // -> Operacion basica con enum
// console.log("<-Operacion basica con enum->");
// console.log("Estado Civil: ", EstadoCivil.Casado);

// if (estado_civil === EstadoCivil.Casado) {
//     console.log("La persona está casada.");  // Output: "La persona está casada."
// }

// console.log("<------------------------------------------------------>");

