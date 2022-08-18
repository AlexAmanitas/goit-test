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
    console.table(this.cart);

    this.cart.push(newProduct);
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
console.table(user.cart);
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
