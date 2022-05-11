function Modifier(nameModifier, price, calories){
    this.name = nameModifier;
    this.price = price;
    this.calories = calories;
}

const SMALL_BURGER = {price: 50, calories: 20};
const MEDIUM_BURGER = {price: 75, calories: 30};
const BIG_BURGER = {price: 100, calories: 20};


function Hamburger(options){
    this.name = options.name;
    this.price = options.price;
    this.calories = options.calories;

    this.modifiers = [];

    this.addModifier = function (modifier){
        this.price += modifier.price;
        this.calories += modifier.calories;
        this.modifiers.push(modifier);
    }

    this.getPrice = function () {
        return this.price;
    }

    this.getCalories = function () {
        return this.calories;
    }
}

const cheese = new Modifier ('cheese', 10, 20);
const salad = new Modifier ('salad', 20, 5);
const potato = new Modifier ('potato', 15, 10);
const spices = new Modifier ('spices', 15, 0);
const mayo = new Modifier ('mayo', 20, 5);

const hamburger = new Hamburger(SMALL_BURGER)

hamburger.addModifier(potato);
hamburger.addModifier(mayo);

console.log("Price with sauce = " + hamburger.getPrice())
console.log("Calories with sauce = " + hamburger.getCalories())