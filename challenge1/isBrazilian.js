// Faça um programa que verifica se uma pessoa é brasileira ou não. (DEVE SER UM OBJETO)

const person = {
    name: 'Gabriel',
    age: 19,
    sex: 'male',
    nationality: 'brazilian'
}

const result = `Gabriel is ${person.nationality === 'brazilian' ? 'Brazilian' : 'not Brazilian'}`
console.log(result);