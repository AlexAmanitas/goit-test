// В этой Ката мы собираемся определить, может ли количество всех символов в строке быть равным, если мы удалим один символ из этой строки.
// Например:
// solve('abba') = false -- if we remove any character, the count of each character will not be equal.
// solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
// solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
// solve('wwwf') = true -- if we remove f, the remaining letters have same count.
// Больше примеров в тестовых примерах. Пустая строка не проверяется.

function solve(s) {
  console.log(s.split('').sort());
  let count = 1;
  const ar = s
    .split('')
    .sort()
    .reduce((acc, el, i, arr) => {
      if (el === arr[i + 1]) {
        count += 1;
      } else {
        acc.push(count);
        count = 1;
      }
      return acc;
    }, []);
  console.log(
    ar,

    Math.max(...ar) - 1
  );
  let b = true;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === 1) {
      ar.splice(i, 1);
    } else {
      ar.splice(i, 1, ar[i] - 1);
    }
    b = true;
    console.log(ar);
    for (let j = 0; j < ar.length - 1; j++) {
      if (ar[j] === 0) continue;
      let a = ar[j] === ar[j + 1];
      b = b && a;
    }
    if (b === true) return b;
    ar.splice(i, 1, ar[i] + 1);
  }
  return b;
}

////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\
// const solve = s => {
//   const same = a =>
//     /^(.)\1*$/.test(
//       [...new Set(a)].map(b => a.split``.filter(c => b == c).length).join``
//     );
//   for (let i = 0; i < s.length; i++) {
//     if (same(s.slice(0, i) + s.slice(i + 1))) return true;
//   }
//   return false;
// };

// function solve(s, i = 0) {
//   return i === s.length
//     ? false
//     : !((s.length - 1) % new Set(s.slice(0, i) + s.slice(i + 1)).size) ||
//         solve(s, i + 1);
// }

console.log(solve('aaabbbccc'));

///////////////////////////////////////////////////                       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. Люди могут «лайкать» сообщения в блогах, изображения или другие элементы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. Он должен возвращать отображаемый текст, как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.

function likes(names) {
  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

/////////////////////////////////////             5kyu             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Числа Фибоначчи — это числа в следующей целочисленной последовательности (Fn):
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
// такие как
// F(n) = F(n-1) + F(n-2), где F(0) = 0 и F(1) = 1.
// Имея число, скажем, prod (для произведения), мы ищем два числа Фибоначчи F(n) и F(n+1), проверяя
// F(n) * F(n+1) = произв.
// Ваша функция productFib принимает целое число (prod) и возвращает массив:
// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// в зависимости от языка, если F(n) * F(n+1) = prod.
// Если вы не найдете два последовательных подтверждения F (n) F(n) * F(n+1) = prod, вы вернетесь
// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) является наименьшим из таких, как F(n) * F(n+1) > prod.
// Некоторые примеры возврата:
// (зависит от языка)
// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----
// productFib(714) # should return {21, 34, 1},
// productFib(800) # should return {34, 55, 0},
// -----
// productFib(714) # should return {21, 34, true},
// productFib(800) # should return {34, 55, false},

// function productFib(prod) {
//   const fibAr = [0, 1];
//   for (let i = 2; i < 100; i++) fibAr.push(fibAr[i - 1] + fibAr[i - 2]);
//   console.log(fibAr);
//   for (let i = 0; i < 100; i++) {
//     if (prod <= fibAr[i] * fibAr[i + 1]) {
//       console.log(fibAr[i], Math.sqrt(prod) < fibAr[i]);
//       return fibAr[i] * fibAr[i + 1] === prod
//         ? [fibAr[i], fibAr[i + 1], true]
//         : [fibAr[i], fibAr[i + 1], false];
//     }
//     console.log(i);
//   }
// }

//////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\
function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}
console.log(productFib(4895));

