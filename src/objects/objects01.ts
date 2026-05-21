/* 	
	В объекте user создать метод copy, который будет возвращать копию объекта. При передачи аргументов метод должен возвращать копию объекта с новыми значениями свойств.
*/

export type User = {
  name: string;
  age: number;
  copy: (name?: string, age?: number) => User
};

export const user: User = {
  name: "John",
  age: 30,
  copy(name?: string, age?: number) {
    // возвращаем новый объект-копию, чтобы не мутировать оригинал
    // если аргументы переданы - используем их, иначе сохраняем текущие значения
    return {
      ...this,
      name: name !== undefined ? name : this.name,
      age: age !== undefined ? age : this.age,
    };
  },
};
