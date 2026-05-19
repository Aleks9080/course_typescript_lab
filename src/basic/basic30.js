/* 
	РРеализуйте функцию extractUniqueValues(arr1, arr2), которая берет уникальные элементы первого массива и помещает их в конец второго массива с помощью методов indexOf и push.
*/

export function extractUniqueValues(arr1, arr2) {
  const result = [];
  // Копируем элементы второго массива
  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }
  
  // Добавляем элементы из первого массива, если их еще нет во втором массиве
  for (let i = 0; i < arr1.length; i++) {
    if (result.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  
  return result;
}

