/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/

export function matrixMultiplication(A, B) {
  const m = A.length;
  const n = A[0].length;
  const p = B[0].length;

  const C = [];
  // Умножаем матрицы A и B
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < p; j++) {
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += A[i][k] * B[k][j];
      }
      row.push(sum);
    }
    C.push(row);
  }

  return C;
}
