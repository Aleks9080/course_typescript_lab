/* 
	 Допишите функцию withRetry, которая пытается выполнить операцию несколько раз перед тем как сдаться.
*/

export async function withRetry<T>(
  operation: () => Promise<T>,
  maxAttempts: number = 3
): Promise<T> {
  let lastError: Error;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
    }
  }

  // если все попытки провалились — бросаем последнюю ошибку
  throw lastError!;
}
