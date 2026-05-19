/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/

export function transposeMatrix(matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return [];
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  // Меняем строки и столбцы местами
  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }

  return result;
}