////////////////////////////////////////////////////                     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// Напишите функцию, которая принимает строку из одного или нескольких слов и возвращает ту же строку, но с перевернутыми всеми словами из пяти или более букв (точно так же, как имя этого Ката). Передаваемые строки будут состоять только из букв и пробелов. Пробелы будут включены только в том случае, если присутствует более одного слова.
// Примеры:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  return string
    .split(' ')
    .map(word => {
      return word.length >= 5 ? word.split('').reverse().join('') : word;
    })
    .join(' ');
}
console.log(spinWords('This is another test'));

////////////////////////////////////////                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// В этой простой ката ваша задача — создать функцию, которая превращает строку в мексиканскую волну. Вам будет передана строка, и вы должны вернуть эту строку в виде массива, где заглавная буква означает стоящего человека.
// Правила
// 1. Строка ввода всегда будет строчной, но может быть и пустой.
//  2. Если символ в строке является пробелом, пропустите его, как если бы это было пустое место.
// Пример
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(str) {
  console.log(/\s/g.test(str));
  const arr = str.split('');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      continue;
    } else {
      res.push(`${str.slice(0, i)}${arr[i].toUpperCase()}${str.slice(i + 1)}`);
    }
  }
  return res;
}

//////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// var wave = w =>
//   [...w]
//     .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
//     .filter(a => a != w);

// function wave(str) {
//   let result = [];
//   str.split('').forEach((char, index) => {
//     if (/[a-z]/.test(char)) {
//       result.push(
//         str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
//       );
//     }
//   });
//   return result;
// }

console.log(wave(' gap '));

////////////////////////////////////////                           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим), содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел, либо полностью состоит из четных целых чисел, за исключением одного целого числа N. Напишите метод, который принимает массив в качестве аргумента и возвращает этот «выброс» N.
// Примеры
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  return integers.filter(el => el % 2 !== 0).length !== 1
    ? integers.filter(el => el % 2 === 0)[0]
    : integers.filter(el => el % 2 !== 0)[0];
}

console.log('find', findOutlier([0, 1, 2]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log('find', findOutlier([1, 2, 3]));

/////////////////////////////////////                          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Побочный продукт этого ката , здесь вам нужно будет найти эффективную стратегию для решения проблемы поиска единственного повторяющегося числа среди несортированного массива/списка чисел, начиная с 1 до n.
// Подсказки: можно найти решение за линейное время; использование наиболее интуитивно понятных для поиска дубликатов, которые могут выполняться за время O (n²), не сработает.

var findDup = function (arr) {
  return arr.filter((el, i, ar) => ar.indexOf(el) !== i)[0];
};

console.log(findDup([5, 4, 3, 2, 1, 1]));

////////////////////////////////////         5kyu         \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Джон является президентом Ассоциации умного кода. Приближается Рождество, он собирается устроить вечеринку для всех участников. Все члены пронумерованы от 1 до n (n — число Джона). Некоторые участники являются старыми друзьями Джона, но есть и новые друзья. Джон обнаружил, что все числа его старого друга и его собственные числа имеют по крайней мере один общий делитель (больше 1). Пожалуйста, подсчитайте, сколько новых друзей у Джона?
// Полная функция countNewFriends. Функция принимает аргумент n(целое положительное число, 0 < n < 30000). Возвращает общее число новых друзей Джона.
// Некоторые примеры
// countNewFriends(1) === 0
// countNewFriends(8) === 3  (3,5,7)
// countNewFriends(9) === 5  (2,4,5,7,8)
// countNewFriends(10) === 3 (3,7,9)
// countNewFriends(25608) === 7679
// countNewFriends(24027) === 16015
// Примечание:
// Вы можете предположить, что все входные данные действительны.
// Друг с номером 1 всегда является старым другом Джона или самим Джоном (когда n = 1).

function countNewFriends(n) {
  const arr = [];
  const res = [];
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) arr.push(i);
  }
  console.log(arr);
  for (let i = 2; i < n; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i % arr[j] === 0) res.push(i);
    }
  }

  console.log(res.filter((el, i, ar) => ar.indexOf(el) === i));
  return n === 1
    ? 0
    : n - res.filter((el, i, ar) => ar.indexOf(el) === i).length - 2;
}

