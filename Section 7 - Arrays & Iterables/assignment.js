const practice = [1, 2, 3, 4, 5, 6, 100];

const filterPractice = practice.filter((number) => number > 5);
const mappedNumbers = practice.map((number) => {
  return { num: number };
});
console.log(mappedNumbers);
const multiplicationReduce = practice.reduce(
  (prevValue, curValue) => prevValue * curValue,
  1
);
console.log(multiplicationReduce);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}
console.log(findMax(...practice));

function findMinMax(...nums) {
  let curMin = nums[0];
  let curMax = nums[0];

  for (const num of nums) {
    if (num < curMin) {
      curMin = num;
    }
    if (num > curMax) {
      curMax = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...practice);

console.log(min, max);
