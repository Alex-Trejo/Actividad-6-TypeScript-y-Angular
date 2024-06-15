// //14564-DESARROLLO WEB AVANZADOActividad 6: TypeScript y Angular.
// //Grupo 3 ->Karla Ansatuña - Alex Trejo
// // Sección 1: Ejercicios TypeScript
// //
// // Interfaces:
// //Define una interfaz para un objeto que represente un usuario con propiedades como
// //id, name, email, y age.
// //Crea una función que acepte un objeto de tipo Usuario y retorne una cadena con la
// //información del usuario formateada.



// interface Usuario {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
// }


// function formatUser(user: Usuario): string {
//     return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
// }


// const usuarios: Usuario[] = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com",
//         age: 30
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "jane@example.com",
//         age: 25
//     },
//     {
//         id: 3,
//         name: "Michael Johnson",
//         email: "michael@example.com",
//         age: 35
//     }
// ];


// function formatUsers(users: Usuario[]): string {
//     return users.map(user => formatUser(user)).join('\n');
// }


// const usersInfo = formatUsers(usuarios);
// console.log(usersInfo);

