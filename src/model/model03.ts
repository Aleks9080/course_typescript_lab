/* 
	Добавьте конструктор в класс Employee с дополнительным свойством position
*/


export class Person {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}


export class Employee extends Person {
  position: string;

  constructor(name: string, position: string) {
    super(name);
    this.position = position;
  }
}