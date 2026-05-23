/* 
	Доделайте функцию, которая использует andThen для последовательной обработки: парсит число, затем проверяет, что оно положительное. Если число не положительное, то возвращает ошибку "Number must be positive".
*/

import { Result, ok, err } from 'neverthrow'
import { parseNumber } from './thread20'

export const parsePositiveNumber = (input: string): Result<number, string> => {
  return parseNumber(input).andThen((num) => {
    if (num > 0) {
      return ok(num)
    } else {
      return err("Number must be positive")
    }
  })
}

