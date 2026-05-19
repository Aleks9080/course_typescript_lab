/* 
	Реализовать функцию find, которая принимает массив и функцию-callback. Функция-callback должна принмать элемент массива и возвращать true, если элемент должен быть включен в новый массив, и false в противном случае.
	Функция find должна вернуть первый элемент массива, для которого функция-callback возвращает true, и undefined в противном случае. Метод массивов find использовать нельзя.
*/

export function find(arr, callback) {
  // Возвращаем первый элемент, для которого callback вернет true
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
  return undefined;
}



