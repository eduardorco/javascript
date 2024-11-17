class Course {
  #price;
  get price() {
    return '$' + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw 'Invalid value!';
    }
    this.#price = value;
  }

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  coursePrice() {
    return this.length / this.#price;
  }

  courseSummary() {
    return `${this.title} is ${this.length} hours long and costs ${
      this.#price
    }`;
  }
}

const course1 = new Course('React - The Complete Guide', 27, 199.99);
const course2 = new Course('Vue - The Complete Guide', 50, 199.99);

console.log(course2.coursePrice());
console.log(course2.courseSummary());

class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheoreiticalCourse extends Course {
  publish() {
    console.log('Publishing...');
  }
}

const course3 = new PracticalCourse('React - The Complete Guide', 27, 199.99);
const course4 = new TheoreiticalCourse('Vue - The Complete Guide', 50, 199.99);

console.log(course4.courseSummary());
course4.publish();
