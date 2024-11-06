//! querySelector custa memoria demais!
//TODO Utilizar metodos como:
//* children
//* childNodes
//* firstElementChild
//* parentNode
//* parentElement
//* previousElementSibling
//* nextElementSibling

const h1 = document.getElementById('main-title');

h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';

const body = document.body;

const listItemElements = document.getElementsByTagName('li');

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

const ul = li.parentElement;

console.log(ul.previousElementSibling);

console.log(ul.nextElementSibling);

const section = document.querySelector('section');
const button = document.querySelector('button');

section.style.backgroundColor = 'black';

section.className = 'red-bg';

button.addEventListener('click', () => {
  //   if (section.className === 'red-bg visible') {
  //     section.className = 'red-bg invisible';
  //   } else {
  //     section.className = 'red-bg visible';
  //   }
  //   section.classList.toggle('visible');
  section.classList.toggle('invisible');
});

//? ADD Elements via HTML in Code
//! Deleta todo o documento selecionado
// section.innerHTML = '<h2> A new Title! </h2>';

//! É possivel mas nao é funcional, gasta performance
// ul.innerHTML = ul.innerHTML + '<li> Item 4</li>';

const div = document.querySelector('div');
// div.innerHTML = div.innerHTML + '<p> Something went wrong!</p>';
div.insertAdjacentHTML('beforeend', '<p>VTF</p>');
const list = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.textContent = 'Item 4';
newLi.style.backgroundColor = 'red';

list.appendChild(newLi);
list.prepend(newLi);
list.append('Some text');

//! Melhor jeito de remover um DOM é indo até o seu parente
list.parentElement.removeChild(list);
//* Ou utilizar .remove() que nao funfa em IE
//* Recomendado
list.remove();

//! Insertion & Roval Methods
//TODO: Esses metodos são antigos e funcionam em tudo
//* appendChild()
//* insertAdjacentElement()
//* replaceChild()
//* removeChild()
//TODO: Os daqui são novos e recomendados (-Safari,-IE):
//* append()
//* prepend()
//* before()
//* after()
//* replaceWith()
//* remove()
