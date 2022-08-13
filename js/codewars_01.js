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
//     reverseArray.push(word.split('').reverse().join(''));
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
