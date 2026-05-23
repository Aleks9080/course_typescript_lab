/* 
	Допишите функцию, которая выполняет массив функций и возвращает массив результатов, обрабатывая ошибки отдельных функций.
*/

export function executeFunctionsSafely(functions: (() => any)[]): { result?: any; error?: string }[] {
  const results: { result?: any; error?: string }[] = [];
  
  for (const fn of functions) {
    try {
      const value = fn();
      results.push({ result: value });
    } catch (error) {
      // при ошибке сохраняем только сообщение
      results.push({ error: error instanceof Error ? error.message : String(error) });
    }
  }
  
  return results;
}
