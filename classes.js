// ES6 Classes 

class Car {
	constructor(name, model, year, baseCost, upgradeCost) {
    this.model = model,
    this.year = year,
    this.baseCost = baseCost,
    this.upgradeCost = upgradeCost
  }
  total() {
    return this.baseCost + this.upgradeCost;   
  }
};

const ryansCar = new Car("Volkswagen", "Four Door", 2007, 10000, 2000);
const total = ryansCar.total(); // 12,000 
console.log(total);


// Super extends methods 

class Truck extends Car {
	constructor(name, model, year, baseCost, upgradeCost) {
		super(name, model, year, baseCost, upgradeCost);
  }
  noDiscount() {
    return this.baseCost - 5000;
  }
};

const ryansTruck = new Truck("Ford", "Lifted", 2010, 8000, 1000);
const truckTotal = ryansTruck.total();
console.log(truckTotal);

const noDisc = ryansTruck.noDiscount();
alert(noDisc);









