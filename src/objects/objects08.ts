/* 
	Реализовать функцию sum<T extends Summable>(a: T[]): T, возвращающую сумму элементов в массиве. Допускается использовать приведение типа Summable к T
*/

export type Summable = {
	sum: (other: Summable) => Summable
}

export function sum<T extends Summable>(a: T[]): T {
  // последовательно складываем элементы через их метод sum, приводим обратно к T
  let result: Summable = a[0];
  for (let i = 1; i < a.length; i++) {
    result = result.sum(a[i]);
  }
  return result as T;
}
