/* 
	Реализовать функцию all, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция all должна вернуть true, если все элементы массива вернули true в callback. Нельзя использовать метод массивов every.
*/

export function all(arr, callback) {
  // Возвращаем false, если хотя бы для одного элемента callback вернет false
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}

