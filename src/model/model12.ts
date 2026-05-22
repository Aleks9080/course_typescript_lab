/* 
	Добавьте в MathOperations статический метод square, который возвращает число в квадрате. Реализуйте абстрактный метод calculate в классе CircleArea, который возвращает площадь круга по формуле pi * r^2, используя статический метод square
*/

export abstract class MathOperations {
  static pi: number = 3.14159265359;

  // возвращает квадрат числа
  static square(n: number): number {
    return n * n;
  }

  abstract calculate(): number;

}


export class CircleArea extends MathOperations {
  radius: number;
  
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  // площадь круга
  calculate(): number {
    return MathOperations.pi * MathOperations.square(this.radius);
  }
}
