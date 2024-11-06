const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// if (randomNumber >= 0.7) {
//   alert('Rodando a roleta');
// } else {
//   alert('Ganhando!');
// }

// let arrayTest = [5, 10, 23, 67, 233];

// for (const array of arrayTest.reverse()) {
//   console.log(array);
// }

// for (let i = 0; i < arrayTest.length; i++) {
//   console.log(arrayTest[i]);
// }

const randomNumber2 = Math.random();

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert('Ne que foi mano?');
}
console.log(randomNumber, randomNumber2);
