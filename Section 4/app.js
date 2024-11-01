// VAR x LET

// VAR extrapola as funções, causando confusão no script. Por isso hoje em dia se usa let, que respeita seu local

// let name = 'MAX';
// Se eu redeclarar a variavel "name" fora da função, da erro

// function greet() {
//     let age = 30;
// Se eu redeclarar a variavel "name" dentro da função, ela modará apenas aqui
// let name = "George";
// console.log(name, age);
// }

// Se eu tentar chamar age fora da função, vai dar merda
// console.log(name,age)
// console.log(name)
// greet();

// Ao criar variaveis dentro de {} (Menos em casos de objeto) com LET ou CONST, elas só serão validas dentro daquele bloco

function getName() {
  return prompt('Your name: ', '');
}

function greet() {
  const UserName = getName();
  console.log('Hello ' + UserName);
}

greet();
