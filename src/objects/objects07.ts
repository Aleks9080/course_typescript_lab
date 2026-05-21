/* 
	Реализовать функцию maxOf<T extends Comparable>(a: T[]): T, возвращающую максимальное значение в массиве.
*/

export type Comparable = {
	greaterThan: (other: Comparable) => boolean
}

export function maxOf<T extends Comparable>(a: T[]): T {
  // ищем максимум, сравнивая каждый элемент через greaterThan
  let max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (a[i].greaterThan(max)) {
      max = a[i];
    }
  }
  return max;
}