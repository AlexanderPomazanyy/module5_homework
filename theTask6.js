let arr = [3, 4, 2, 3];	// объявляем массив
let result = true;	// объявление переменной, которая выводит результат

// цикл в цикле, для сравнения каждого символа друг с другом
for (let i = 0; i < arr.length; i++ ){
  for (let j = 0; j < arr.length; j++){
    if (arr[i] != arr[j]){
      result = false;	// если есть разные элементы, то в результат запишем false
    }
  }
}

// вывод в консоль
console.log(result);