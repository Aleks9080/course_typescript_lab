/* 
	Реализовать класс Complex (комплексное число) по описанию типа ComplexType (включить конструктор и метод sum).
*/

type ComplexType = { 
	real: number; 
	imag: number;
	sum: (other: ComplexType) => ComplexType
};

export class Complex implements ComplexType {
  real: number;
  imag: number;

  constructor(real: number, imag: number) {
    this.real = real;
    this.imag = imag;
  }

  // возвращает новый комплекс с суммой соответствующих частей
  sum(other: ComplexType): ComplexType {
    return new Complex(this.real + other.real, this.imag + other.imag);
  }
}

