//!композиція vs наслідування
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Users extends Array<User>{
//   searchByName(name: string) {
//     return this.filter(u => u.name === name)
//   }
// }
// const u = new Users();
// u.push(new User('Ivan'));
// u.push(new User('Petr'));
// u.push(new User('Ivan'));
// console.log(u);
// console.log(u.length);
// console.log(u.searchByName('Ivan'));
// console.log(u.pop());


// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// class Users {
//   users: User[]
//   push(u: User) {
//     this.users.push(u);
//   }
//   getSize() {
//     return this.users.length;
//   }
//   searchByName(name: string) {
//     return this.users.filter(u => u.name === name)
//   }
//   pop(){
//     this.users.pop();
//   }
// }
// const u = new Users();
// u.push(new User('Ivan'));
// u.push(new User('Petr'));
// u.push(new User('Ivan'));
// console.log(u);
// console.log(u.getSize());
// console.log(u.pop());
// u.foreach();

// class Payment {//додаємо щось ще
//   date: Date
// }
// class User extends Payment {
//   name: string
// }

// class Payment {
//   date: Date
// }
// class User {
//   name: string
// }
// class UserWithPayment {
//   user: User
//   payment: Payment
//   constructor(user: User, payment: Payment){
//     this.user = user;
//     this.payment = payment;
//   }
// }

//!Видимість
// class Hero {
//   public life: number
//   private damage: number
//   protected name: string

//   addDamage(damage: number) {
//     this.damage += damage;
//   }
// }

// const p = new Hero();
// p.life = 100;
// p.addDamage(30);
// // p.damage = 100;
// // p.name = "unknown";

// class Varvar extends Hero {
//   start() {
//     console.log(this.life);
//     // console.log(this.damage);
//     console.log(this.name);
//   }
// }
// const varvar = new Varvar();
// console.log(varvar.name);

// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и параметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи
//  (дата = Сегодня и Id магазина)

class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {

  }
}
class Delivery {
  constructor(
    public date: Date
  ) {

  }
}
class HomeDelivery extends Delivery {
  constructor(date: Date, address: string) {
    super(date)
  }
}
class ShopDelivery extends Delivery {
  constructor(shopId: number) {
    super(new Date())
  }
}
type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = []
  private delivery: DeliveryOptions

  public addProduct(product: Product): void {
    this.products.push(product)
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId)
  }

  public getSum(): number {
    return this.products.reduce((a: number, { price }) => a + price, 0)
  }

  public setDelivery(delivery: DeliveryOptions) {
    this.delivery = delivery;
  }

  public checkout(): boolean {

    // console.log(Boolean([]))                    
    // console.log(Boolean(this.products))

    if (this.products.length !== 0 && this.delivery) {
      return true
    }
    return false
  }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Молоко', 30));
cart.addProduct(new Product(2, 'Творог', 100));
cart.addProduct(new Product(3, 'Курица', 140));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), ''));
console.log(cart.getSum())

console.log(cart.checkout());

// console.log(cart.getSum());
// console.log(cart.checkOut());






