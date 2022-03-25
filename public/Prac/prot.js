debugger;

function Product(brand) {
  this.brand = brand;
  this.dataCreated = new Date();
}

Product.prototype.printDetails = function () {
  console.log(`Product brand : ${this.brand}`);
}

Product.prototype.printDetails = function () {
  console.log(`This product was created on ${this.dataCreated.toDateString()}`);
}

console.log("\n===== Product prot =====");

let someObj = new Product('Book');
someObj.printDetails();

function TV (brand, size) {
  Product.call(this, brand);
  this.size = size;
}

TV.prototype = Object.create(Product.prototype);
TV.prototype,printDetails = function () {
  Product.prototype.printDetails.call(this);
  console.log(`TV ${this.size}`);
}

console.log("\n===== TV prot =====");

let SamsungTV = new TV("Samsung", "55 inch");
SamsungTV.printDetails();

let SonyTV = new TV("Sony", "70 inch");
SonyTV.printDetails();
