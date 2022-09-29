// function solution(str, ending) {
//   // TODO: complete
//   return str.includes(ending);
// }
// console.log(solution('abcde', 'abc'));

// Убираем гласные из строки //////////////////////////////////////////////

// function disemvowel(str) {
//   const vowels = ['a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I'];
//   const strArray = str.split('');
//   console.log(strArray);
//   const arr = [];
//   console.log(strArray.length);
//   for (let i = 0; i < strArray.length; i += 1) {
//     console.log(strArray[i]);
//     if (!vowels.includes(strArray[i])) {
//       // strArray.splice(i, 1);
//       // strArray[i] = '';
//       arr.push(strArray[i]);
//       console.log(strArray[i]);
//     }
//   }
//   console.log(strArray);
//   str = arr.join('');
//   return str;
// }
// console.log(disemvowel('This website is for losers LOL!'));

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Решение с кодеварс, с использованием регулярного выражения
// g глобальное сопоставление
// i игнорировать регистр

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(
  disemvowel("No offense but,\n Your writing is among the worst I've ever read")
);

// function disemvowel(str) {
//   const vowels = ['a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I'];
//   const strArray = str.split('');
//   const arr = [];
//   for (let letter of strArray) {
//     if (!vowels.includes(letter)) {
//       arr.push(letter);
//     }
//   }
//   str = arr.join('');
//   return str;
// }

// Возвращает количество true в масиве булианов\\\\\\\\\\\\

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// /////////////////////////////////////////////////////////////////////
// Даны два целых числа a и b, которые могут быть положительными или отрицательными, найдите сумму всех целых чисел между ними и включая их и верните ее. Если два числа равны, верните a или b. Примечание: a и b не упорядочены!
// ////////////////////////////////////////////////////////////////////

// function getSum(a, b) {
//   let c = a > b ? a : b;
//   let sum = 0;
//   for (let i = a > b ? b : a; i <= c; i += 1) {
//     sum += i;
//   }
//   console.log(sum);
//   return sum;
// }
// getSum(0, -5);
// getSum(2, 2);

// ////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам дадут слово. Ваша задача — вернуть средний символ слова. Если длина слова нечетная, вернуть средний символ. Если длина слова четная, верните средние 2 символа.
// ///////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function getMiddle(s) {
  // const wordLength = s.length;
  // if (wordLength % 2 === 0) {
  //   return s.slice(wordLength / 2 - 1, wordLength / 2 + 1);
  // } else {
  //   return s.slice(wordLength / 2, wordLength / 2 + 1);
  // }
  return s.length % 2 === 0
    ? s.slice(s.length / 2 - 1, s.length / 2 + 1)
    : s.slice(s.length / 2, s.length / 2 + 1);
}
console.log(getMiddle('tested'));
console.log(getMiddle('testing'));

// ////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Given the triangle of consecutive odd numbers:

// 1                  1
// 2               3     5
// 3            7     9    11
// 4        13    15    17    19
// 5     21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8   pow(n, 3)
// /////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function rowSumOddNumbers(n) {
  const index = ((n - 1) * (n - 1 + 1)) / 2;
  let sum = 0;
  for (let i = index * 2 + 1; i < (index + n) * 2 + 1; i += 2) {
    sum += i;
  }
  console.log(`${n} в кубе равно ${sum}`);
  return sum;
}
console.log(rowSumOddNumbers(42));

// //////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// В этом ката вы создадите функцию, которая берет список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

// Пример
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
// /////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function filter_list(l) {
  // Return a new array with the strings filtered out
  const filteredArr = [];
  for (value of l) {
    if (typeof value === 'number') {
      filteredArr.push(value);
    }
  }
  return filteredArr;
  // решение с codewars
  return l.filter(function (v) {
    return typeof v == 'number';
  });
  //  return l.filter(Number.isInteger);
}

///////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// Пример: (Ввод --> Вывод)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j < str.length; j += 1) {
      console.log(str[i], str[j]);
      if (str[i] === str[j]) return false;
    }
  }
  return true;
  return new Set(str.toUpperCase()).size == str.length;
  codewars;
}
console.log(isIsogram('aba'));

////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// На заводе принтер печатает этикетки для коробок. Для одного вида коробок принтер должен использовать цвета, которые для простоты названы буквами из a to m.

// Цвета, используемые принтером, записываются в управляющую строку. Например, "хорошая" управляющая строка будет aaabbbbhaijjjmозначать, что принтер использовал три раза цвет a, четыре раза цвет b, один раз цвет h, а затем один раз цвет a...

// Иногда возникают проблемы: отсутствие цветов, технический сбой и выдается "плохая" управляющая строка, например, aaaxbbbbyyhwawiwjjjwwmс буквами не из a to m.

// Вы должны написать функцию, printer_errorкоторая по заданной строке будет возвращать частоту ошибок принтера в виде строки , представляющей рациональное число, числитель которого — количество ошибок, а знаменатель — длину контрольной строки. Не уменьшайте эту дробь до более простого выражения.

// Строка имеет длину больше или равную единице и содержит только буквы от aдо z.
/////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function printerError(s) {
//   const forbiddenLetters = [
//     'n',
//     'o',
//     'p',
//     'q',
//     'r',
//     's',
//     't',
//     'u',
//     'v',
//     'w',
//     'x',
//     'y',
//     'z',
//   ];
//   const arr = s.split('');
//   let forbSum = 0;
//   for (let l of s) {
//     if (forbiddenLetters.includes(l)) forbSum += 1;
//   }
//   return `${forbSum} / ${s.length}`;
// }

// var printerError = s => (s.match(/[n-z]/g) || []).length + '/' + s.length;

const printerError = s => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;

// const f = 'ldjgurfodjd fdsksdoFFHKgkkGFl::G';
// console.log('f', f.replace(/[c,d]/gi, '').toLowerCase());

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
);

///////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// "ATTGC" --> "TAACG"
// "GTAT" -- > "CATA"
// DNA
///////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function DNAStrand(dna) {
  return dna.replace(/[A,T,G,C]/gi, f => {
    if (f === 'A') return 'T';
    if (f === 'T') return 'A';
    if (f === 'G') return 'C';
    if (f === 'C') return 'G';
  });
}

/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// shortes word
/////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function findShort(s) {
//   const words = s.split(' ');
//   let min = words[0].length;
//   console.log(min);
//   for (let word of words) {
//     if (word.length < min) min = word.length;
//   }
//   return min;
// }
console.log(findShort("Let's travel abroad shall we"));

function findShort(s) {
  return Math.min(...s.split(' ').map(s => s.length));
}

///////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
////////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function friend(friends) {
  return friends.filter(n => n.length === 4);
}

////////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// reverse words
//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// function reverseWords(str) {
//   const arr = str.split(' ');
//   console.log(arr);
//   const reverseArray = [];
//   for (const word of arr) {
//     reverseArray.push(word.split('').r    neverse().join(''));
//   }
//   return reverseArray.join(' ');
// }

function reverseWords(str) {
  return str
    .split(' ')
    .map(word => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

const dfrt = 'fredy';
const sjy = 5;

const object = {
  name: 'super object',
  [dfrt]: 58,
  changeName(newName) {
    this.name = newName;
  },
};
object.jt = 359;
object.changeName('fduerl');
console.log(object);

// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********',
// ];

// 1-1, 2-3, 3-5, 4-7, 5-9, 6-11

// function towerBuilder(nFloors) {
//   // build here
//   const arr = [];
//   for (let i = 0; i < nFloors; i++) {
//     const counter = (i + 1) * 2 - 1;
//     let star = '';
//     for (let j = 1; j <= counter; j++) {
//       star += '*';
//     }
//     let space = '';
//     let n = nFloors - (i + 1);
//     for (let k = 1; k <= n; k++) {
//       space += ' ';
//     }
//     arr[i] = space + star + space;
//   }
//   return arr;
// }
console.log(towerBuilder(6));
console.log([...Array(7)].map((_, index) => index + 1));

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) =>
      ' '.repeat(n - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(n - 1 - i)
  );
}
const _ = 2;
console.log(_);
const string = '12345';
const reversed = Array.prototype.map
  .call(string, x => x)
  .reverse()
  .join('');
// reversed равен '54321'
// Бонус: используйте '===' для проверки того, является ли строка палиндромом
console.log(reversed);

// Вы живете в городе Картезия, где все дороги выложены идеальной сеткой. Вы пришли на встречу на десять минут раньше назначенного срока, поэтому решили воспользоваться возможностью прогуляться. Город предоставляет своим горожанам приложение Walk Generating на их телефонах — каждый раз, когда вы нажимаете кнопку, оно отправляет вам массив строк из одной буквы, представляющих направления ходьбы (например, ['n', 's', 'w', «е»]). Вы всегда проходите только один квартал для каждой буквы (направления), и вы знаете, что вам потребуется одна минута, чтобы пройти один городской квартал, поэтому создайте функцию, которая будет возвращать true , если прогулка, которую предлагает вам приложение, займет у вас ровно десять минут (вы не хочу ни рано, ни поздно!) и, конечно же, вернет вас в исходную точку. В противном случае верните false .

