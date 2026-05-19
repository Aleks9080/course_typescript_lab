/* 
	Реализовать функцию some, которая принимает массив и функцию-callback. Callback принимает один элемент массива и возвращает true или false. Функция some должна вернуть true, если хотя бы один элемент массива вернул true в callback. Нельзя использовать метод массивов some.
*/

export function some(arr, callback) {
  // Возвращаем true, если хотя бы для одного элемента callback вернет true
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}



