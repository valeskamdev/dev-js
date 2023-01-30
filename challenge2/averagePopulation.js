// A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o
// salário e número de filhos. A prefeitura deseja saber:
// - média do salário da população;
// - média do número de filhos;
// - maior salário;
// - O final da leitura de dados se dará com a entrada de um salário negativo.

const people = [
  { salary: 3635, children: 3 },
  { salary: 1243, children: 2 },
  { salary: 2260, children: 7 },
  { salary: 5900, children: 1 },
  { salary: -2790, children: 5 },
];

const averagePopulation = () => {
  let totalSalary = 0;
  let totalChildren = 0;
  let higherSalary = 0;

  for (let person of people) {
    if (person.salary < 0) {
      totalChildren += person.children;
      break;
    }
    totalSalary += person.salary;
    totalChildren += person.children;
  }
  const averageSalary = totalSalary / people.length;
  const averageChildren = totalChildren / people.length;

  for (let i = 0; i < people.length; i++) {
    if (people[i].salary > higherSalary) {
      higherSalary = people[i].salary;
    }
  }
  console.log(`Average salary of the population is ${averageSalary.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}`);
  console.log(`Average children of the population is ${Math.round(averageChildren)}`);
  console.log(`The highest salary of the population is ${higherSalary.toLocaleString("pt-br",{ style: "currency", currency: "BRL" })}`);
};

averagePopulation();