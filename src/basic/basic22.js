/* 
  Реализуйте функцию palindrome_check(word), которая проверяет, является ли слово палиндромом (читается одинаково слева направо и справа налево).
  Подсказка: используйте методы split и join для строк и метод reverse для массивов.
*/

export function palindrome_check(word) {
  // Переводим слово в нижний регистр для корректного сравнения
  const lowerWord = word.toLowerCase();
  // Разбиваем строку на массив символов, переворачиваем и собираем обратно
  return lowerWord === lowerWord.split('').reverse().join('');
}
