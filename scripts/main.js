console.log("Welcome to the main module")

let faveSandwich = "Buffalo Chicken";

let terribleSandwich = {
    name: "Roast Beef",
    price: 11.00,
    ingredients: ["roast beef", "horseradish", "lettuce", "tomato", "white bread"],
}

let menu = [
    {
        name: faveSandwich,
        price: 9.00,
        ingredients: ["Buffalo Sauce", "Chicken Breast", "Lettuce", "Tomato", "Red Onion", "Bleu Cheese", "Bun"],
    },
    terribleSandwich,
    {
        name: "Reuben",
        price: 9.50,
        ingredients: ["Corned Beef", "Sauerkraut", "Swiss Cheese", "Rye Bread"],
    }
]

console.log(faveSandwich);
console.log(terribleSandwich);
console.log(menu);

// Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."
function menuItemSentence() {
    for (let i=0; i<menu.length; i++) {
        // if (menu[i].price<10) {
        //     console.log('SALE!');
        // }
        console.log(`The ${menu[i].name} sandwich is $${menu[i].price}`)
        // for (let j=0; j<menu[2].ingredients.length; j++) {
        //     console.log(menu[2].ingredients[j])
        // }
    }
}
menuItemSentence()

// Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. The function should build an object that represents a sandwich and add it to the array.
function sandwich (sandwichName, price, ingredients) {
    let newSandwich = {
        name: sandwichName,
        price: price,
        ingredients: ingredients,
    }
    menu.push(newSandwich)
}
sandwich("Cuban", 12.00, ["Pork","Pickles","Mustard","Peppers","Sourdough"])
console.log(menu[3])

// Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.
function discount (discountAmt) {
    let discountMenu = menu;
    for (let i=0; i<menu.length; i++) {
        discountMenu[i].price *= (1-discountAmt);
    }
    return discountMenu
}

let discountMenu = discount(0.25)
console.log(discountMenu)

// Write a "Dairy Free" function that loops through your array of sandwiches and returns a new array of sandwiches that do NOT include cheese in their ingredient list. (Make sure you have at least one sandwich with cheese so you can test if this function works.)
let acceptedCheeses = ["Swiss Cheese", "Bleu Cheese", "Cheddar Cheese", "Cheese"];
function dairyFree () {
    let dairyFreeMenu = [];
    let dairyCount = [];
    for (let i=0; i<menu.length; i++) {
        for (let j=0; j<acceptedCheeses.length; j++) {
            if (menu[i].ingredients.includes(acceptedCheeses[j])) {
                dairyCount = i;
                break
            }  
        }
        if (dairyCount !== i) {
            dairyFreeMenu.push(menu[i])
        }
    }
    return dairyFreeMenu
}

console.log(dairyFree())


// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

// To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

// for (let i=0; i<=100; i++) {
//     if (i % 5 === 0 && i % 7 ===0) {
//         console.log("ChickenMonkey")
//     }
//     else if (i % 5 === 0) {
//         console.log("Chicken")
//     }
//     else if (i % 7 === 0) {
//         console.log("Monkey")
//     } 
//     else {
//         console.log(i)
//     }
// }

// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 1

const takeNumber = function (bandName) {
    let string = `${bandNumber}. ${bandName}`;
    bandNumber++
    return string
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

// -------------------------------------------------------------------
// Nightclub management wants to use this app at the front door during the event. Incorporate the logic you have written and add an HTML document and apply CSS to make a mobile version of Battle of the Bands.
// --------------------------------------------------------------------


// Practice: Cookout
const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.
for (let i=0; i<foods.length; i++) {
    grill(foods[i])
}
console.log(cookedFood)

