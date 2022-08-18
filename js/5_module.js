//////////////////////////         3           \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Тестировщики нашли баги в коде сервиса хранения истории заказов еды. Тебе необходимо исправить их, правильно расставив this в методах объекта historyService, чтобы методы начали работать правильно

const historyService = {
  orders: [
    { email: 'jacob@hotmail.com', dish: 'Burrito' },
    { email: 'solomon@topmail.net', dish: 'Burger' },
    { email: 'artemis@coldmail.net', dish: 'Pizza' },
    { email: 'solomon@topmail.net', dish: 'Apple pie' },
    { email: 'jacob@hotmail.com', dish: 'Taco' },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(' - ');
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
};

console.log(historyService.getEmails());
console.log(historyService.getOrdersByEmail());
console.log(historyService.getOrdersLog());
console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
console.log();

///////////////////////////////          7           \\\\\\\\\\\\\\\\\\\\\\
// Добавь классу Car метод constructor который принимает три параметра:

// brand - марка автомобиля.
// model - модель автомобиля.
// price - цена автомобиля.
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, значениями которых должны быть переданные аргументы во время её вызова с оператором new.

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car('Audi', 'Q3', 36000));
// console.log(new Car('Renault', 'Scenic III', 9800));
// console.log(new Car('BMW', 'X5', 58900));
// console.log();

//////////////////////////////////            8             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Выполни рефакторинг класса Car так, чтобы он принимал один параметр - объект со свойсвами brand, model и price. Деструктуризируй объект в сигнатуре (подписи) конструктора.
// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// console.log();
// console.log();
// console.log();

// const value = 'sds';
// function dert(str) {
//   return value.split('').splice(-1, 0, str).join('');
//   // .join('');
// }
// console.log(dert('jg'));
// console.log(value);

///////////////////////////////////            11            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }
  padEnd(str) {
    this.value = `${this.value}${str}`;
  }
  padStart(str) {
    this.value = `${str}${this.value}`;
  }
  padBoth(str) {
    this.value = `${str}${this.value}${str}`;
  }
}

// Change code above this line
const builder = new StringBuilder('.');
console.log('get', builder.getValue()); // "."
builder.padStart('^');
console.log('padStart', builder.getValue()); // "^."
builder.padEnd('^');
console.log('padEnd', builder.getValue()); // "^.^"
builder.padBoth('=');
console.log('padBoth', builder.getValue()); // "=^.^="

////////////////////////////////          17            \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
  static checkPrice(price) {
    return price > Car.#MAX_PRICE
      ? 'Error! Price exceeds the maximum'
      : 'Success! Price is within acceptable limits';
  }
  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

/////////////////////////////////            20             \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel, blacklistedEmails }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  // Change code above this line
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
