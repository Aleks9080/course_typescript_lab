/* 
	Напишите функцию swap_first_last(arr), меняющую местами первый и последний элемент массива. Функция не должна использовать функции высших порядков и оператор ..., также она не должна изменять исходный массив, можно использовать циклы while или for.
*/

export function swap_first_last(arr) {
  const result = [];
  
  // Копируем элементы в новый массив
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  
  // Меняем местами первый и последний элементы, если массив содержит более одного элемента
  if (result.length > 1) {
    const temp = result[0];
    result[0] = result[result.length - 1];
    result[result.length - 1] = temp;
  }
  
  return result;
}
