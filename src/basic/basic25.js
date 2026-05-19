/* 
	Реализуйте функцию removeFirstOccurrence(arr, value), которая удаляет первое вхождение указанного элемента из массива
*/

export function removeFirstOccurrence (arr, value) {
  const result = [];
  let removed = false;
  // Перебираем массив и добавляем все элементы в новый, пропуская первое вхождение
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value && !removed) {
      removed = true;
      continue;
    }
    result.push(arr[i]);
  }
  return result;
}
