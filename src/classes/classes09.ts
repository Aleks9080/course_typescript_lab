/* 	
	В классе Product нужно добавить статическое свойство discountRate, указывающее скидку на товары, и статический метод applyDiscount, применяющий скидку ко всей продукции.
*/

export class Product {
   
  name: string;
  price: number;
  // статическая ставка скидки, используемая методом applyDiscount
  static discountRate: number = 0;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  describe() {
    console.log(`Продукт: ${this.name}, цена: ${this.price}`);
  } 
  static applyDiscount(products: Product[]) {
    // применяем текущую скидку ко всем переданным товарам
    for (const product of products) {
      product.price *= (1 - Product.discountRate);
    }
  }
}
