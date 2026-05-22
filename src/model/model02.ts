/* 
	Реализовать класс Car, наследник Vehicle, в котором реализовать метод move, который выводит в консоль сообщение "Car is moving".
*/

export class Vehicle {
  move(): void {
    console.log("Vehicle is moving");
  }
}

export class Car extends Vehicle {
  // переопределяет move, выводя "Car is moving"
  override move(): void {
    console.log("Car is moving");
  }
}