function isValidWalk(walk) {
  //insert brilliant code here
  return (
    walk.length === 10 &&
    walk.filter(el => el === 'n').length ===
      walk.filter(el => el === 's').length &&
    walk.filter(el => el === 'w').length ===
      walk.filter(el => el === 'e').length
  );
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(
  isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])
);

// Каждый смайлик должен содержать допустимую пару глаз. Глаза могут быть отмечены как :или;
// У смайлика может быть нос, но не обязательно. Допустимые символы для носа -или~
// Каждое улыбающееся лицо должно иметь улыбающийся рот, который должен быть отмечен либо значком, )либоD
// Не допускается использование дополнительных символов, кроме упомянутых.

// Примеры допустимых смайликов: :) :D ;-D :~)
// Недопустимые смайлики: ;( :> :} :]

// Пример
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Примечание
// В случае пустого массива верните 0. Вы не будете тестироваться с недопустимым вводом (ввод всегда будет массивом). Порядок элементов лица (глаза, нос, рот) всегда будет одинаковым.

//return the total number of smiling faces in the array
function countSmileys(arr) {
  const qwe = [
    ';-)',
    ';)',
    ';~)',
    ';-D',
    ';~D',
    ';D',
    ':-)',
    ':)',
    ':~)',
    ':-D',
    ':~D',
    ':D',
  ];

  return arr.filter(item => qwe.includes(item)).length;
}

// const countSmileys = ss =>
//   ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

// function countSmileys(arr) {
//   return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }

console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));

// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.

// Например:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array

  return [...iterable].filter(
    (item, index, array) => item !== array[index + 1]
  );
};

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));

// Подсчитайте количество дубликатов
// Напишите функцию, которая будет возвращать количество различных буквенных символов и цифр, не зависящих от регистра, которые встречаются во входной строке более одного раза. Можно предположить, что входная строка содержит только буквы (как прописные, так и строчные) и числовые цифры.

// Пример
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "Indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  return (
    [...text]
      .sort()
      .join('')
      .match(/(.)\1{1,}/gi) || []
  ).length;
}
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('Indivlisibilities'));
console.log('aab345bbb7c3c5ee'.match(/(.)\1{1,}/g));

// function duplicateCount(text) {
//   return [...text.toLowerCase()]
//     .sort()
//     .join('')
//     .match(/(.)\1{1,}/g)
//     ? [...text.toLowerCase()]
//         .sort()
//         .join('')
//         .match(/(.)\1{1,}/g).length
//     : 0;
// }

//////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Возвращает количество (количество) гласных в заданной строке.

// Мы будем рассматривать a, e, i, o, uкак гласные для этой Ката (но не y).

// Входная строка будет состоять только из строчных букв и/или пробелов.

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

/////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Задача:
// Ваша задача — написать функцию, которая возвращает сумму следующих рядов до n-го члена (параметра).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Правила:
// Вам нужно округлить ответ до 2 знаков после запятой и вернуть его как строку.

// Если заданное значение равно 0, оно должно вернуть 0,00.

// В качестве аргументов вам будут предоставлены только натуральные числа.

// Примеры: (Ввод --> Вывод)
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
  let total = 0;
  for (let i = 1; i < n * 3; i += 3) {
    console.log(i);

    total += 1 / i;
  }
  // return String(Math.round(total * 100) / 100);
  return total.toFixed(2);
}

console.log(SeriesSum(1));

////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Задача про кассы самообслуживания,

// function queueTime(customers, n) {
//   console.log(customers);
//   const arr = new Array(n).fill(0);
//   console.log(arr);
//   for (let time of customers) {
//     let index = arr.indexOf(Math.min(...arr));
//     arr[index] += time;
//     console.log(time, index, arr);
//   }
//   return Math.max(...arr);
// }

// console.log(queueTime([10, 2, 3, 15, 3, 7, 10], 4));

//////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Напишите число в развернутой форме
// Вам будет дано число, и вам нужно будет вернуть его в виде строки в расширенной форме . Например:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// ПРИМЕЧАНИЕ. Все числа будут целыми числами больше 0.

// function expandedForm(num) {
//   const numArr = String(num).split('');
//   console.log(numArr);
//   for (let i = numArr.length - 1; i >= 0; i -= 1) {
//     console.log(numArr[i] * Math.pow(10, numArr.length - 1 - i));
//     numArr[i] = numArr[i] * Math.pow(10, numArr.length - 1 - i);
//   }
//   console.log(numArr);

//   return numArr
//     .filter(w => w !== 0)
//     .map(item => item.toString())
//     .reduce((acc, item) => (acc = acc + ` + ${item}`));
// }

// console.log(expandedForm(70304));
// console.log(expandedForm(2));
///////////////////////////////
// const expandedForm = n =>
//   n
//     .toString()
//     .split('')
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(' + ');

//////////////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).

function comp(array1, array2) {
  console.log(array1.reduce((acc, item) => (acc *= item), 1));
  console.log(Math.sqrt(array2.reduce((acc, item) => (acc *= item), 1)));
  console.log(array2.filter(t => !Number.isInteger(Math.sqrt(t))));
  console.log(array1.filter(a => a === 1));
  return array1.length === array2.length &&
    array2.filter(t => !Number.isInteger(Math.sqrt(t))).length === 0 &&
    array1.filter(a => a === 1).length === array2.filter(a => a === 1).length
    ? array1.reduce((acc, item) => (acc *= item), 1) ===
        Math.sqrt(array2.reduce((acc, item) => (acc *= item), 1))
    : false;
}

const a1 = [
  7, 9, 8, 2, 9, 3, 4, 8, 0, 0, 4, 10, 5, 1, 1, 2, 1, 4, 9, 4, 6, 5, 7, 10,
];
const a2 = [
  81, 81, 1, 25, 4, 16, 0, 1, 16, 1, 64, 9, 25, 16, 64, 36, 49, 16, 0, 100, 4,
  81, 101, 49,
];
console.log(comp(a1, a2));
////////////  codewars   \\\\\\\\\\\\\\
// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map(v => v * v).every((v, i) => v == array2[i]);
// }

///////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// Примеры ввода/вывода:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .filter(o => o === o).length ==
    str
      .toLowerCase()
      .split('')
      .filter(x => x === x).length
  );
}

console.log(XO('oxoxox'));

////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c. Функция должна возвращать true, если можно построить треугольник со сторонами заданной длины, и false в любом другом случае.

// (В этом случае все треугольники должны иметь поверхность больше 0, чтобы быть принятыми).

// function isTriangle(a, b, c) {
//   const arr = [a, b, c];
//   console.log(arr);
//   const max = Math.max(...arr);
//   console.log(arr);
//   arr.splice(arr.indexOf(max), 1);
//   console.log(arr);
//   return max < arr[0] + arr[1];
// }
// console.log(isTriangle(1, 2, 2));
///////////////   codewars   \\\\\\\\\\\\\\\
// function isTriangle(a, b, c) {
//   return a + b > c && a + c > b && c + b > a;
// }

//////////////////////////////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, оставив четные числа на их исходных позициях.

// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9

function sortArray(array) {
  let n = 0;
  const total = [];
  const arr = array.filter(n => n % 2 !== 0).sort((a, b) => a - b);
  for (let item of array) {
    if (item % 2 !== 0) {
      total.push(arr[n]);
      n += 1;
    } else {
      total.push(item);
    }
  }
  return total;
}

//////////////  codewars  \\\\\\\\\\\\\\\
// function sortArray(array) {
//   const odd = array.filter(x => x % 2).sort((a, b) => a - b);
//   return array.map(x => (x % 2 ? odd.shift() : x));
// }
console.log(sortArray([1, 11, 2, 8, 3, 4, 5]));

//////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Реализуйте функцию, которая складывает два числа и возвращает их сумму в двоичном виде. Преобразование может быть выполнено до или после добавления.
// Возвращаемое двоичное число должно быть строкой.
function addBinary(a, b) {
  return (a + b).toString(2);
}

///////////////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Некоторые числа обладают забавными свойствами. Например:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Даны положительное целое число n, записанное в виде abcd... (a, b, c, d... являются цифрами), и положительное целое число p

// мы хотим найти положительное целое число k, если оно существует, такое, что сумма цифр n, взятых в последовательных степенях p, равна k * n.
// Другими словами:

// Существует ли целое число k, такое как: (a ^ p + b ^ (p+1) + c ^ (p+2) + d ^ (p+3) + ...) = n * k

// Если это так, мы вернем k, если нет, вернем -1.

// Примечание : n и p всегда задаются как строго положительные целые числа.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p) {
  var x = String(n)
    .split('')
    .reduce((s, d, i) => s + Math.pow(d, p + i), 0);
  return x % n ? -1 : x / n;
}

/////////////////////////////////////////////   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// На этот раз ни истории, ни теории. В приведенных ниже примерах показано, как написать функцию accum:

// Примеры:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// Параметр accum представляет собой строку, состоящую только из букв из a..zи A..Z.

function accum(s) {
  console.log(
    s
      .toLowerCase()
      .split('')
      .map((c, i) => c.toUpperCase() + c.repeat(i))
      .join('-')
  );
}
accum('ZpglnRxqenU');

