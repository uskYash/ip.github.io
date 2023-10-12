class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    alert (`This is object of person class named ${this.name} and is ${this.age} years old.`);
  }

  displayDetails = () => {
    const outputElement = document.getElementById("output-container");
    alert(`${this.introduce()}`);
  };
}

// Define the Student class by inheriting from Person
class Student extends Person {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }

  // Override
  introduce() {
    alert(`Hey there , I'm ${this.name}, age ${this.age} a student with roll number ${this.rollNo}.`);
  }
}

createObject = () => {
  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;
  let rollno = document.getElementById("rollno").value;
  let outputElement;


  if (name == "") {
    outputElement.innerHTML = alert(`Please enter Name`);
    return;
  }

  if (age == 0) {
    outputElement.innerHTML = alert(`Please enter age`);
    return;
  }

  if (age > 0 && age < 30 && rollno == 0) {
    outputElement.innerHTML = alert(`Please enter Roll no`);
    return;
  }

  if (age > 0 && age < 30) {
    // Create a Student object
    try {
      const student1 = new Student(name, age, rollno);
      outputElement.innerHTML = alert(`${student1.introduce()}`);
    } catch (error) {
      outputElement.innerHTML = alert(`${error.message}`);
    }
  } else {
    // Create a person object
    try {
      const person1 = new Person(name, age);
    outputElement.innerHTML = alert(`${person1.introduce()}`);
    } catch (error) {
      outputElement.innerHTML = alert(`${error.message}`);
    }
  }
}