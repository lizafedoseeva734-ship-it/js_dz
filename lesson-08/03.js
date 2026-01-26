function truncate(str, maxLength) {
  // Проверки
  if (typeof str !== 'string') return '';
  if (typeof maxLength !== 'number' || maxLength < 1) return str;

  // Если строка короткая — возвращаем как есть
  if (str.length <= maxLength) return str;

  // Обрезаем ровно до maxLength и добавляем многоточие
  return str.slice(0, maxLength) + '...';
}
