let string = prompt("Введите строку и мы ее перевернем:"); // объявляем строку и запрашиваем ввод строки
let reverseStringMethod; 
let reverseStringCycle = ""; 
 
// используя встроенные методы 
 
reverseStringMethod = string.split("").reverse().join(""); 
console.log(reverseStringMethod); 
 
// используя цикл 
 
for (let i = string.length - 1; i >= 0; i--) { 
  reverseStringCycle += string[i]; 
} 
console.log(reverseStringCycle); 
 
alert(reverseStringMethod);