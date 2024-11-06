function sayHello(name) {
  console.log('Hi' + name);
}

sayHello();

//TODO make it arrow function
const hello = (name) => console.log('Hi' + name);

//TODO adjust it three time (2 arguments, no arguments, one returned value)
const hello2 = (nome, idade) =>
  console.log('Hi ' + nome + ` vimos que voce tem ${idade} anos`);

const hello3 = () => console.log('Fala meu amigo!');

const hello4 = (name) => 'Hi' + name;
console.log(hello4('Max'));

//TODO add a default argument
const hello5 = (nome = 'Eduardo') =>
  nome == 'Eduardo'
    ? console.log('Escolheu meu nome ne')
    : console.log('Olá ' + nome);

//TODO new function takes unlimited strings and execute if NO ARGUMENTS is an empty string
function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}
checkInput(() => {
  console.log('All not empty!');
});
