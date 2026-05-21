/* 
	Напишите конструктор класса Person, который принимает три аргумента: имя, фамилию и возраст. Используйте модульность доступа (модификаторы доступа public, private) для соответствующих полей.
*/

export class Person {
    firstName: string;
    lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        // присваиваем переданные значения полям, age остаётся приватным
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
