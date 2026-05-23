/* 
	Используйте ResultAsync для асинхронной операции и преобразуйте Promise mockFetch в Promise<Result<number, string>>. В случае ошибки нужно вернуть сообщение "Fetch failed: _код_ошибки_".
*/

import { ResultAsync } from 'neverthrow'

export const fetchNumberFromAPI = (url: string): ResultAsync<number, string> => {
  // оборачиваем mockFetch в ResultAsync, преобразуя ошибку в нужный формат
  return ResultAsync.fromPromise(
    mockFetch(url),
    (error) => `Fetch failed: ${error}`
  )
}

// Mock API функция
const mockFetch = (url: string): Promise<number> => {
  return url === "success" ? Promise.resolve(42) : Promise.reject("API error")
}
