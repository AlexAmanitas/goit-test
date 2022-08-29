//  null, undefined, boolean, number, string, symbol, object
console.log(typeof 0);
console.log(typeof null);
console.log(typeof function () {});
console.log(typeof NaN);
console.log(typeof (undefined * 1));

const fnA = arr => arr.reduce((item, value) => item + value);

console.log(fnA([1, 34, 54]));

const fnB = (arr, num) => {
  let a = 0;
  return arr.reduce((value, element, index) => {
    if (index < num) {
      value += element;
      a++;
    }
    return value;
  });
};
console.log(fnB([1, 2, 2, 3, 4, 5, 6], 5));

const dfg = fnB;
const ar = [3, 4, 2, 6, 1, 5, 2, 1, 3, 1];
const n = 6;
console.log(dfg(ar, n), dfg.a);

//  Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//   const arr = [...numbers];
//   arr.splice(numbers.indexOf(Math.min(...numbers)), 1);
//   return arr;
// }
const removeSmallest = numbers =>
  numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
console.log(removeSmallest(ar));
console.log(ar);
console.log();
console.log();
console.log();
console.log();

// console.log([...Array(7)].map((__ , i) => i + 1));   Нижнее подчёркивание, это способ пропустить обязательное значение метода map ? Или просто такая "оригинальная" переменная?  В принципе вместо него можно поставить любое имя переменной, правда в редакторе они становятся тусклыми, а __ нет
