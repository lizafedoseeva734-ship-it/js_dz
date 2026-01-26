/*
* Напишите функцию truncate, которая принимает строку и максимальную длину.

* Если длина строки превышает указанное количество символов, функция должна обрезать строку до этой длины и добавлять в конец многоточие (...).
* В противном случае функция должна возвращать исходную строку.

* Пример работы функции:
* truncate("Вот, что мне действительно нравится в этом", 20) // Ожидаемый результат: "Вот, что мне действи..."
* truncate("Короткая строка", 20) // Ожидаемый результат: "Короткая строка"
*/

function truncate(str, maxLength, preserveWords = false) {
  // Базовые проверки
  if (typeof str !== 'string') return '';
  if (typeof maxLength !== 'number' || maxLength < 1) return str;

  // Если строка короче или равна максимальной длине
  if (str.length <= maxLength) {
    return str;
  }

  // Если максимальная длина меньше 4, просто обрезаем
  if (maxLength < 4) {
    return str.slice(0, maxLength);
  }

  // Если нужно сохранять целостность слов
  if (preserveWords) {
    // Обрезаем строку до maxLength - 3 символов
    const truncated = str.slice(0, maxLength - 3);
    // Находим последний пробел в обрезанной строке
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    // Если есть пробел и не в начале строки, обрезаем по последнему слову
    if (lastSpaceIndex > 0) {
      return truncated.slice(0, lastSpaceIndex) + '...';
    }
  }

  // Простое обрезание без сохранения слов
  return str.slice(0, maxLength - 3) + '...';
}