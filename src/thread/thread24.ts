/* 
	Используйте orElse, чтобы попробовать альтернативный парсер если первый failed.
*/

import { err, ok, type Result } from "neverthrow"
import { parseNumber } from "./fornever"

// Альтернативный парсер
const alternativeParser = (input: string): Result<number, string> => {
	return input === "zero" ? ok(0) : err("Not zero")
}


export const tryParseNumber = (input: string): Result<number, string> => {
  // если parseNumber упал - пробуем alternativeParser через orElse
  return parseNumber(input).orElse(() => alternativeParser(input))
}


