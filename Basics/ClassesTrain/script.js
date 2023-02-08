function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function () {
	console.log(`Cześć mam na imię ${this.name}`);
};

Person.prototype.sayAge = function () {
	console.log(`Mam ${this.age}`);
};

const person1 = new Person('Konrad', 22);
const person2 = new Person('Ania', 34);

console.log(person1);

class Person2 {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayName() {
		console.log(`Cześć mam na imię ${this.name}`);
	}

	sayAge() {
		console.log(`Mam ${this.age} lat`);
	}
}

const person3 = new Person2('Lisa', 25)
const person4 = new Person2('Mark', 54)

console.log(person3);
person3.sayAge()