// //  null, undefined, boolean, number, string, symbol, object
// console.log(typeof 0);
// console.log(typeof null);
// console.log(typeof function () {});
// console.log(typeof NaN);
// console.log(typeof (undefined * 1));

// const fnA = arr => arr.reduce((item, value) => item + value);

// console.log(fnA([1, 34, 54]));

// const fnB = (arr, num) => {
//   let a = 0;
//   return arr.reduce((value, element, index) => {
//     if (index < num) {
//       value += element;
//       a++;
//     }
//     return value;
//   });
// };
// console.log(fnB([1, 2, 2, 3, 4, 5, 6], 5));

// const dfg = fnB;
// const ar = [3, 4, 2, 6, 1, 5, 2, 1, 3, 1];
// const n = 6;
// console.log(dfg(ar, n), dfg.a);

// //  Input: [1,2,3,4,5], output= [2,3,4,5]
// // * Input: [5,3,2,1,4], output = [5,3,2,4]
// // * Input: [2,2,1,2,1], output = [2,2,2,1]

// // function removeSmallest(numbers) {
// //   const arr = [...numbers];
// //   arr.splice(numbers.indexOf(Math.min(...numbers)), 1);
// //   return arr;
// // }
// const removeSmallest = numbers =>
//   numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
// console.log(removeSmallest(ar));
// console.log(ar);
// console.log();
// console.log();
// console.log();
// console.log();

// // console.log([...Array(7)].map((__ , i) => i + 1));   Нижнее подчёркивание, это способ пропустить обязательное значение метода map ? Или просто такая "оригинальная" переменная?  В принципе вместо него можно поставить любое имя переменной, правда в редакторе они становятся тусклыми, а __ нет

// const data = JSON.parse('Well, this is awkward');
// localStorage.setItem('json', data);

function createPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const a = Math.random() < 0.5;

      if (a) {
        resolve('gooood');
      } else {
        reject('bad');
      }
    }, 2000);
  });
}

// promise
//   .then(v => {
//     console.log('good', v);
//   })
//   .catch(err => console.log('error', err));

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    createPromise()
      .then(v => {
        console.log('good');
      })
      .catch(err => console.log('error'));
  }, 500);
}
// try {
//   const data = JSON.parse('Well, this is awkward');
//   console.log(data);
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parse error in try...catch');
function fetchCountries(name) {
  const countries = fetch(`https://restcountries.com/v2/name/${name}`);
  console.log(countries);
}

console.log(fetchCountries('ukr').then());
