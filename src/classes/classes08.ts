/*   
  Дан исходный класса Animal. Необходимо добавить статическое свойство animalCount, которое учитывает количество созданных животных, и статический метод getAnimalCount, возвращающий это значение.
*/

export class Animal {
  
  name: string;
  species: string;
  // статический счётчик количества созданных экземпляров
  static animalCount: number = 0;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
    // увеличиваем счётчик при каждом создании объекта
    Animal.animalCount++;
  }
  greet() {
    console.log(
      `Привет, меня зовут ${this.name}! Я представитель вида ${this.species}.`
    );
  }
  static getAnimalCount() {
    // возвращаем текущее значение статического счётчика
    return Animal.animalCount;
  }
}


