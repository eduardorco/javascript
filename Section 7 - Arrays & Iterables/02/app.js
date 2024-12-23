const ids = new Set([1, 2, 3]);
ids.add(2);

if (ids.has(1)) {
  ids.delete(1);
}

for (const entry of ids.entries()) {
  console.log(entry);
}

const person1 = { name: 'Max' };
const person2 = { name: 'fdp' };

const personData = new Map([[person1, [{ date: 'never', price: 10 }]]]);

personData.set(person2, [{ date: 'yesterday', price: 100 }]);

console.log(personData);

console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
