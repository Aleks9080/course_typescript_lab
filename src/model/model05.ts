/* 
	Добавьте свойство discountPercentage в класс DiscountedProduct, реализуйте контруктор этого класса.
*/

export class Product {
  price: number;
  
  constructor(price: number) {
    this.price = price;
  }
}


export class DiscountedProduct extends Product {
  discountPercentage: number;

  constructor(price: number, discountPercentage: number) {
    super(price);
    this.discountPercentage = discountPercentage;
  }
}
