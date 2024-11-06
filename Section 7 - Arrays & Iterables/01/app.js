//! Best form
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

const testResults = [1, 5.2, 13, -2, 10];
// const storedResults = testResults; //Salva o ponteiro em memoria, nao o array
//! Para copiar uma array, salvando os dados e nao o ponteiro
const storedResults = testResults.slice(0, 2);

testResults.push(5.91); //Adds the value to storedResults also!

console.log(testResults, storedResults);
