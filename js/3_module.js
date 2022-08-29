// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;
//     for (let potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (potions[i].name === potionName) {
//         potions.splice(i, 1);
//         return;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         return (potion.name = newName);
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log('get', atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion('Dragon breath'));

// console.log(
//   'Add Invisibility',
//   atTheOldToad.addPotion({ name: 'Invisibility', price: 620 })
// );

// console.log(
//   'add Dragon breat',
//   atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 })
// );
// console.log(
//   'update',
//   atTheOldToad.updatePotionName('Dragon breath', 'Polymorth')
// );

const user = {
  name: 'Sergey Sokolov',
  balance: 50000000,
  cart: [],
  getInfo() {
    const { name, balance } = this;
    return { name, balance };
  },

  addCart(product) {
    for (const card of this.cart) {
      if (product.item === card.item) {
        card.quantity += 1;
        console.log(product.item === card.item);
        return;
      }
    }
    const newProduct = {
      ...product,
      quantity: 1,
    };
    // console.table(this.cart);

    this.cart.push(newProduct);
  },

  removeCart(product) {
    const { cart } = this;
    let index = 0;
    for (let i = 0; i < cart.length; i++) {
      if (product.item === cart[i].item) {
        index = i;
        if (cart[i].quantity === 1) {
          this.cart.splice(i, 1);
          return;
        }
        cart[i].quantity -= 1;
        console.log(product.item === cart[i].item);
        return;
      }
    }
    this.cart.splice(index, 1);
  },

  totalCart() {
    let total = 0;
    const { cart } = this;
    for (const card of cart) {
      total += card.price * card.quantity;
    }
    console.log(total);
    return total;
  },
};

console.log(user.getInfo());
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya1', price: 258 });
user.addCart({ item: 'huynya2', price: 292 });
user.addCart({ item: 'huynya2', price: 292 });
user.addCart({ item: 'huynya2', price: 292 });
user.addCart({ item: 'huynya2', price: 292 });
user.addCart({ item: 'huynya2', price: 292 });
user.addCart({ item: 'huynya3', price: 462 });
user.addCart({ item: 'huynya3', price: 462 });
user.addCart({ item: 'huynya4', price: 327 });
user.addCart({ item: 'huynya5', price: 158 });
user.addCart({ item: 'huynya5', price: 158 });
console.table(user.cart);

user.removeCart({ item: 'huynya2', price: 292 });
user.removeCart({ item: 'huynya5', price: 158 });
// user.removeCart({ item: 'huynya4', price: 327 });
console.table(user.cart);

console.log(user.totalCart());

const user1 = {
  item1: 'huynya1',
  item2: 'huynya2',
  item3: 'huynya3',
  item4: 'huynya4',
  item5: 'huynya5',
};

const user2 = { ...user1 };
console.log(user2);
console.log(user2 === user1);
console.log(user1);

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Змініть цей рядок
// let result = extractStr.match(codingRegex); // Змініть цей рядок

// console.log(result);
// console.log(codingRegex);

//////////////////////////////////                     \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Знайдіть і вилучіть обидва слова Twinkle з рядка twinkleStar за допомогою регулярного виразу starRegex.

// let twinkleStar = 'Twinkle, twinkle, little star';
// let starRegex = /twinkle/gi; // Змініть цей рядок
// let result = twinkleStar.match(starRegex); // Змініть цей рядок
// console.log(result);

///////////////////////////////////////Використайте клас символів голосних (a, e, i, o, u) у вашому регулярному виразі vowelRegex, щоб знайти усі голосні в рядку quoteSample.
// Примітка: не забудьте вказати голосні як верхнього, так і нижнього регістру.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let quoteSample =
//   'Beware of bugs in the above code; I have only proved it correct, not tried it.';
// let vowelRegex = /[aeiou]/gi; // Змініть цей рядок
// let result = quoteSample.match(vowelRegex); // Змініть цей рядок

/////////////////////Наприклад, /[^aeiou]/gi знайде збіги для всіх символів, що не є голосними. Зверніть увагу, що для таких символів як ., !, [, @, / і пробілів також будуть знайдені збіги: негативна група символів голосних виключає лише символи голосних.

// Створіть один регулярний вираз, що знаходить збіги для всіх символів, крім чисел та голосних. Не забудьте включити відповідні прапорці у регулярному виразі.\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Змініть цей рядок
// let result = quoteSample.match(myRegex); // Змініть цей рядок

let movieName = '2001: A Space Odyssey';
let numRegex = /\d/g; // Змініть цей рядок
let result = movieName.match(numRegex).length;

let movieName1 = '2001: A Space Odyssey';
let numRegex1 = /[s]/gi; // Змініть цей рядок
let result1 = movieName.match(numRegex1).length;
console.log(result);
console.log(result1);

// Обмеження доступних імен користувачів
// Імена користувачів використовуються скрізь в інтернеті. Вони дають користувачам унікальний обліковий запис на їхніх улюблених сайтах.
// Вам потрібно перевірити всі імена користувачів у базі даних. Ось кілька простих правил, яких користувачі повинні дотримуватись при створенні імені користувача.
// Користувачі можуть використовувати лише алфавітно-цифрові символи.
// Числа повинні бути лише в кінці імені користувача. У кінці їх може бути нуль або більше. Ім'я користувача не повинно починатися з числа.
// Літери в імені користувача можуть бути нижнього та верхнього регістру.
// Імена користувачів повинні містити щонайменше два символи. Ім'я користувача з двох символів може містити лише символи літер алфавіту.
// Змініть регулярний вираз userCheck, щоб він відповідав обмеженням, зазначеним вище.

// let username = 'JackOfAllTrades';
// let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Змініть цей рядок
// let result = userCheck.test(username);

//       ^ - start of input
//       [a-z] - first character is a letter
//       [0-9]{2,0} - ends with two or more numbers
//       | - or
//       [a-z]+ - has one or more letters next
//       \d* - and ends with zero or more numbers
//       $ - end of input
//       i - ignore case of input
