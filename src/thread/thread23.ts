/* 
	Используйте mapErr, чтобы преобразовать ошибку из строки в более описательный объект. При этом установите код ошибки в 400, а сообщение в `Parse error: ${error}`
*/

import type { Result } from "neverthrow";
import { parseNumber } from "./fornever";

interface AppError {
	message: string;
	code: number;
}

export const parseNumberWithDetailedError = (input: string): Result<number, AppError> => {
  return parseNumber(input).mapErr((error) => ({
    message: `Parse error: ${error}`,
    code: 400,
  }))
}
