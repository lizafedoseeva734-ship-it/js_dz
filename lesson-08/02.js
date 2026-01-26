/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */


function isOnlyDigits(str) {

  const trimmed = str.trim();


  if (trimmed === '') {
    return false;
  }

  for (let i = 0; i < trimmed.length; i++) {
    const char = trimmed[i];

    if (char < '0' || char > '9') {
      return false;
    }
  }

  return true;
}

console.log(isNumeric("123")) // Ожидаемый результат: true
console.log(isNumeric("12.3")) // Ожидаемый результат: true
console.log(isNumeric("123abc")) // Ожидаемый результат: false
console.log(isNumeric("abc")) // Ожидаемый результат: false
console.log(isNumeric(" ")) // Ожидаемый результат: false
