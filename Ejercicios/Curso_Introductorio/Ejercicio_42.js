function Smartphone(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
  }
  
  const smartphone1 = new Smartphone("Samsung", "Galaxy S21", 799);
  const smartphone2 = new Smartphone("Apple", "iPhone 13", 999);
  
  console.log(smartphone1);
  console.log(smartphone2);