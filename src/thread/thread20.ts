/* 
	Дан код, который преобразует строку в число. Доделайте функцию, чтобы она возвращала ошибку "Invalid number", если преобразование невозможно.
*/

import { Result, err, ok } from 'neverthrow'

export const parseNumber = (input: string): Result<number, string> => {
  const num = Number(input)
  if (Number.isNaN(num)) {
    return err("Invalid number")
  }
  return ok(num)
}