/////////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Основная идея состоит в том, чтобы подсчитать все встречающиеся символы в строке. Если у вас есть строка типа aba,
// результат должен быть { 'a': 2, 'b': 1 }.
// Что делать, если строка пуста? Тогда результатом должен быть пустой литерал объекта, {}.

// function count(string) {
//   const letterObject = {};
//   const strArr = string.toLowerCase().split('');

//   strArr.forEach(item => {
//     switch (item) {
//       case 'a':
//         letterObject.a = strArr.filter(a => a === 'a').length;
//         break;
//       case 'b':
//         letterObject.b = strArr.filter(b => b === 'b').length;
//         break;
//       case 'c':
//         letterObject.c = strArr.filter(c => c === 'c').length;
//         break;
//       case 'd':
//         letterObject.d = strArr.filter(d => d === 'd').length;
//         break;
//       case 'e':
//         letterObject.e = strArr.filter(e => e === 'e').length;
//         break;
//       case 'f':
//         letterObject.f = strArr.filter(f => f === 'f').length;
//         break;
//       case 'g':
//         letterObject.g = strArr.filter(g => g === 'g').length;
//         break;
//       case 'h':
//         letterObject.h = strArr.filter(h => h === 'h').length;
//         break;
//       case 'i':
//         letterObject.i = strArr.filter(i => i === 'i').length;
//         break;
//       case 'j':
//         letterObject.j = strArr.filter(j => j === 'j').length;
//         break;
//       case 'k':
//         letterObject.k = strArr.filter(k => k === 'k').length;
//         break;
//       case 'l':
//         letterObject.l = strArr.filter(l => l === 'l').length;
//         break;
//       case 'm':
//         letterObject.m = strArr.filter(m => m === 'm').length;
//         break;
//       case 'n':
//         letterObject.n = strArr.filter(n => n === 'n').length;
//         break;
//       case 'o':
//         letterObject.o = strArr.filter(o => o === 'o').length;
//         break;
//       case 'p':
//         letterObject.p = strArr.filter(p => p === 'p').length;
//         break;
//       case 'q':
//         letterObject.q = strArr.filter(q => q === 'q').length;
//         break;
//       case 'r':
//         letterObject.r = strArr.filter(r => r === 'r').length;
//         break;
//       case 's':
//         letterObject.s = strArr.filter(s => s === 's').length;
//         break;
//       case 't':
//         letterObject.t = strArr.filter(t => t === 't').length;
//         break;
//       case 'u':
//         letterObject.u = strArr.filter(u => u === 'u').length;
//         break;
//       case 'v':
//         letterObject.v = strArr.filter(v => v === 'v').length;
//         break;
//       case 'w':
//         letterObject.w = strArr.filter(w => w === 'w').length;
//         break;
//       case 'x':
//         letterObject.x = strArr.filter(x => x === 'x').length;
//         break;
//       case 'y':
//         letterObject.y = strArr.filter(y => y === 'y').length;
//         break;
//       case 'z':
//         letterObject.z = strArr.filter(z => z === 'z').length;
//         break;
//     }
//   });
//   return letterObject;
// }

//////////////  codewars   \\\\\\\\\\\\\\\\\\\\\

function count(string) {
  var objLetter = {};
  string
    .split('')
    .forEach(l => (objLetter[l] ? objLetter[l]++ : (objLetter[l] = 1)));
  return objLetter;
}

function count1(string) {
  const r = {};
  string.split('').forEach(c => (r[c] = (r[c] || 0) + 1));
  return r;
}

console.log(count('dftryebbbffrrt'));
console.log(count1('dftryebbbffrrert'));

////////////////////////////////////////        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Подсчитайте количество делителей натурального числа n.
// Случайные тесты доходят до n = 500000.
// Примеры (ввод --> вывод)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  const arr = [];
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) arr.push(i);
  }
  console.log(arr);
  return arr.length;
}

console.log(getDivisorsCnt(563274));

///////////\\\\\\\\\\\\\
// function getDivisorsCnt(n) {
//   let x = 1;
//   for (let i = 1; i <= n / 2; i++) {
//     if (n % i === 0) x += 1;
//   }
//   return x;
// }

/////////////////////////////////////////      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Задача
// Как шаг к достижению этого; вы решили создать функцию, которая будет создавать многомерный массив из значения счетчика попаданий. Каждое внутреннее измерение массива представляет собой отдельную цифру в счетчике обращений и будет включать все числа, предшествующие ему, вплоть до 0.
// Правила
// Функция будет принимать один аргумент, который будет состоять из четырех символов, stringпредставляющих количество попаданий .
// Функция должна возвращать многомерный массив, содержащий четыре внутренних массива.
// Конечным значением в каждом внутреннем массиве должно быть фактическое отображаемое значение.
// Значения, возвращаемые в массиве, должны быть типаnumber
// Примеры
// counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
// counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]]
// counterEffect("0000") // [[0],[0],[0],[0]]

function counterEffect(hitCount) {
  return hitCount
    .split('')
    .map(x => [...Array(Number(x) + 1)].map((_, i) => i));
}
console.log(counterEffect('1250'));
console.log([...Array(7)].map((_, index) => index));

/////////////////////////////  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Возвращает новую отсортированную строку, максимально длинную, содержащую различные буквы (каждая из которых взята только один раз) из s1 или s2.
// Примеры:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   console.log(
//     (s1 + s2)
//       .split('')
//       .filter((x, i, a) => a.indexOf(x) === i)
//       .sort((a, b) => a.localeCompare(b))
//       .join('')
//   );
// }

function longest(s1, s2) {
  console.log([...new Set(s1 + s2)].sort().join(''));
}
///////// codewars \\\\\\\\\\\\\\\\
// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

longest('aretheyhere', 'yestheyarehere');

//////////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Давайте попробуем вспомнить старые добрые времена и каково было отправлять текстовые сообщения с помощью таких устройств. У многих из них были разные раскладки, особенно для специальных символов и пробелов, поэтому для простоты мы будем использовать вымышленную модель с раскладкой клавиш 3x4, показанную ниже:

// -------------------------
// |   1   |   2   |   3   |  <-- hold a key to type a number
// |  .,?! |  abc  |  def  |  <-- press a key to type a letter
// -------------------------
// |   4   |   5   |   6   |  <-- Top row
// |  ghi  |  jkl  |  mno  |  <-- Bottom row
// -------------------------
// |   7   |   8   |   9   |
// |  pqrs |  tuv  |  wxyz |
// -------------------------
// |   *   |   0   |   #   |  <-- hold for *, 0 or #
// |  '-+= | space |  case |  <-- press # to switch between upper/lower case
// -------------------------
// Задание
// Вы подготовили большой палец к работе, так что вы получите a, messageи ваша задача — выяснить, какие клавиши вам нужно нажать, чтобы вывести данное сообщение с наименьшим возможным числом кликов . Верните результат в виде строки ключевых входных данных из верхней строки (см. Диаграмму выше).

// Не торопитесь , чтобы изучить правила ниже.

// Как это работает
// Результат
// Выходная строка содержит входные данные, которые отображаются в верхней строке макета ключа. ( 0-9*#)

// Печатая буквы
// Чтобы ввести буквы, несколько раз нажмите кнопку, чтобы просмотреть возможные символы (нижний ряд раскладки клавиш). Нажатие представлено повторным повторением элемента верхней строки клавиши n, где n — позиция символа на этой конкретной клавише. Примеры:

// 2=> 'а', 9999=> 'г', 111=> '?', ***=> '+'
// Ввод цифр
// Чтобы ввести цифры 0-9и специальные символы *#- удерживайте эту клавишу. Холдинг представлен числом, за которым следует тире. Примеры:

// 3-=> '3', 5-5-5-=> '555'
// Верхний регистр Нижний регистр
// Изначально дело в том lowercase. Для переключения между строчными и прописными буквами используйте #символ . Переключение регистра следует рассматривать только тогда, когда следующий символ является буквенным ( a-z). Примеры:

// #2#9999=> 'Az' (помните, это переключатель)
// 27-#2255=> 'a7BK' (не переключать до '7')
// Ожидание следующего персонажа
// Если у вас есть 2 или более символов в последовательности, которые находятся на одной и той же кнопке (см. макет, нижний ряд), вам придется подождать , прежде чем снова нажать ту же кнопку. Ожидание представлено добавлением пробела между 2 (или более) такими символами. Пример:

// 44 444 44 444=> 'привет'
// Исключения : не нужно ждать после удержания любой клавиши, даже если следующий символ находится на той же кнопке ( 4-4=> '4g'), или если есть переключение регистра между двумя символами на той же кнопке ( #5#55=> 'Jk').

// Пример
// Чтобы собрать все воедино, давайте рассмотрим пример. Скажем, вы хотите ввести это сообщение - 'Def Con 1!':

// Переключитесь на верхний регистр с помощью #и нажмите 3( #3 => D) (ввод теперь в режиме верхнего регистра)
// Переключитесь на нижний регистр и 3дважды нажмите ( #33 => e). (Обратите внимание, что нет ожидания из-за переключения регистра)
// Следующий символ снова fнаходится на кнопке 3и имеет тот же регистр (ввод в нижнем регистре и символ в нижнем регистре), поэтому вам придется подождать, чтобы снова ввести ( ' 333' => f).
// Аналогичным образом наберите второе слово (пробел стоит на цифре 0).0#222#666 660 => ' Con '
// Завершите, удерживая 1as 1-и набрав !as 1111( '1-1111' = 1!). Обратите внимание, что после удержания клавиши вам не нужно ждать, чтобы нажать другую клавишу.
// Результат:
// sendMessage("Def Con 1!") => "#3#33 3330#222#666 6601-1111"

