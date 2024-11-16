const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userInputKeyName = 'level';

//* É possivel inserir string como Key
//! Objetos são JSON em js
//* Parametros que são numeros, vao ser organizados do menor ao maior
let person = {
  fisrtName: 'Max',
  age: 30,
  [userInputKeyName]: 10,
  hobbies: ['Gaming', 'Coding'],
  greet: () => {
    alert('Hi there!');
  },
  'tomar no cu': 'vai tu!',
  //! Must be positive number
  1.5: 'hello',
};

const keyName = 'tomar no cu';

console.log(person[keyName]);
console.log(person['tomar no cu']);
console.log(person[1.5]);

//! Pode add ou alterar propriedade na marra
person.isAdmin = true;
console.log(person.isAdmin);

//! Delete is setting it to undefined
delete person.hobbies;
console.log(person.hobbies);

console.log(person);

const person2 = Object.assign({}, person);
