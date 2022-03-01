let rand = Math.random(); // генерируем рандомное число
let arr = ["один", 'two', 3, true, null, rand];	/ объявляем массив

// вывод в консоль
console.log("Количество элементов в массиве: " + arr.length + "\nА вот и они:"); 
 
// цикл вывода в консоль каждого элемента
for(let i = 0; i < arr.length; i++) { 
  console.log(arr[i]); 
}