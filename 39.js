class Fruits {
  constructor(name, type, cost) {
    this.name = name;
    this.type = type;
    this.cost = cost;
  }
  get calculateCost() {
    return this.cost;
  }
  set calculateCost(cost) {
    if (cost > 100) this.cost = cost;
    else return console.error("fuck u");;
  }
}

const mango = new Fruits("mango", "hybrid", 110);
console.log(mango.calculateCost);
mango.calculateCost = 50;


// class circle {
//     constructor(radius) {
//       this.radius = radius;
//     }
  
//     get radius() {
//       return this.radius;
//     }
  
//     set radius(value) {
//       if (value > 0) console.log( this._radius = value);
//       else console.error("hello aap chuitye h ");
//     }
//   }
  
//   const circles= new circle(5);
  
//   circles.radius=10;
  