let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'g']	// объявляем массив из цифр и символов

// объявление счетчиков четных, нечетных, нулей и символов
let arrEven = 0
let arrOdd = 0
let arrNull = 0
let arrNaN = 0

// цикл по массиву
for(let i = 0; i < arr.length; i++){
  if (isNaN(arr[i])){
    arrNaN++	// если в массиве символ, счетчик +1
  } else if(arr[i] === 0){
    arrNull++	// если в массиве ноль, счетчик +1
  } else if ((arr[i] % 2) === 0){
    arrEven++	// если в массиве четное, счетчик +1
  } else if((arr[i] % 2) !== 0){
    arrOdd++	// если в массиве нечетное, счетчик +1
  }
}

// вывод в консоль
console.log(arr)
console.log("Четные: " + arrEven)
console.log("Нечетные: " + arrOdd)
console.log("Нули: " + arrNull)
console.log("Не цифры: " + arrNaN)