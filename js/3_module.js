const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],

  // Change code below this line
  getPotions() {
    return this.potions;
  },

  // addPotion(newPotion) {
  //   for (let potion of this.potions) {
  //     console.log(potion.name, '-', newPotion.name);
  //     if (potion.name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }
  //   }
  //   this.potions.push(newPotion);
  // },

  // removePotion(potionName) {
  //   const arr = [];
  //   for (let potion of this.potions) {
  //     arr.push(potion.name);
  //   }
  //   if (arr.includes(potionName)) {
  //     const indexPotion = arr.indexOf(potionName);
  //     this.potions.splice(indexPotion, 1);
  //   } else {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   //   if (potion.name !== potionName) {
  //   //     index = -1;
  //   //   }
  //   //   break;
  //   // }

  //   // return `Potion ${potionName} is not in inventory!`;

  //   // this.potions.splice(indexPotion, 1);
  // },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      console.log(this.potions[i].name, '-', potionName);

      if (this.potions[i].name === potionName) {
        this.potions.splice(i, 1);
        break;
      }
      console.log(this.potions);
      return `Potion ${potionName} is not in inventory!`;
    }
  },

  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // // Change code above this line

  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      console.log(potion);
      console.log(potion.name, '-', oldName);
      if (potion.name === oldName) {
        return (potion.name = newName);
      }
    }
    console.log(this.potions);
    return `Potion ${oldName} is not in inventory!`;
  },
};

console.log(atTheOldToad.getPotions());

console.log(atTheOldToad.removePotion('Dragon breath'));

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
