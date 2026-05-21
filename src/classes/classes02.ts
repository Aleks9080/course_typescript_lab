/* 	
	Создайте конструктор класса Product, который принимает название и цену товара. Цена должна быть неотрицательной. Если введена отрицательная цена, то установите 0.
*/

export class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    // если цена отрицательная — заменяем на 0, иначе сохраняем переданное значение
    this.name = name;
    this.price = price < 0 ? 0 : price;
  }
}