// Дополнительные примеры приведены в тестовом наборе.

// Все входные данные будут допустимыми строками и состоят только из символов из таблицы раскладки клавиш.

// const sendMessage = message => {
//   console.log(message);
//   const phone = new Map([
//     ['1', ['1', '.', ',', '?', '!']],
//     ['2', ['2', 'a', 'b', 'c']],
//     ['3', ['3', 'd', 'e', 'f']],
//     ['4', ['4', 'g', 'h', 'i']],
//     ['5', ['5', 'j', 'k', 'l']],
//     ['6', ['6', 'm', 'n', 'o']],
//     ['7', ['7', 'p', 'q', 'r', 's']],
//     ['8', ['8', 't', 'u', 'v']],
//     ['9', ['9', 'w', 'x', 'y', 'z']],
//     ['*', ['', "'", '-', '+', '=', '*']],
//     ['0', ['0', ' ']],
//     ['#', ['#']],
//   ]);

//   const letterrArr = [];
//   const repeatArr = [];
//   message
//     .toLowerCase()
//     .split('')
//     .map(x => {
//       phone.forEach((value, key) => {
//         if (value.includes(x)) {
//           letterrArr.push(key);
//           repeatArr.push(value.indexOf(x));
//           console.log('//////////////', key, value.indexOf(x));
//           return letterrArr, repeatArr;
//         }
//       });
//     });
//   let message1 = '';
//   console.log(letterrArr, repeatArr);
//   message.split('').map((str, ind) => {
//     console.log(message[ind]);
//     if (str === '*') {
//       message1 += `${str}-`;
//     } else if (str === '#') {
//       message1 += `${str}-`;
//     } else if (!Number.isNaN(Number.parseInt(str))) {
//       message1 += `${str}-`;
//     } else if (letterrArr[ind] === letterrArr[ind + 1]) {
//       message1 += `${letterrArr[ind].repeat(repeatArr[ind])} `;
//     } else if (
//       letterrArr[ind] === letterrArr[ind + 1] &&
//       str.toUpperCase() === str
//     ) {
//       message1 += `#${letterrArr[ind].repeat(repeatArr[ind])}#`;
//     } else if (str.toLowerCase() !== str) {
//       message1 += `#${letterrArr[ind].repeat(repeatArr[ind])}#`;
//     } else {
//       message1 += `${letterrArr[ind].repeat(repeatArr[ind])}`;
//     }
//   });
//   // message1 = message1.replace(/- /g, '-');
//   message1 = message1.replace(/- /g, '-');
//   message1 = message1.replace('#**', '**#');
//   message1 = message1.replace(/##/g, '');
//   message1 = message1.replace('#0', '0#');
//   if (message1.endsWith('#')) {
//     message1 = message1.slice(0, -1);
//   }
//   return message1;
// };

function sendMessage(message) {
  const keys = {
    1: '.,?!',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
    '*': "'-+=",
    0: ' ',
  };

  let uppercase = false,
    prev,
    out = '';
  message.split('').forEach((e, i, a) => {
    if ((/[a-z]/.test(e) && uppercase) || (/[A-Z]/.test(e) && !uppercase)) {
      uppercase = !uppercase;
      out += '#';
      prev = undefined;
    }
    if (/[0-9*#]/.test(e)) {
      if (prev === e) out += ' ';
      out += e === ' ' ? '0' : e + '-';
      prev = undefined;
    } else if (/[a-z .,?!'\-+=]/i.test(e)) {
      for (let k in keys) {
        if (keys[k].includes(e.toLowerCase())) {
          if (prev === k) out += ' ';
          out += k.repeat(keys[(prev = k)].indexOf(e.toLowerCase()) + 1);
          break;
        }
      }
    }
  });
  return out;
}
// console.log(sendMessage('one1 two three'));
console.log(sendMessage('Def Con 1!'));
// '#3#33 3330#222#666 6601-1111';
console.log(sendMessage('D=b*b-4*a*c'));
console.log(sendMessage('     '));

////////////////////////////////////       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Если мы перечислим все натуральные числа до 10, кратные 3 или 5, мы получим 3, 5, 6 и 9. Сумма этих кратных равна 23.
// Завершите решение так, чтобы оно возвращало сумму всех чисел, кратных 3 или 5 , меньше переданного числа. Кроме того, если число отрицательное, верните 0 (для языков, в которых они есть).
// Примечание. Если число кратно и 3, и 5, считайте его только один раз .

function solution(number) {
  if (number <= 0) return 0;
  let res = 0;
  for (let i = 0; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) res += i;
  }
  return res;
}

console.log(solution(10));
///////////////  codewars  \\\\\\\\\\\\\\\\
// solution = n => n <= 0 ? 0 : Array.from({ length: n }, (_, i) => i % 3 == 0 || i % 5 == 0 ? i : 0).reduce((x, y) => x + y);

//////////////////////////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Джереми любит математику. Вчера он нашел старую книгу по математике с более чем 300 полиномиальными выражениями, которые нужно было вычислить. К сожалению, страницы с решениями были уничтожены.

// Вам дано строковое представление многочлена. Ваша задача — написать функцию, которая вычисляет многочлен для заданного значения.

// Вход
// Строка p, представляющая полином и rзначение для оценки p.

// Выход
// Строковое представление результирующего значения.

// Ограничения
// Вы можете предположить, что:

// Члены каждого многочлена не содержат определенного порядка. (например, 3x^2+5x+2или 5x+3x^2+2)
// Вам не нужно «комбинировать одинаковые термины» или упрощать многочлен.
// Есть только одна неопределенная строчная буква, за которой может следовать цифра. (например, 5y^2+2y+9или 5x1^2+2x1+9)
// Коэффициенты могут быть любыми действительными числами. В случае нуля член будет исключен из выражения. (например, 33x^2+x-10.3или 33x^2+1)
// Между каждым символом могут быть пробелы. (напр. 2 3x^ 2+x +1)
// pникогда не бывает пустой строкой.
// rможет быть любым действительным числом.
// Заметки:

// Показатель степени представлен ^символом. (напр. 3x^2+5x+2)
// 2Для простоты результаты должны быть отформатированы с использованием записи цифр с фиксированной точкой .
// Javascript определяет оба значения 0и -0, но мы не различаем их. (см. примеры)
// Приготовьтесь к более чем 100 случайным тестам.
// Примеры
// solvePolynomial('0', 10); // => '0.00'
// solvePolynomial('-0.00003', 0) // => '0.00'
// solvePolynomial('0.00003', 0) // => '0.00'
// solvePolynomial('-500.2', 100); // => '-500.20'
// solvePolynomial('3x', 100); // => '300.00'
// solvePolynomial('3y36^2+2y36', 2.6); // => '25.48'
// solvePolynomial('-2000+0.5x2^3', 5.5); // => '-1916.81'
// solvePolynomial('31 x^ 2+5 0x -2 9', 5); //=> '996.00'

// function solvePolynomial(p, r) {
//   console.log(p.match(/-|\+|\*|[a-z]|\^/g), p.split(/-|\+|\*|[a-z]|\^/g));
//   const digiArr = p.split(/-|\+|\*|[a-z]|\^/g);
//   const operArr = p.match(/-|\+|\*|[a-z]|\^/g);
//   const resArr = [];
//   for (let a of digiArr) {
//     if (parseInt(a) === NaN) {
//       resArr.push(operArr.shift());
//       resArr.push(a);
//     } else {
//       resArr.push(a);
//       resArr.push(operArr.shift());
//     }
//   }
//   console.log(resArr.join('').replaceAll(' ', '').replaceAll(/a-z/g, r));
// }

//////////////////////////////// codewars   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function solvePolynomial(p, r) {
  let letter = (p.match(/[a-z]/g) || [])[0];
  console.log(letter);
  return eval(
    p
      .replace(/\s/g, '') // remove unnecessary spaces
      .replace(/([a-z])(\d+)/g, (_, a, b) => a) // remove trailing number behind letter
      .replace(/([a-z])\^(\d+)/g, (_, a, b) => `Math.pow(${r},${b})`) // ** will result in error due to existence of `-`, so use `Math.pow`
      .replace(/(-?\d+\.?\d*)([a-z])/gi, '$1*$2') // 2x --> 2 * x
      .replace(new RegExp(`${letter}`, 'g'), r) // 2 * x --> 2 * number given (r)
      .replace(/--/g, '+') // remove double negative sign
  )
    .toFixed(2)
    .replace(/^\-0/, '0'); // rounded to 2 decimal places and convert `-0` to `0`
}
console.log(solvePolynomial('-2000+0.5x2^3*4', 5.5));
console.log(solvePolynomial('31 x^ 2+5 0x -2 9', 5));

