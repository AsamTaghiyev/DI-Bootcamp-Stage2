// EXERCISES 1

//let people = ["Greg", "Mary", "Devon", "James"];

// let indexGreg = people.indexOf("Greg");

//   people.splice(indexGreg, 1);
//   console.log(people)


//   let indexJames = people.indexOf("James");
//    people[indexJames] = "Jason";
//    console.log(people);

//    let myName = "Asam";
//     people.push(myName);
//     console.log(people);


//  let maryIndex = people.indexOf("Mary");
//  console.log(maryIndex);

// const peopleCopy= ["Mary", "Devon", "Jason", "asam"];

//  const user = peopleCopy.slice(1,3);
//  console.log(user);


//   let foo = people.indexOf("Foo");
//   console.log(foo);

// const last = people[people.length - 1];
// console.log(last);



// for (let i = 0; i < people.length; i++) {
//     console.log(i);
//  }



//    for (let i = 0; i < people.length; i++) {
//    if (people[i] === "Devon") {
//     console.log(people[i]);  
//     break;

//      }

//     }


// EXERCISES 2

// let colors = ["blue", "red", "green", "yellow", "porple"];

// for (let i = 0; i < colors.length; i++) {
//     console.log(`${i + 1} my number one choice ${colors[i]}`);

// }



// EXERCISES 2

// let num
// do {
//  num = prompt(“Please enter a number:“);
//  console.log(num );
// } while (num > 10);

// console.log("The number you entered is less than 10.");


// EXERCISES 4


// let building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log("Number of floors in the building: " + building.numberOfFloors);

// console.log("Number of apartments on the first floor: " + building.numberOfAptByFloor.firstFloor);
// console.log("Number of apartments on the third floor: " + building.numberOfAptByFloor.thirdFloor);

// let secondTenant = building.nameOfTenants[1];
// let roomsAndRent = building.numberOfRoomsAndRent[secondTenant];
// console.log("Second tenant: " + secondTenant);
// console.log("Number of rooms in their apartment: " + roomsAndRent[0]);

// let sarahRent = building.numberOfRoomsAndRent.sarah[1];
// let davidRent = building.numberOfRoomsAndRent.david[1];
// let danRent = building.numberOfRoomsAndRent.dan[1];

//  if (sarahRent + davidRent > danRent) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
//     console.log("Dan's rent increased to 1200.");
//  } else {
//     console.log("Sarah's and David's rent is not bigger than Dan's rent.");
// }

// !!! correct way example
if (sarah < dan ){
  building.numberOfRoomsAndRent.dan[1]= 1200
  console.log(building);
}

// !!!

// EXERCISES 5

// let details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }
  
//   let sentence = "";
  
  
//   for (let det in details) {
//     sentence += details[det] + " ";
//   }
  
//   console.log(sentence.trim()); 

// EXERCISES 7

// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let secretName = names.map(name => name[0]).sort().join('');

// console.log("The secret society's name: " + secretName);

// !!! map ve arrow functionlari tam basa dusmemis istifade etme!!

// !!! correct way example

let output=[]

for (let user of names){

  output.push(user.charAt(0).toUpperCase())
  console.log(output);
}
console.log(output.join(''));

// !!! correct way




