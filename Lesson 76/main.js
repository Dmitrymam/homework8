//Разница между объявлениями переменных типа const и let
// Переменная типа let может объявляться без присваивания значения переменной, также значение может переопределяться в ходе внаписания кода
// Переменная типа const объявляется с присваниванием переменной. Иначе получим ошибку(потому что таким образом в переменную запишется значение типа undefined), а значение переменной переприсваивать невозможно.

const age = 27;
const name = "Dmitry"
const job ="ingener"
const dream = "frontend-developer"
const love = "gym"

console.log(age);
console.log(name);
console.log(job);
console.log(dream);
console.log(love);