///////////////////////////////        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Напишите вызываемую функцию, findUniqueкоторая возвращает единственное уникальное число из массива.
// Все числа в несортированном массиве присутствуют дважды, кроме того, которое вам нужно найти. Числа всегда являются допустимыми целыми значениями от 1 до 2 147 483 647, поэтому нет необходимости в проверке типов и ошибок. Массив содержит хотя бы одно число и может содержать миллионы чисел. Поэтому убедитесь, что ваше решение оптимизировано для скорости.
// Пример
// Вход:
// [ 1, 8, 4, 4, 6, 1, 8 ]
// Ожидаемый результат:
// 6

// function findUnique(numbers) {
// 	const sortNumb = numbers.sort();
// 	for (let i = 0; i < sortNumb.length; i += 2) {
// 		if (sortNumb[i] !== sortNumb[i + 1]) return sortNumb[i];
// 	}
// }
//////////////  \\\\\\\\\\\\\\\\\\\

// return parseInt(numbers.sort().join(' ').replace(/([0-9]* )\1/g, ''));

////////////////////             \\\\\\\\\\\\\\\\\

//   .sort().filter((a, i, arr) => {if (i % 2 === 0) { return a !== arr[i - 1]; } }).at(-1);

///////   \\\\\\\\\
// for (let i = 0; i < sortNumb.length; i += 2) {
//   if (sortNumb[i] !== sortNumb[i - 1]) {
//     f.push(sortNumb[i]);
//   }
// }
// console.log(sortNumb);
// return f[f.length - 1];
//////////////////////////////  codewars   \\\\\\\\\\\\\\\\\\\\\\\\\\
function findUnique(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}
console.log(
  findUnique([4, 56, 45, 87, 4, 3, 5, 56, 1, 45, 78, 1, 2, 87, 5, 3, 2])
);
// console.log([1, 2, 3, 4, 5] - [2, 3, 4, 5]);
console.log(parseInt('011001', 2));

const objA = { x: 1 };
const objB = { y: 2 };
const objC = { z: 3 };

console.log(
  4 ^ 56 ^ 45 ^ 87 ^ 4 ^ 3 ^ 5 ^ 56 ^ 1 ^ 45 ^ 78 ^ 1 ^ 2 ^ 87 ^ 5 ^ 3 ^ 2
);

////////////////////////////////////////                     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.
// Всегда будет только одно целое число, которое встречается нечетное количество раз.
// Примеры
// [7]должен вернуть 7, потому что это происходит 1 раз (что нечетно).
// [0]должен вернуть 0, потому что это происходит 1 раз (что нечетно).
// [1,1,2]должен вернуть 2, потому что это происходит 1 раз (что нечетно).
// [0,1,0,1,0]должен вернуть 0, потому что он встречается 3 раза (что нечетно).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуть 4, потому что он появляется 1 раз (что нечетно).

function findOdd(A) {
  return A.find(item => A.filter(el => el === item).length % 2);
}

// function findOdd(A) {
//   return A.reduce((a, b) => a ^ b);
// }
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

////////////////////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам будет предоставлен массив объектов, представляющих данные о разработчиках, которые подписались на участие в следующей встрече программистов, которую вы организуете.
// Учитывая следующий входной массив:
// var list1 = [
//   { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ];
// напишите функцию, которая при выполнении as findOddNames(list1)возвращает только разработчиков, где , если вы добавите ASCII-представление всех символов в их именах, результатом будет нечетное число :
// [
//   { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
// ]
// Пояснение к вышесказанному:
// Сумма кодов букв ASCII в 'Aba'is: 65 + 98 + 97 = 260что является четным числом
// Сумма кодов букв ASCII в 'Abb': 65 + 98 + 98 = 261что является нечетным числом
// Заметки:
// Сохраните порядок исходного списка.
// Возвращает пустой массив [], если нет разработчика с «нечетным» именем.
// Входной массив и имена всегда будут допустимы и отформатированы, как в примере выше.

function findOddNames(list) {
  return list.filter(
    item =>
      item.firstName.split('').reduce((acc, a) => (acc += a.charCodeAt()), 0) %
        2 !==
      0
  );
}
const list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];
console.log(findOddNames(list1));
console.log(['A', 'b', 'a'].reduce((acc, a) => (acc += a.charCodeAt()), 0));

///////////////////////////////////////////                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Напишите функцию , persistenceкоторая принимает положительный параметр num и возвращает его мультипликативную постоянство, то есть количество раз, которое вы должны умножить на цифры num, пока не получите одну цифру.

// Например (Ввод --> Вывод) :

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// function persistence(num) {
//   let count = 0;
//   while (num > 9) {
//     num = num
//       .toString()
//       .split('')
//       .reduce((acc, a) => acc * a);
//     count += 1;
//   }
//   return count;
// }
//////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b))
    : 0;
};

console.log(persistence(999));

////////////////////////////////////   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Палиндромное число — это число, которое остается неизменным при перестановке цифр. Как и 16461, например, он "симметричный".
// Непалиндромные числа можно соединить с палиндромными с помощью ряда операций.Во - первых, непалиндромное число переворачивается, и результат прибавляется к исходному числу.Если результат не является палиндромным числом, это повторяется до тех пор, пока не будет получено палиндромное число.
// Вам будет дано число в качестве входных данных, а на выходе вы должны вернуть строку, содержащую количество итераций(т.е.добавлений), которые вы должны были выполнить, чтобы получить палиндромный результат, и само палиндромное число, разделенные пробелом.
// palindromize(195)
// 4 9339

// palindromize(265)
// 5 45254

// palindromize(750)
// 3 6666

// function palindromize(number) {
//   const fnCheck = val =>
//     `${val}`
//       .split('')
//       .slice(0, Math.ceil(`${val}`.length / 2))
//       .join('') !==
//     `${val}`
//       .split('')
//       .slice(-Math.ceil(`${val}`.length / 2))
//       .reverse()
//       .join('');
//   let count = 0;
//   while (fnCheck(number)) {
//     number = number + Number(`${number}`.split('').reverse().join(''));
//     count += 1;
//   }
//   return `${count} ${number}`;
// }

function palindromize(n, i) {
  let a = +(n + '').split('').reverse().join('');
  return n == a ? (i || 0) + ' ' + n : palindromize(n + a, i ? ++i : 1);
}

console.log(palindromize(750));

////////////////////////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Вам будет дан некоторый массив длины n, такой что n > 4, имеющий положительные и отрицательные целые числа, но не будет нулей и все элементы будут встречаться в нем один раз.
// Мы можем получить количество nподмассивов длины n - 1, удаляя по одному элементу за раз (слева направо).
// Для каждого подмассива вычислим произведение и сумму его элементов с соответствующим абсолютным значением частного q = SubProduct/SubSum(если возможно, SubSum не может быть равен 0). Затем мы выбираем массив с наименьшим значением |q|(абсолютное значение)
// например: у нас есть массив,arr = [1, 23, 2, -8, 5]

// Sub Arrays            SubSum    SubProduct         |q|
// [23, 2, -8, 5]         22         -1840         83.636363
// [1, 2, -8, 5]           0           -80          No value
// [1, 23, -8, 5]         21          -920         43.809524
// [1, 23, 2, 5]          31           230          7.419355  <--- selected array
// [1, 23, 2, -8]         18           368         20.444444
// Сравним данный массив с выбранным подмассивом:
// [1, 23, 2, -8, 5]
// [1, 23, 2,     5]
// Разница между ними заключается в индексе 3для данного массива с элементом -8, поэтому мы ставим обе вещи для результата [3, -8].
// Это означает, что для получения выбранного подмассива мы должны вынуть значение -8 в индексе 3. Нам нужна функция, которая получает массив в качестве аргумента и выводит пару [index, arr[index]], которая генерирует подмассив с наименьшим значением |q|.
// select_subarray([1, 23, 2, -8, 5]) == [3, -8]
// Другой случай:
// select_subarray([1, 3, 23, 4, 2, -8, 5, 18]) == [2, 23]

function selectSubarray(arr) {
  const res = [];
  for (let i = 1; i <= arr.length; i++) {
    let a = arr.slice(0 + i, arr.length);
    a.unshift(...arr.slice(0, i - 1));
    console.log(i, a);
    res.push(
      Math.abs(
        a.reduce((acc, val) => acc * val) / a.reduce((acc, val) => acc + val)
      )
    );
    console.log(res);
  }
  return [res.indexOf(Math.min(...res)), arr[res.indexOf(Math.min(...res))]];
  console.log();
}

console.log(selectSubarray([1, 23, 2, -8, 5]));

////////////////////////////////////////                      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Завершите решение, чтобы функция разбивала верблюжий регистр, используя пробелы между словами.
// Пример
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// function solutions(string) {
//   const capitalArr = string.match(/[A-Z]/g);
//   const letterArr = string.split(/[A-Z]/g);
//   console.log(letterArr, capitalArr);

//   return letterArr.reduce(
//     (acc, s, i) => (i = 0 ? acc + `${s}` : acc + ` ${capitalArr.shift()}${s}`)
//   );
// }
/////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\
function solutions(string) {
  return string.replace(/([A-Z])/g, ' $1');
}

console.log(solutions('camelCaSe'));

