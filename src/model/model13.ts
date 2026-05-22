/* 
	Класс Penguin должен быть совместим с Bird по возвращаемому типу и выводить в консоль "Cannot fly".
*/

export class Bird {
  fly(): Bird {
    console.log("Flying");
    return this;
  }
}


export class Penguin extends Bird {
  // переопределяем fly: возвращаем Penguin и выводим сообщение
  override fly(): Penguin {
    console.log("Cannot fly");
    return this;
  }
}
