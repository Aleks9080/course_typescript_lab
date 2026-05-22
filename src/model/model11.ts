/* 
	Реализуйте оба абстрактных метода в классе MemoryStorage
*/

abstract class DataStorage {
  abstract save(data: string): void;
  abstract load(): string;
}


export class MemoryStorage extends DataStorage {
  private data: string = "";

  save(data: string): void {
    // сохраняем переданные данные во внутреннее поле
    this.data = data;
  }

  load(): string {
    // возвращаем сохранённые данные
    return this.data;
  }
}
