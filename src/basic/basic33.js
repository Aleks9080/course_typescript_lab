/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/

export function zeroRowColumn(matrix, row, col) {
  const result = [];
  // Создаем новую матрицу, зануляя элементы на пересечении строки и столбца
  for (let i = 0; i < matrix.length; i++) {
    const newRow = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === row || j === col) {
        newRow.push(0);
      } else {
        newRow.push(matrix[i][j]);
      }
    }
    result.push(newRow);
  }
  return result;
}
