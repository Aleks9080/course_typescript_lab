/* 
	Напишите функцию second_largest(arr), находящую второе максимальное значение в массиве. Если такого элемента нет - вернуть null. Функцию сортировки использовать нельзя, можно использовать циклы while или for.
*/

export function second_largest(arr) {
  if (arr.length < 2) return null;

  let max = -Infinity;
  let secondMax = -Infinity;

  // Ищем наибольший и второй по величине элементы
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  // Если второго по величине нет (все элементы равны), возвращаем null
  return secondMax === -Infinity ? null : secondMax;
}

