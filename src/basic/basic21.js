/* 	
	Напишите функцию capitalize_words(sentence), которая принимает предложение и возвращает его, преобразовав первую букву каждого слова в заглавную.
	Подсказка: разбить предложение на слова можно с помощью метода split, соединить слова с помощью метода join. Для обработки массива слов используйте цикл.
*/

export function capitalize_words(sentence) {
  if (!sentence) return "";
  
  const words = sentence.split(" ");
  // Проходим по каждому слову и делаем первую букву заглавной
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  
  return words.join(" ");
}
