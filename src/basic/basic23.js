/* 
	Напишите функцию strip_special_chars(text), которая удаляет из текста все специальные символы и оставляет только буквы и пробелы.
	Подсказка: для проверки символа можно использовать константу 
	const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
*/

export function strip_special_chars(text) {
  const allowed = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  let result = "";
  
  // Собираем строку только из разрешенных букв и пробелов
  for (let i = 0; i < text.length; i++) {
    if (allowed.includes(text[i])) {
      result += text[i];
    }
  }
  
  return result;
}
