/* 
	Используйте Result.combine, чтобы обработать массив результатов и вернуть ошибку первой неудачи или массив успешных значений.
*/

import { Result } from 'neverthrow'
import { parseNumber } from './fornever'

export const processNumbers = (inputs: string[]): Result<number[], string> => {
  const results = inputs.map(parseNumber)
  // используем Result.combine, чтобы собрать все результаты в один
  return Result.combine(results)
}
