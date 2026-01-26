function truncate(str, maxLength) {
  // Проверка входных параметров
  if (typeof str !== 'string') {
    return '';
  }

  if (typeof maxLength !== 'number' || maxLength < 1) {
    return str;
  }

  // Если строка уже достаточно короткая
  if (str.length <= maxLength) {
    return str;
  }

  // Если maxLength слишком мал для добавления многоточия
  if (maxLength <= 3) {
    // Обрезаем без многоточия
    return str.slice(0, maxLength);
  }

  // Вычисляем, сколько символов можно оставить до многоточия
  const charsToKeep = maxLength - 3;

  // Обрезаем строку до нужной длины и добавляем многоточие
  return str.slice(0, charsToKeep) + '...';
}