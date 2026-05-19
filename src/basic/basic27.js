/* 
  Реализуйте функцию insertAtPosition(arr, pos, elem), которая вставляет новый элемент в указанную позицию массива с помощью методов slice и concat.
*/

export function insertAtPosition(arr, pos, elem) {
  // Вставляем элемент без изменения оригинального массива
  return arr.slice(0, pos).concat(elem, arr.slice(pos));
}
