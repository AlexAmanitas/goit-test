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

const sendMessage = message => {
  console.log(message);
  const phone = new Map([
    ['1', ['.', ',', '?', '!']],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
    ['*', ["'", '-', '+', '=']],
    ['0', [' ']],
    // ['#', []],
  ]);

  const letterrArr = [];
  const repeatArr = [];
  message
    .toLowerCase()
    .split('')
    .map(x => {
      phone.forEach((value, key) => {
        // console.log('key', key, 'value', value);

        if (value.includes(x)) {
          letterrArr.push(key);
          repeatArr.push(value.indexOf(x) + 1);
          console.log('//////////////', key, value.indexOf(x) + 1);
          return letterrArr, repeatArr;
        }
      });
    });
  let message1 = '';
  console.log(letterrArr, repeatArr);
  message.split('').map((str, ind) => {
    if (str.toLowerCase() !== str) {
      message1 += `#${letterrArr[ind].repeat(repeatArr[ind])}#`;
    } else {
      message1 += `${letterrArr[ind].repeat(repeatArr[ind])}`;
    }
  });
  return message1;
};
console.log(sendMessage('one two three'));
