/* 
	Допишите функцию асинхронного запроса, чтобы она обрабатывала ошибки и возвращала fallback-значение.
*/

export async function fetchWithFallback(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    return await response.text();
  } catch (error) {
    // при ошибке возвращаем fallback-строку с сообщением об ошибке
    return `Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
  }
}