//////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function countNewFriends(n) {
//   let count = 0,
//     gcd = (a, b) => (!b ? a : gcd(b, a % b));
//   for (let i = 1; i < n; i++) {
//     if (gcd(i, n) === 1) count++;
//   }
//   return count ? count - 1 : 0;
// }
console.log(countNewFriends(8));

const fibAr = [0, 1];
for (let i = 2; i < 10000; i++) fibAr.push(fibAr[i - 1] + fibAr[i - 2]);

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib(77));

///////////////////////////////////////////             5kyu                \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Квадратные суммы
// Напишите функцию square_sums_row( или squareSumsRowили SquareSumsRow), которая по заданному целому числу N(в диапазоне 2..43) возвращает массив целых чисел 1..N, расположенных таким образом, чтобы сумма каждых двух последовательных чисел была квадратом.
// Решение допустимо тогда и только тогда, когда выполняются следующие два условия:
// Каждое число в диапазоне 1..Nиспользуется один и только один раз.
// Сумма каждых двух последовательных чисел представляет собой полный квадрат.
// Пример
// Для N=15 решение может выглядеть так:
// [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
// Проверка
// Все номера используются один раз и только один раз. При сортировке по возрастанию массив выглядит так:
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
// Сумма каждых двух последовательных чисел представляет собой полный квадрат:
//    16    16     16     16     16     16     16
//    /+\   /+\    /+\    /+\    /+\    /+\    /+\
// [ 9, 7, 2, 14, 11, 5, 4, 12, 13, 3, 6, 10, 15, 1, 8 ]
//       \+/    \+/    \+/    \+/    \+/    \+/    \+/
//        9     25      9     25      9     25      9
//  9 = 3*3
// 16 = 4*4
// 25 = 5*5
// Если решения нет, вернитесь false( Noneв Scala, Nothingв Haskell). Например, если N=5, то числа 1,2,3,4,5не могут быть поставлены в ряд квадратных сумм: 1+3=4, 4+5=9, но 2не имеет пар и не может связывать [1,3]и [4,5].

function square_sums_row(n) {
  return false;
}

/////////////////////////////////////////           6kyu               \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Реализуйте алгоритм псевдошифрования, который для заданной строки Sи целого числа Nобъединяет все символы с нечетным индексом Sсо всеми символами с четным индексом S, этот процесс следует повторять несколько Nраз.
// Примеры:
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  => "135024" -> "304152" -> "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Вместе с функцией шифрования вы также должны реализовать функцию дешифрования, которая меняет процесс.
// Если строка Sявляется пустым значением или целое число Nне является положительным, вернуть первый аргумент без изменений.

function encrypt(text, n) {
  if (n <= 0 || text === '' || text === null) return text;
  n -= 1;
  let a = `${text
    .split('')
    .filter((_, i) => i % 2 !== 0)
    .join('')}${text
    .split('')
    .filter((_, i) => i % 2 === 0)
    .join('')}`;

  if (n > 0) a = encrypt(a, n);
  return a;
}

console.log(encrypt('012345', 2));
console.log(encrypt('This is a test!', 3));

function decrypt(encryptedText, n) {
  if (n <= 0 || encryptedText === '' || encryptedText === null)
    return encryptedText;
  n -= 1;
  const a = encryptedText.slice(encryptedText.length / 2).split('');
  const b = encryptedText.slice(0, encryptedText.length / 2).split('');
  let res = [];
  for (let i = 0; i < encryptedText.length / 2; i += 1) {
    res.push(a.shift());
    res.push(b.shift());
  }
  res = res.join('');
  if (n > 0) res = decrypt(res, n);
  return res;
}
/////////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\
// function encrypt(text, n) {
//   for (let i = 0; i < n; i++) {
//     text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1');
//   }
//   return text;
// }

// function decrypt(text, n) {
//   let l = text && (text.length / 2) | 0;
//   for (let i = 0; i < n; i++) {
//     text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''));
//   }
//   return text;
// }

console.log(decrypt('304152', 2));

let sum = 0;
function sums(a, b) {
  console.log(a + b);
  sum = a + b;
  return sum;
}

console.log(sum);
sums(2, 3);
