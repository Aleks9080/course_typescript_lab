/* 
	Метод save класса UserDatabase должен принимать более широкий тип параметров. Метод save должен сохранять данные любого типа и выводить в консоль сообщение "Saving any data".
*/


export class Database {
  save(data: object): void {
    console.log("Saving object");
  }
}

export class UserDatabase extends Database {
  // принимаем любой тип (any) - более широкий, чем object
  override save(data: any): void {
    console.log("Saving any data");
  }
}