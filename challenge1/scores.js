// Faça um programa onde os jurados vão dar a explicação para cada nota dada.
// São permitidas notas de 0 a 10 (número aleatório).
// Cada nota deve conter uma mensagem diferente.

const score = Math.floor(Math.random() * 11);
let message;

switch (true) {
  case score >= 8:
    message = `You received grade ${score}. Outstanding performer with good technical skills and good communication.`;
    break;
  case score >= 5:
    message = `You received grade ${score}. Reasonable performance, with some technical skills hone.`;
    break;
  default:
    message = `You received grade ${score}. Performance below expectations, with need to improve technical skills.`;
    break;
}

console.log(message);