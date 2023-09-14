

// function infoAboutME(){
//     console.log("My name is [Asam]. I am [27]. years old. and my hobbies [to play chess]. ");
// }
// infoAboutME()


// function infoAboutPerson(personName, personAge, personFavoriteColor) {

// console.log ("My name is " + personName + ", I am " + personAge + "years oldu, my favorite color is " + personFavoriteColor + "." );
// }

// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");



// EXERCISES 2

// function calculateTip() {
//     const billAmount =prompt("Enter the amount of the bill:");
//     let bill = Number(billAmount)
//     if (bill < 50) {
//         tipPercentage = 0.2; 
//     } else if (bill >= 50 && billAmount <= 200) {
//         tipPercentage = 0.15;
//     } else {
//         tipPercentage = 0.1; 
//     }

//     const tipAmount = bill * tipPercentage;
//     const finalBill = bill + tipAmount;

//     console.log(`${tipAmount}`);
//     console.log(`${finalBill}`);
// }
// calculateTip();

// Exercises 3


// function isDivisible(divisor) {
//     let isDivisible =23;
//     let sum = 0;
//     for (let i = 0; i <= 500; i++) {
//         if (i % divisor == 0) {
//             console.log(i);
//             sum += i;
//         }
//     }

//     console.log("Sum:", sum);
// }
// isDivisible(23);


// EXERCISES 4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry": 1
// };

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry": 10
// };

// const shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//     let total = 0;

//     for (const item of shoppingList) {
//         if (item in stock && stock[item] > 0) {
//             total += prices[item];
//             stock[item]--; 
//         }
//     }

//     return total;
// }

// EXERCISES 5


// function changeEnough(itemPrice, amountOfChange) {
//     const totalChange = (amountOfChange[0] * 0.25) + (amountOfChange[1] * 0.10) + (amountOfChange[2] * 0.05) + (amountOfChange[3] * 0.01);

//     if (totalChange >= itemPrice) {
//         return true; 
//     } else {
//         return false; 
//     }
// }




// EXERCISES 6