///////////////////////////////////                   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Задача о максимальной сумме подмассива состоит в нахождении максимальной суммы непрерывной подпоследовательности в массиве или списке целых чисел:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Простой случай — это когда список состоит только из положительных чисел, а максимальная сумма — это сумма всего массива. Если список состоит только из отрицательных чисел, вместо этого верните 0.
// Пустой список считается имеющим нулевую наибольшую сумму. Обратите внимание, что пустой список или массив также является допустимым подсписком/подмассивом.
///////////  codewars  \\\\\\\\\\\\\\\\
const maxSequence = function (arr) {
  let currentSum = 0;
  return arr.reduce((maxSum, number) => {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};

// var maxSequence = function (arr) {
//   var min = 0,
//     ans = 0,
//     i,
//     sum = 0;
//   for (i = 0; i < arr.length; ++i) {
//     sum += arr[i];
//     min = Math.min(sum, min);
//     ans = Math.max(ans, sum - min);
//   }
//   return ans;
// };

console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ])
);

//////////////////////            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// В этой ката вы должны, учитывая строку, заменить каждую букву ее позицией в алфавите.
// Если что-то в тексте не является буквой, игнорируйте это и не возвращайте.
// "a" = 1, "b" = 2, и т.д.
// Пример
// alphabetPosition("The sunset sets at twelve o' clock.")
// Должен возвращаться "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(в виде строки)

function alphabetPosition(text) {
  const arrOfAlphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return text
    .toLowerCase()
    .split('')
    .map(val =>
      arrOfAlphabet.indexOf(val) !== -1
        ? `${arrOfAlphabet.indexOf(val) + 1} `
        : ''
    )
    .join('');
  // .replace(/\s[0]/g, '');
}

/////////////////////  codewars  \\\\\\\\\\\\\\\\\\\
// function alphabetPosition(text) {
//   return text
//     .toUpperCase()
//     .match(/[a-z]/gi)
//     .map(c => c.charCodeAt() - 64)
//     .join(' ');
// }
console.log(alphabetPosition("The sunset sets at twelve o' clock."));

//////////////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Однажды, на пути через старый дикий горный запад,…
// …человеку дали указание пройти из одной точки в другую. Направления были «СЕВЕР», «ЮГ», «ЗАПАД», «ВОСТОК». Ясно, что "СЕВЕР" и "ЮГ" противоположны, "ЗАПАД" и "ВОСТОК" тоже.
// Идти в одном направлении и сразу же возвращаться в противоположном направлении — бесполезное усилие. Поскольку это дикий запад, с ужасной погодой и небольшим количеством воды, важно экономить силы, иначе вы можете умереть от жажды!
// Как я ловко пересек горную пустыню.
// Указания, данные мужчине, например, следующие (в зависимости от языка):
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
// or
// { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
// or
// [North, South, South, East, West, North, West]
// Сразу видно, что идти "НА СЕВЕР" и сразу "ЮГ" нецелесообразно, лучше оставайтесь на том же месте! Итак, задача состоит в том, чтобы дать человеку упрощённый вариант плана. Лучший план в этом случае просто:
// ["WEST"]
// or
// { "WEST" }
// or
// [West]
// Другие примеры:
// В ["NORTH", "SOUTH", "EAST", "WEST"], направление идет на север и сразу же"NORTH" + "SOUTH" возвращается .
// Путь становится ["EAST", "WEST"], теперь "EAST"и "WEST"уничтожают друг друга, поэтому конечный результат [](ноль в Clojure).
// В ["СЕВЕР", "ВОСТОК", "ЗАПАД", "ЮГ", "ЗАПАД", "ЗАПАД"] "СЕВЕР" и "ЮГ" не являются прямо противоположными, но они становятся прямо противоположными после сокращения "ВОСТОК" и "ЗАПАД", поэтому весь путь можно свести к ["ЗАПАД", "ЗАПАД"].
// Задача
// Напишите функцию dirReduc, которая будет принимать массив строк и возвращать массив строк с удаленными ненужными направлениями (W<->E или S<->N рядом ).
// Версия Haskell принимает список направлений с расширением data Direction = North | East | West | South.
// Версия Clojure возвращает nil, когда путь сводится к нулю.
// Версия Rust занимает часть enum Direction {North, East, West, South}.
// Дополнительные примеры см. в разделе «Примеры тестов».
// Заметки
// Не все пути можно сделать проще. Путь ["СЕВЕР", "ЗАПАД", "ЮГ", "ВОСТОК"] не сводим. «СЕВЕР» и «ЗАПАД», «ЗАПАД» и «ЮГ», «ЮГ» и «ВОСТОК» не являются прямо противоположными друг другу и не могут стать таковыми. Следовательно, путь результата сам по себе: ["СЕВЕР", "ЗАПАД", "ЮГ", "ВОСТОК"].

////////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function dirReduc(plan) {
  var opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}
console.log(
  dirReduc(
    // ['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']
    ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']
    // ,['WEST']
  )
);

/////////////////////////////////////                         \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Хорошо познакомился со старшим братом Фибоначчи, также известным как Трибоначчи.
// Как уже видно из названия, он работает в основном как Фибоначчи, но суммирует последние 3 (вместо 2) чисел последовательности для генерации следующего. И, что еще хуже, к сожалению, я не услышу, как его произносят не носители итальянского языка :(
// Итак, если мы хотим начать нашу последовательность Трибоначчи [1, 1, 1]в качестве начального ввода ( подпись AKA ), у нас есть эта последовательность:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// Но что, если мы начали с [0, 0, 1]подписи? Поскольку, начиная с [0, 1]вместо [1, 1]основного сдвига обычной последовательности Фибоначчи на одну позицию, у вас может возникнуть соблазн подумать, что мы получим ту же самую последовательность, сдвинутую на 2 позиции, но это не так, и мы получим:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Что ж, вы, возможно, уже догадались об этом, но для ясности: вам нужно создать функцию Фибоначчи, которая по заданному массиву/списку сигнатур возвращает первые n элементов — сигнатуру, включенную в последовательность, заполненную таким образом.
// Подпись всегда будет содержать 3 цифры; n всегда будет неотрицательным числом; если n == 0, то верните пустой массив (за исключением C, возвращающего NULL) и будьте готовы ко всему, что не указано явно;)

function tribonacci(signature, n) {
  const res = [];
  for (let i = 0; i < n; i += 1) {
    i < 3
      ? res.push(signature[i])
      : res.push(res[i - 3] + res[i - 2] + res[i - 1]);
  }
  return res;
}
console.log(tribonacci([1, 2, 3], 10));

///////////////////////////////////                        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Строка считается заглавной, если каждое слово в строке либо (а) написано заглавной буквой (то есть только первая буква слова в верхнем регистре), либо (б) считается исключением и полностью помещается в строчными буквами, если только это не первое слово, которое всегда пишется с большой буквы.
// Напишите функцию, которая преобразует строку в заглавный регистр, учитывая необязательный список исключений (второстепенные слова). Список второстепенных слов будет представлен в виде строки, где каждое слово отделено пробелом. Ваша функция должна игнорировать регистр строки второстепенных слов — она должна вести себя так же, даже если регистр строки второстепенных слов изменен.
// ###Аргументы (другие языки)
// Первый аргумент (обязательный) : исходная строка для преобразования.
// Второй аргумент (необязательный) : список второстепенных слов, разделенных пробелами, которые всегда должны быть в нижнем регистре, за исключением первого слова в строке. Тесты JavaScript/CoffeeScript будут пройдены, undefinedесли этот аргумент не используется.
// ###Пример
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Br

function titleCase(title, minorWords) {
  if (!minorWords) minorWords = 'w';
  return !title
    ? title
    : title
        .toLowerCase()
        .split(' ')
        .map((el, i) =>
          minorWords.toLowerCase().split(' ').includes(el) && i !== 0
            ? el
            : el[0].toUpperCase() + el.slice(1)
        )
        .join(' ');
}
titleCase('aBC deF Ghi');
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('aBC deF Ghi'));

///////////////////////////////////////////                          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Ваша задача — отсортировать заданную строку. Каждое слово в строке будет содержать одно число. Это число и есть позиция, которую должно занимать слово в результате.
// Примечание. Цифры могут быть от 1 до 9. Таким образом, первым словом будет 1 (а не 0).
// Если входная строка пуста, вернуть пустую строку. Слова во входной строке будут содержать только допустимые последовательные числа.
// Примеры
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//     return !words
//     ? ''
//     : words
//         .split(' ')
//         .map((_, i) => words.split(' ').find(el => el.includes(`${i + 1}`)))
//         .join(' ');
// }
///////////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\
function order(words) {
  return words
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');
}
console.log(order('is2 Thi1s T4est 3a'));

//////////////////////////////////////         5kyu         \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Ваша задача — написать функцию, которая увеличивает строку, чтобы создать новую строку.
// Если строка уже заканчивается числом, число должно быть увеличено на 1.
// Если строка не заканчивается цифрой. число 1 должно быть добавлено к новой строке.
// Примеры:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100
// Внимание: Если в числе есть ведущие нули, следует учитывать количество цифр.

