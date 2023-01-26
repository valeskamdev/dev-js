// Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }
// Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo 
// a pessoa deve ser maior de idade e brasileira para ser aprovada.

const people = [
    { name: "Paulo", age: 25, sex: "M", profession: "Programmer", nationality: "Brazilian" },
    { name: "Emma", age: 17, sex: "F", profession: "Student", nationality: "Americano" },
    { name: "Millie", age: 23, sex: "F", profession: "Librarian", nationality: "Canadian" },
    { name: "Sara", age: 34, sex: "F", profession: "Teacher", nationality: "Brazilian" },
    { name: "Takeshi", age: 18, sex: "M", profession: "Student", nationality: "Japanese" }
];


for (properties in people) {
    if (people[properties].age >= 18 && people[properties].nationality === "Brazilian") {
        console.log(`Congratulations, ${people[properties].name}. You have passed the process!`);
    } else {
        console.log(`${people[properties].name}, you have failed the process.`);
    }
}