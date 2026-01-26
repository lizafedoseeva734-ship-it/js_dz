function truncate(str, maxLength) {
  // Базовые проверки
  if (typeof str !== 'string') return '';
  if (typeof maxLength !== 'number' || maxLength < 1) return str;

  // Если строка короче или равна максимальной длине
  if (str.length <= maxLength) return str;

  // Для очень коротких maxLength
  if (maxLength < 4) return str.substring(0, maxLength);

  // Основная логика - обрезаем и добавляем многоточие
  // Многоточие занимает 3 символа
  return str.substring(0, maxLength - 3) + '...';
}