// function incrementString(strng) {
//   const d = strng.match(/\d+/);
//   if (d) {
//     let f = `${parseInt(d[0]) + 1}`.padStart(d[0].length, '0');
//     return strng.slice(0, d['index']) + f;
//   } else {
//     return strng + '1';
//   }
// return strng.match(/\d+/)
//   ? strng.slice(0, strng.match(/\d+/)['index']) +
//       `${parseInt(strng.match(/\d+/)[0]) + 1}`.padStart(
//         strng.match(/\d+/)[0].length,
//         '0'
//       )
//   : strng + '1';
// }

////////////////////   codewars   \\\\\\\\\\\\\\\\\\\\\\\\\
let incrementString = str =>
  str.replace(/([0-8]|\d?9+)?$/, e => (e ? +e + 1 : 1));

console.log('drf009'.match(/([0-8]|\d?9+)?$/));
console.log('dfr034'.match(/(0*)([0-9]+$)/));
console.log('dfr034'.match(/[\d]*$/));
console.log(incrementString('dfr01'));

///////////////////////////////////////                       \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Определите функцию, которая принимает целочисленный аргумент и возвращает логическое значение trueили falseв зависимости от того, является ли целое число простым.
// Согласно Википедии, простое число (или простое число) — это натуральное число, большее, чем 1не имеющее положительных делителей, кроме 1самого себя.
// Требования
// Вы можете предположить, что вам будет предоставлен целочисленный ввод.
// Нельзя предполагать, что целое число будет только положительным. Вам также могут быть даны отрицательные числа ( или 0).
// ПРИМЕЧАНИЕ о производительности : никаких сложных оптимизаций не требуется, но даже самые тривиальные решения могут истечь. Числа доходят до 2^31 (или около того, в зависимости от языка). Цикл до n, или n/2, будет слишком медленным.
// Пример
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

function isPrime(num) {
  if (num === 1 || num === 2 || num === 3 || num === 5 || num === 7) {
    return true;
  } else if (num <= 0 || num === 1) {
    return false;
  } else if (num % 5 === 0 || num % 3 === 0 || num % 7 === 0 || num % 2 === 0) {
    return false;
  } else {
    for (let i = 3; i < num / 3; i += 2) {
      if (num % i === 0) {
        return i;
      }
    }
  }
  return true;
}
//   for (let i = 2; i < num / 2; i += 1) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// const num = 75;
// console.log(num % 5 === 0 || num % 3 === 0 || num % 7 === 0 || num % 2 === 0);
console.log(isPrime(472003471));

/////////////////////////////////////////                     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// На этот раз мы хотим написать вычисления с использованием функций и получить результаты. Давайте посмотрим на некоторые примеры:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Требования:
// Должна быть функция для каждого числа от 0 ("ноль") до 9 ("девять")
// Должна быть функция для каждой из следующих математических операций: плюс, минус, умножить, разделить на
// Каждое вычисление состоит ровно из одной операции и двух чисел
// Самая внешняя функция представляет левый операнд, самая внутренняя функция представляет правый операнд.
// Деление должно быть целочисленным . Например, это должно возвращать 2, а не 2.666666...:
// eight(dividedBy(three()));
// function zero() {
//   return 0;
// }
// function one() {
//   return 1;
// }
// function two() {
//   return 2;
// }
// function three() {
//   return 3;
// }
// function four(fn = () => fm) {
//   console.log(4, fn);
//   return 4;
// }
// function five() {
//   return 5;
// }
// function six() {
//   return 6;
// }
// function seven() {
//   return 7;
// }
// function eight() {
//   console.log(8);
//   return 8;
// }
// function nine(fn = fm => {}) {
//   console.log(9, fn);
//   return 9;
// }

// function plus(fn = fm => {}) {
//   // return fn;
//   console.log('+', fn);
//   return '+';
// }
// function minus() {
//   return '-';
// }
// function times() {
//   return '*';
// }
// function dividedBy() {
//   return '/';
// }
//////////////////  codewars  \\\\\\\\\\\\\\\\\\\\
// var n = function (digit) {
//   return function (op) {
//     return op ? op(digit) : digit;
//   };
// };
// var zero = n(0);
// var one = n(1);
// var two = n(2);
// var three = n(3);
// var four = n(4);
// var five = n(5);
// var six = n(6);
// var seven = n(7);
// var eight = n(8);
// var nine = n(9);

// function plus(r) {
//   return function (l) {
//     return l + r;
//   };
// }
// function minus(r) {
//   return function (l) {
//     return l - r;
//   };
// }
// function times(r) {
//   return function (l) {
//     return l * r;
//   };
// }
// function dividedBy(r) {
//   return function (l) {
//     return l / r;
//   };
// }
/////////////////////////////////////   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
function zero(operator) {
  return operator ? operator(0) : 0;
}

function one(operator) {
  return operator ? operator(1) : 1;
}

function two(operator) {
  return operator ? operator(2) : 2;
}

function three(operator) {
  return operator ? operator(3) : 3;
}

function four(operator) {
  return operator ? operator(4) : 4;
}

function five(operator) {
  return operator ? operator(5) : 5;
}

function six(operator) {
  return operator ? operator(6) : 6;
}

function seven(operator) {
  return operator ? operator(7) : 7;
}
function eight(operator) {
  return operator ? operator(8) : 8;
}

function nine(operator) {
  return operator ? operator(9) : 9;
}

function plus(rightVal) {
  return function (leftVal) {
    return leftVal + rightVal;
  };
}

function minus(rightVal) {
  return function (leftVal) {
    return leftVal - rightVal;
  };
}

function times(rightVal) {
  return function (leftVal) {
    return leftVal * rightVal;
  };
}

function dividedBy(rightVal) {
  return function (leftVal) {
    return leftVal / rightVal;
  };
}

console.log(four(plus(nine())));

///////////////////////////////////////////////                  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ROT13 — это простой шифр с заменой букв, который заменяет букву буквой через 13 букв после нее в алфавите. ROT13 является примером шифра Цезаря.
// Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. Если в строку включены числа или специальные символы, они должны быть возвращены как есть. Сдвинуты должны быть только буквы латинского/английского алфавита, как в оригинальной "реализации" Rot13.

function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm';
  // console.log(alphabet.length);
  return message
    .split('')
    .map(el =>
      el.toUpperCase() === el && el.match(/[A-Z]/)
        ? alphabet[alphabet.indexOf(el.toLowerCase()) + 13].toUpperCase()
        : alphabet.indexOf(el.toLowerCase()) !== -1
        ? alphabet[alphabet.indexOf(el.toLowerCase()) + 13]
        : el
    )
    .join('');
}
/////////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function rot13(message) {
//   var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
//   return message.replace(/[a-z]/gi, c => b[a.indexOf(c)]);
// }

// const rot13 = str =>
//   str.replace(/[a-z]/gi, letter =>
//     String.fromCharCode(
//       letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)
//     )
//   );

console.log(rot13('T56estE/;sZ'));

//////////////////////////////////////////////////////   4kuy   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Цель состоит в том, чтобы подсчитать количество слов, символов и строк в текстовом блоке. [В значительной степени похоже на wcкоманду].
// Заполните метод синтаксического анализа, чтобы 3 счетчика (wordCount, charCount и lineCount) были правильно установлены в объекте DocumentParser.
// Помощник
// Чтобы обрабатывать большие блоки текста, вы не получаете никаких строк в конструкторе или в методе синтаксического анализа.
// Вместо этого вы получаете Readerэкземпляр в качестве параметра вашего DocumentParserконструктора.
// Этот читатель предоставляет только один метод: getChunk()
// Возвращает следующий фрагмент текста из файла, который он читает
// Возвращает строку случайного размера
// Возвращает хотя бы один символ
// Возвращает пустую строку по завершении
// Ограничения
// Вы должны вызывать getChunk столько раз, сколько необходимо для полного чтения файла.
// Вы не можете конкатенировать вызовы getChunk: для имитации ограниченного объема памяти каждый фрагмент должен анализироваться отдельно.
// Регулярные выражения не допускаются.
// Техническое примечание: это для имитации обработки любого типа файлов, особенно больших файлов, которые не помещаются в память.
// Границы слов
// Что такое слово? Будь проще :
// Слова разделяются одним или несколькими пробелами, примеры:
// "Привет мир" это 2 слова
// "Привет мир" это 2 слова
// "свекровь" - это 1 слово
// Строки разделяются "\n"
// "Привет\nмир" состоит из 2 слов
// "Hello World.\nBraaaiiiiiiinnnnsss" состоит из 3 слов.
// Управляющий символ \n следует игнорировать при подсчете символов.
// Знаки препинания расположены правильно: не нужно разбирать знаки препинания
// Примеры
// "Hello World"
// Символов: 11
// Слов: 2
// Линии: 1
// "Is it me, or you?"
// Символов: 17
// Слов: 5
// Линии: 1
// "You can try, but you'll never catch me.\nBazinga!"
// Символов: 47
// Слов: 9 (вы = 1 слово)
// Линии: 2

function DocumentParser(reader) {
  this.reader = reader;
  this.reset();
  this.parse();
}

DocumentParser.prototype.reset = function () {
  this.wordCount = 0;
  this.charCount = 0;
  this.lineCount = 0;
};

DocumentParser.prototype.parse = function () {};

