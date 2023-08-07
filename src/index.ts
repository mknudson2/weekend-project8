import { v4  as uuidv4 } from 'uuid'

class Shop {
  inventory: Item[];

  constructor() {
    this.inventory = [];
  }

  stockInventory(item: Item): void {
    this.inventory.push(item);
  }
}

class Item {
  id: string;
  name: string;
  price: number;
  description: string;
  quantity: number;

  constructor(name: string, price: number, description: string, quantity: number) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }
}

class User {
  id: string;
  name: string;
  age: number;
  cart: Item[]

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = []
  }

  addToCart(item: Item, quantity: number): void {
    const existingItem = this.cart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
        existingItem.quantity += quantity
    } else this.cart.push({...item, quantity})
  };

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id)
  }

  removeSomeFromCart(item: Item, quantity: number): void {
    let count = quantity
    this.cart = this.cart.filter((cartItem) => {
        if (cartItem.id === item.id){
            if (count > 0){
                count -= quantity
                return false
            }
        }
        return true
    })
  }

  cartTotal():string{
    const totalPrice = this.cart.reduce((total, item)=>total+item.price*item.quantity, 0)
    return `${user.name}'s total price: $${totalPrice}`
    // return totalPrice
  }

  printCart(): void {
    console.log(`${this.name}'s Shopping Cart: `)
    this.cart.forEach((item)=>{
        console.log(`${item.name} (Quantity: ${item.quantity}, Price: $${item.price*item.quantity})\n`)
        
    })
  }

}

const shop = new Shop();

const itemA = new Item("Hylian Shield", 50, 'a sturdy shield to keep you alive a little longer out there', 1);
const itemB = new Item("Tunic of Memories", 25, 'a fantastic blue tunic that perfect post-resurrection', 1);
const itemC = new Item("Majora's Mask", 100000, 'a strange mask that exudes a palpable aura of mystery and ...power, almost as if it is calling out to you', 1);
const itemD = new Item("Extravagent Saddle", 75, 'To make your ride a bit more upperclass', 1);
const itemE = new Item("Snowquill Tunic", 30, 'A cozy top made of the finest Rito feathers', 1);
const itemF = new Item("Archaic Legwear", 15, 'When a breeze is all you need', 1);
const itemG = new Item("Boko Bow", 15, 'A simple, but efficient tool at keeping distance between yourself and, well, anyone else', 1);
const itemH = new Item("Majora's Mask", 100000, 'A classic tunic made of the finest wolfhair', 1);

shop.stockInventory(itemA);
shop.stockInventory(itemB);
shop.stockInventory(itemC);
shop.stockInventory(itemD);
shop.stockInventory(itemE);
shop.stockInventory(itemF);
shop.stockInventory(itemG);
shop.stockInventory(itemH);
console.log(shop.inventory);

const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', ()=> {
    const nameInput = document.getElementById('nameInput') as HTMLInputElement;
    const ageInput = document.getElementById('ageInput') as HTMLInputElement;

    if (nameInput && ageInput){
        const name = nameInput.value;
        const age = parseInt(ageInput.value, 10);

        const user = new User(name, age);
        console.log(user);
    }
})

/* const addToCartBtns = document.querySelectorAll('.item-btn');

addToCartBtns.forEach((button)=> {
    button.addEventListener('click', (e)=> {
        const itemId = e.target.getAttribute('data-id');
        const item = shop.inventory.find((inventoryItem) => inventoryItem.id === itemId);

        if (item) {
            user.addToCart(item, 1);
            updateUserCartDisplay()
        }
    });
});


function updateUserCartDisplay() {
  const cartContainer = document.getElementById('user-cart');
  const totalElement = document.querySelector('.offcanvas-body h6');

  cartContainer.innerHTML = '';
  user.cart.forEach((item) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>
        <button class="btn btn-sm btn-primary remove-one" data-id="${item.id}">-</button>
        ${item.quantity}
        <button class="btn btn-sm btn-primary add-one" data-id="${item.id}">+</button>
      </td>
      <td>$${item.price * item.quantity}</td>
    `;
    cartContainer.appendChild(row);
    
    const removeOneButton = row.querySelector('.remove-one');
    removeOneButton.addEventListener('click', () => {
      user.removeSomeFromCart(item, 1);
      updateUserCartDisplay();
    });

    const addOneButton = row.querySelector('.add-one');
    addOneButton.addEventListener('click', () => {
      user.addToCart(item, 1);
      updateUserCartDisplay();
    });
  });

  const totalPrice = user.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  totalElement.textContent = `Total: $${totalPrice}`;
}
 */
  

// const user = new User("Link", 20);

// user.addToCart(itemA, 2);
// user.addToCart(itemB, 5);
// user.addToCart(itemC, 3);
// user.addToCart(itemD,1);

// console.log(user.printCart());
// console.log(user.cartTotal());


// console.log('')
// console.log('/////////////////////////////////////////////////////////')
// console.log('///////////////////// AFTER REMOVING ////////////////////')
// console.log('/////////////////////////////////////////////////////////')
// console.log('')



// user.removeFromCart(itemA);
// console.log(user.printCart());
// console.log(user.cartTotal());

// console.log('')
// console.log('/////////////////////////////////////////////////////////')
// console.log('///////////////////// AFTER REMOVING ////////////////////')
// console.log('/////////////////////////////////////////////////////////')
// console.log('')

// user.removeFromCart(itemD);
// console.log(user.printCart());
// console.log(user.cartTotal());

