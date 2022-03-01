let x = NaN; //вставляем значение

switch (typeof x) { //сравнение значения по типу 
  case 'number':
    console.log(x + ' - это число');
    break;
  case 'string':
    console.log(x + ' - это строка');
    break;
  case 'boolean':
    console.log(x + ' - это логический тип');
    break;
  default:
    console.log('Тип ' + x + ' не определен');
}