////////////////////////////////////////////// 5kyu \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Когда мы бросаем 2 классических кубика (значения на каждой стороне от 1 до 6), мы получаем 36 (6 * 6) различных результатов.
// Мы хотим знать вероятность того, что сумма результатов будет равна 11. Для этого результата у нас есть только комбинация 6и 5. Итак, у нас будет два события: {5, 6} и {6, 5}.
// Таким образом, вероятность этого результата будет:
// P(11, 2) = 2/(6*6) = 1/18    (The two is because we have 2 dice)
// Теперь мы хотим вычислить вероятность того, что сумма будет равна 8. Комбинации для этого результата будут следующими: {4,4}, {3,5}, {5,3}, {2,6}, {6,2}всего пять комбинаций.
// P(8, 2) = 5/36
// Все может быть сложнее, если у нас будет больше кубиков и значения суммы выше.
// Мы хотим знать вероятность того, что сумма равна, 8но есть 3кости.
// Теперь комбинации и соответствующие события:
// {2,3,3}, {3,2,3}, {3,3,2}
// {2,2,4}, {2,4,2}, {4,2,2}
// {1,3,4}, {1,4,3}, {3,1,4}, {4,1,3}, {3,4,1}, {4,3,1}
// {1,2,5}, {1,5,2}, {2,1,5}, {5,1,2}, {2,5,1}, {5,2,1}
// {1,1,6}, {1,6,1}, {6,1,1}
// A total amount of 21 different combinations
// So the probability is:
// P(8, 3) = 21/(6*6*6) = 0.09722222222222222
// Суммируя случаи, которые мы видели с функцией, которая получает два аргумента
// rolldice_sum_prob(11, 2) == 0.0555555555 # or 1/18
// rolldice_sum_prob(8, 2) ==  0.13888888889# or 5/36
// rolldice_sum_prob(8, 3) == 0.0972222222222  # or 7/72
// И подумайте, почему у нас такой результат:
// rolldice_sum_prob(22, 3) == 0
// Создайте функцию rolldice_sum_prob()для этого вычисления.
// Желаем приятно провести время!
// (Результаты округлять не нужно)

///////////////////////////////////                  ////////////////////////////          //////////////////////////
// function main() {
//   const c_int_side_dice = 6; // сколько граней у кубика
//   const c_int_dice_number = 6; // кол-во кубиков
//   const c_int_number_to_find = 18; // число, вероятность выпадения которого хотим найти
//   let probability = dice_probability(
//     c_int_dice_number,
//     c_int_number_to_find,
//     c_int_side_dice
//   );
//   console.log(probability);
// }

// // собственно поиск вероятности определённого значения
// function dice_probability(
//   int_dice_number,
//   int_number_to_find,
//   c_int_side_dice
// ) {
//   let lists_val_and_prob = list_values_and_interm_probabilities(
//     int_dice_number,
//     c_int_side_dice
//   );
//   let result_out;
//   if (
//     int_number_to_find < lists_val_and_prob[0][0] ||
//     int_number_to_find > lists_val_and_prob[0][lists_val_and_prob[0].length - 1]
//   ) {
//     // задаваемое число выходит за рамки реально возможного диапазона значений
//     result_out = 0.0;
//   } else {
//     for (let i = 0; i < lists_val_and_prob[0].length; i++) {
//       if (lists_val_and_prob[0][i] == int_number_to_find) {
//         result_out =
//           lists_val_and_prob[1][i] / Math.pow(c_int_side_dice, int_dice_number);
//         break;
//       }
//     }
//   }
//   return result_out;
// }

// // возвращает списки/массивы: значения (сумма выпавших всех значений кубиков), сколько раз встречается значение
// function list_values_and_interm_probabilities(
//   int_dice_number,
//   c_int_side_dice
// ) {
//   // [кол-во кубиков], [сколько граней у кубика]
//   let list_values = new Array();
//   let i = 0;
//   for (let j = int_dice_number; j <= c_int_side_dice * int_dice_number; j++) {
//     list_values[i] = j;
//     i++;
//   }
//   console.log(list_values);
//   let list_interm_probability = Array(c_int_side_dice).fill(1); // [1, 1, 1, 1, 1, 1]
//   for (let i = 0; i < int_dice_number - 1; i++) {
//     list_interm_probability = multiply_by_ones(
//       list_interm_probability,
//       c_int_side_dice
//     );
//   }
//   console.log(list_interm_probability);
//   return [list_values, list_interm_probability];
// }

// // "умножение" на единицы
// function multiply_by_ones(list_in, c_int_side_dice) {
//   let list_dummy = new Array(c_int_side_dice);
//   for (let j = 0; j < c_int_side_dice; j++) {
//     list_dummy[j] = Array(j).fill(0);
//   }
//   let list_for_sum = new Array(c_int_side_dice);
//   for (let j = 0; j < c_int_side_dice; j++) {
//     list_for_sum[j] = list_dummy[j].concat(
//       list_in,
//       list_dummy[c_int_side_dice - j - 1]
//     );
//   }
//   // [list_in, 0, 0, 0, 0, 0]
//   // [0, list_in, 0, 0, 0, 0]
//   // [0, 0, list_in, 0, 0, 0]
//   // [0, 0, 0, list_in, 0, 0]
//   // [0, 0, 0, 0, list_in, 0]
//   // [0, 0, 0, 0, 0, list_in]

//   let list_out = new Array();
//   for (let i = 0; i < list_for_sum[0].length; i++) {
//     let sum_out = 0;
//     for (let j = 0; j < c_int_side_dice; j++) {
//       sum_out += list_for_sum[j][i];
//     }
//     list_out[i] = sum_out;
//   }
//   // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
//   return list_out;
// }

// main();

//////////  нахождение делимого вероятности выпадения при помощи многократной свёртки последовательности [1 1 1 1 1 1] на саму себя  \\\\\\\\\\\\\\\\
// function main() {
//   // const6 = 6; // сколько граней у кубика
//   const c_dice = 3; // кол-во кубиков
//   const c_sum = 11; // число, вероятность выпадения которого хотим найти
//   let probability = dice_probability(c_dice, c_sum);
//   console.log(probability);
// }
// собственно поиск вероятности определённого значения
// function rolldiceSumProby(sum, dice) {
//   let valueLists = valueList(dice);
//   let result;
//   if (sum < valueLists[0][0] || sum > valueLists[0][valueLists[0].length - 1]) {
//     // задаваемое число выходит за рамки реально возможного диапазона значений
//     result = 0.0;
//   } else {
//     for (let i = 0; i < valueLists[0].length; i++) {
//       if (valueLists[0][i] == sum) {
//         result = valueLists[1][i] / 6 ** dice;
//         break;
//       }
//     }
//   }
//   function valueList(dice) {
//     let listOfValues = new Array();
//     let i = 0;
//     for (let j = dice; j <= 6 * dice; j++) {
//       listOfValues[i] = j;
//       i++;
//     }
//     console.log(listOfValues);
//     let possibleSumList = Array(6).fill(1); // [1, 1, 1, 1, 1, 1]
//     for (let i = 0; i < dice - 1; i++) {
//       possibleSumList = multiplyByOnes(possibleSumList);
//     }
//     console.log(possibleSumList);
//     return [listOfValues, possibleSumList];
//   }
//   function multiplyByOnes(listIn) {
//     let arr = new Array(6);
//     // console.log(arr);
//     for (let j = 0; j < 6; j++) {
//       arr[j] = Array(j).fill(0);
//     }
//     let listForSum = new Array(6);
//     for (let j = 0; j < 6; j++) {
//       listForSum[j] = arr[j].concat(listIn, arr[6 - j - 1]);
//     }
//     console.log(listForSum);
//     // [listIn, 0, 0, 0, 0, 0]
//     // [0, listIn, 0, 0, 0, 0]
//     // [0, 0, listIn, 0, 0, 0]
//     // [0, 0, 0, listIn, 0, 0]
//     // [0, 0, 0, 0, listIn, 0]
//     // [0, 0, 0, 0, 0, listIn]

//     let listOut = new Array();
//     for (let i = 0; i < listForSum[0].length; i++) {
//       let sumOut = 0;
//       for (let j = 0; j < 6; j++) {
//         sumOut += listForSum[j][i];
//       }
//       listOut[i] = sumOut;
//     }
//     // [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1]
//     return listOut;
//   }

//   return result;
// }

//////////////////////  codewars  \\\\\\\\\\\\\\\\\\\\\\\\\\\\
// function rolldiceSumProb(arr, totalSides) {
//   if (arr < totalSides || arr > totalSides * 6) return 0;
//   if (totalSides === 0) return 1;
//   let p = 0;
//   for (let i = 1; i <= 6; i++) p += rolldiceSumProb(arr - i, totalSides - 1);
//   return p / 6;
// }

//////////////////    \\\\\\\\\\\\\\\\\\\\\\\\\
function rolldiceSumProb(n, dices) {
  let combinations = 0;
  function recur(lvl = 1, sum = 0) {
    for (let i = 1; i <= 6; i++) {
      if (lvl < dices) recur(lvl + 1, sum + i);
      else if (sum + i === n) combinations++;
    }
  }
  recur();
  return combinations / 6 ** dices;
}
console.log(rolldiceSumProb(7, 2));
