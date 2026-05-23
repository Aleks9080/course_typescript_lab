/* 
	Дописать функцию fetchUserWithRetry, которая пытается получить пользователя 3 раза перед тем как сдаться.
*/

import { fetchUser, type User } from "./promises";

export async function fetchUserWithRetry(id: number, maxAttempts = 3): Promise<User> {
  let lastError: Error;

  // пробуем получить пользователя до maxAttempts раз
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fetchUser(id);
    } catch (error) {
      lastError = error as Error;
    }
  }

  // если все попытки провалились - выбрасываем ошибку
  throw lastError!;
}
