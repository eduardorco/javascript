//! Best form to create an array
// const number = [1, 2, 3];
// console.log(number);

//* the new can be excluded
// const moreNumbers = new Array(5);
// console.log(moreNumbers);

//! Slower
// const yetMoreNombers = Array.of();
// console.log(yetMoreNombers);
// const listItems = document.querySelectorAll('li');
// console.log(listItems);

//TODO: Useful when converting arraylike objects into arrays
// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

//! Shift and unshift are slower than push and pop.
// const hobbies = ['Cooking', 'Sports'];
// hobbies.push('Reading'); //add last element
// hobbies.unshift('Gaming'); //add first element
// const poppedValue = hobbies.pop(); //drops last element
// hobbies.shift(); //remove first element
// console.log(hobbies);

// hobbies[1] = 'Coding'; // replace element at the index
// hobbies[5] = 'Testing'; // add empty spots until gets at the index
// console.log(hobbies);

//! Splice is only available at REAL arrays
// hobbies.splice(0, 0, 'Olha quem chegou!');
// console.log(hobbies);
//* the second argument, deletes the element in the index inputed
// const removedElements = hobbies.splice(0, 1);
// console.log(hobbies);
//* If none is inputed, it deletes all
// hobbies.splice(0);
// console.log(hobbies);

// const testResults = [1, 5.2, 13, -2, 13];
// const storedResults = testResults; //Salva o ponteiro em memoria, nao o array
//! Para copiar uma array, salvando os dados e nao o ponteiro
// const storedResults = testResults.slice(0, 2);

//! Em js, nao existe o argumento inplace.Tem que salvar na memoria
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91); //Adds the value to storedResults also!

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(13));
// console.log(testResults.lastIndexOf(13));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
//! Está criando um objeto novo, vai dar errado!
// console.log(personData.indexOf({ name: 'Manuel' })); // = -1

//! Mesma coisa que utilizar apply de python
//* Está iterando a função na lista fazendo filtro
// const manuel = personData.find((person, index, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

//*
// prices.forEach((price, index, precos) => {
//   const priceObj = { ìndex: index, taxAdjustedPrices: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

//* map tem que retornar algo para cada elemento da array
const taxAdjustedPrices = prices.map((price, index, precos) => {
  const priceObj = { ìndex: index, taxAdjustedPrices: price * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

// providedInput = [1, 2, 3];

// function transformToObjects(numberArray) {
//   return numberArray.map((number) => {
//     return { val: number };
//   });
// }

// console.log(transformToObjects(providedInput));

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices, sortedPrices.reverse());

//! Literalmente filtrar a tabela
//* Funcao anonima, com 1 argumento e retorna algo!
const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

//? prevValue é = ao segundo argumento do reduce (0)
//? curValue é o preço dentro de price (iterado)
//! Passa a função em cascata na lista
const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

const data = 'newyork;10.99;2990';

const transformedData = data.split(';');
console.log(transformedData);

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNamedFragments = [...nameFragments];
nameFragments.push('Bob');
console.log(copiedNamedFragments, nameFragments);

//!Nao pode inserir uma array direto, tem que ser uma tupla
console.log(Math.min(...prices));

const persons = [
  { name: 'Max', age: 30 },
  { name: 'Manuel', age: 32 },
];

//! para retornar um objeto e em uma função, precisa passar o () para
//! apontar que o {} nao é da funcao e sim do objeto
const copiedPersons = persons.map((person) => ({
  name: person.name,
  age: person.age,
}));

const nameData = ['Max', 'Dude', 'Mr', 30];

//! Split array into variables
//* Utilizar rest operators da o restante da lista em uma nova lista
const [firstName, lastName, ...otheInformation] = nameData;
console.log(firstName, lastName, otheInformation);
