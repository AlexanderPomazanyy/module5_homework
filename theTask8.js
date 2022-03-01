//создание ассоциативного массива доменов 
let domains = new Map([ 
  ["Australia", ".au"], 
  ["Egypt", ".eg"], 
  ["Spain", ".es"], 
  ["Russia", ".ru"], 
  ["France", ".fr"] 
]); 
 
//получение ключей массива 
console.log("Ключи ассоциативного массива:") 
for (let key of domains.keys()){ 
  console.log(key); 
} 
 
//вывод в формте "Ключ — Х, значение — Y" 
for (let [key, value] of domains){ 
  console.log("Ключ - " + key + ", значение - " + value); 
}