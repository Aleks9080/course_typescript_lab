/* 
	Реализуйте функцию removeDuplicates(arr), которая удаляет повторяющиеся элементы из массива с помощью методов indexOf и push.
*/

export function removeDuplicates(arr) {
  const result = [];
  // Перебираем исходный массив и добавляем элементы в новый, если их там еще нет
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}
