/* 	
	Реализовать конструктор класса Student, который принимает имя, возраст и группу.
*/

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export class Student {
	person: Person;
	group: string;
	constructor(name: string, age: number, group: string) {
		// создаём вложенный объект Person и сохраняем группу
		this.person = new Person(name, age);
		this.group = group;
	}
}
