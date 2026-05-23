/* 
	Допишите функцию создания даты с валидацией неверного формата. При неверном формате должно генерироваться исключение с сообщением "Invalid date format".
*/

export function createValidDate(dateString: string): Date {
  const date = new Date(dateString);
  // если дата невалидна - выбрасываем исключение с нужным сообщением
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date format');
  }
  return date;
}
