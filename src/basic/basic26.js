/* 
  Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины на 1 больше второй части. Строки из одно символа не должны разбиваться.
*/

export function splitAndMergeStrings(strArr) {
  const result = [];

  // Проходим по каждой строке массива
  for (let i = 0; i < strArr.length; i++) {
    const str = strArr[i];
    if (str.length <= 1) {
      result.push(str);
    } else {
      // При нечетной длине первая часть должна быть на 1 символ больше второй
      const mid = Math.ceil(str.length / 2);
      result.push(str.slice(0, mid));
      result.push(str.slice(mid));
    }
  }

  return result;
}


