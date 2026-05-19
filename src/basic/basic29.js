/* 
	Реализуйте функцию rotateArrayLeft(arr), которая сдвигает элементы массива влево на одну позицию с помощью методов shift и push. Предусмотрти случай, когда массив пустой.
*/

export function rotateArrayLeft(arr) {
  // Если массив пустой или содержит 1 элемент, сдвиг не требуется
  if (arr.length <= 1) {
    return arr;
  }
  // Удаляем первый элемент и добавляем его в конец
  const first = arr.shift();
  arr.push(first);
  return arr;
}
