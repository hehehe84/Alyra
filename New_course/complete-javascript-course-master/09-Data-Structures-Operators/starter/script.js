'use strict';

console.log('coucou');

const weekdays=['mon', 'tue','wed','thu','fri','sat','sun']

// const openingHours= {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

const openingHours= {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  locationn: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  //openingHours: openingHours,       //Works but not the best

  openingHours,   //Enhanced object literals

  // openingHours: {
  //   thuesday: {
  //     open: 12,
  //     close: 22,
  //   },
  //   friday: {
  //     open: 11,
  //     close: 23,
  //   },
  //   saturday: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },


  // order : function(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery(obj){
    console.log(obj)
  },

  orderDelivery2({starterIndex = 1, mainIndex = 2, time = '20', address = 'Police Central'}){
    console.log(
      `Order received to ${address} at ${time} : ${this.starterMenu[starterIndex]} for starter and ${this.mainMenu[mainIndex]} as main dish`
      )
  },

  orderPasta(ing1,ing2,ing3) {
    console.log(`Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza: function(mainIngredient,...OtherIngredients){
    console.log('Main ingredient :',mainIngredient);
    console.log('Others Ingredients :',OtherIngredients);
  },
};

//Maps (Maps fundamentals)

























/*
//Sets
const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Antoine Picot est un beau gosse'));
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic bread');
ordersSet.add('Garlic bread');
ordersSet.delete('Risotto');
console.log(ordersSet);

// ordersSet.clear();
// console.log(ordersSet);    Does what it means, we don't made it clear cause it would kill the datas

for (const order of ordersSet) console.log(order);


//Example

const staff=['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = new Set(staff);
console.log(staffUnique);

// const arrStaff=[];
// for (let i of staffUnique){
//   arrStaff.push(i);
// }
const arrStaff=[...new Set(staff)];

console.log(arrStaff);
console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('AntoinePicot').size);
*/

/*
//CODING CHALLENGE N°2


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. 

// let goal_str =[''];
// const play_scored= game.scored;
// for (let goal in play_scored){
//   goal_str+=`Goal ${parseInt(goal)+1}: ${play_scored[goal]}, `;
// }
// console.log(goal_str);
//Correction

//1
for (const [i, player] of game.scored.entries())    //We need entries cause we want an arry with all the infos
  console.log(`Goal ${i + 1}: ${player}`);

//2.
const odds = Object.values(game.odds);    //We create the object that gives all the odds
const nbr=odds.length;
let avg=0;
for (const odd of odds){
  avg+=odd;
}
console.log(avg);
console.log(avg/nbr);

// let avg_2=0;
// for (const odd of Object.values(game.odds))
//   avg_2+=odd;
// avg_2/=odds.length;
// console.log(avg_2);

//3
for (const [team,odd] of Object.entries(game.odds)){
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;//Use of the bracket are totally obligatory cause. 
  console.log(`Odd of ${teamStr} : ${odd}`);
}

//BONUS
const scorers={};
for (const players of game.scored){
  scorers[players] ? scorers[players]++ : (scorers[players])=1;
}
console.log(scorers);



*/

























/*
//Looping objects, Object Keys, Values and Entries

const properties = Object.keys(openingHours);
console.log(properties);

let openSTR=`We are open on ${properties.length} days : `;

for (const days of properties){
  openSTR += `${days}day, `;
}
console.log(openSTR);

//PROPERTY VALUES
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entries=Object.entries(openingHours);
// console.log(entries);

//[Key, value]
// for (const [key, {open, close}] of entries){
//   console.log(`On ${key}, we open at ${open} and close at ${close}`);
// }
for (const [day, {open, close}] of entries){
  console.log(`On ${day}, we open at ${open} and close at ${close}`);
}*/


















/*
//Optional Chaining (_.)


// console.log(restaurant.openingHours.mon.open);      //we ask for undefined.open => error cause not possible to open smth that does not exist

if(restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);  //No more problems
//But problem if restaurant.openingHours doesn't exist... To counterfit this:

if(restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//This is really long to do, specially if the length of the chain is really long.
//We have the solution ! Optional chaining

//With true Optional chaining
console.log(restaurant.openingHours.mon?.open);   //Ask all the propperty before the question mark. otherwise, undefined will be return...
//gives undefined in the console cause monday doesn't exist...

console.log(restaurant.openingHours.fri?.close);  //This works cause friday exist.

const days =['mon','tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days){      //Good but give us undefined.
//   const open = restaurant.openingHours[day]?.open
//   console.log(`On ${day}, we open at ${open}`);
// }

// for (const day of days){      
//   const open = restaurant.openingHours[day]?.open||'closed';    //problem, saturday gives bad result cause 0 is a falsy value
//   console.log(`On ${day}, we open at ${open}`);
// }

for (const day of days){      //NULLISH BG
  const open = restaurant.openingHours[day]?.open??'closed';    //0 is no more considered as a falsy value !!
  console.log(`On ${day}, we open at ${open}`);
}


//OPTIONAL CHAINING ON METHODS

console.log(restaurant.order?.(0,1)??'Method does not exist');
console.log(restaurant.ordercaca?.(0,1)??'Method does not exist');

//OPTIONAL CHAINING ON ARRAYS

const users=[{ name:'Antoine', email:'antoine.picott@gmail.com'}];
console.log(users[0]?.name ?? 'User array empty');



*/







//IF users =[];
// console.log(users[0]?.name ?? 'User array empty'); => 'Empty array'. That is normal cause users[0] = ''
// if (users.length>0) console.log(users[0].name);
// else console.log('User array empty');


//FOR-OF loop
/*
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];

for (const item of menu) console.log(item);

// for (const item of menu.entries()){
//   console.log(`${item[0]+1} : ${item[1]}`);
// }

//Same Same but second better

for (const [i, el] of menu.entries()){
  console.log(`${i+1} : ${el}`);
}

// console.log(...menu.entries());

*/










/*
//CODING CHALLENGZ #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1 = game.players[0];
// const players2 = game.players[1];
// console.log(players1,players2);
//1
const [players1,players2]=game.players
console.log(players1,players2);

//2
const [gk,...fieldPlayers] = players1   //ALLA Bayern
console.log(gk,fieldPlayers);

//3
const allPlayers=[...players1,...players2];
console.log(allPlayers);

//4
const players1Final=[...players1,'Thiago','Coutinho','Perisic'];
console.log(players1Final);

//5
const {odds : {team1, x : draw, team2}} = game;
console.log(team1,draw,team2);

//6

const printGoals = function(...numbPlayers){
  console.log(numbPlayers);
  console.log(`${numbPlayers.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 < team2 && console.log(`team 1 is more likely to win`);//1st condition false =>We print second
team2 < team1 && console.log(`team 2 is more likely to win`);//1st cond true =>Stop circut



// //team1: 'Bayern Munich',
// team2: 'Borrussia Dortmund',
// score: '4:0',
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// date: 'Nov 9th, 2037',
// odds: {
// //team1: 1.33,
// x: 3.25,
// team2: 6.5,
// },

*/


/*

//THE NULLISH COALESCING OPERATOR

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); 

//Nullish : null and undefined (Not 0 or '')

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log(3 ?? 'Antoine');  //3
console.log('' ?? 3);         //''
console.log(true ?? 0);     //true
console.log(false ?? 0);     //false
console.log(undefined ?? null); //null
console.log(undefined ?? 0 ?? '' ?? 'Hello' ?? 23 ?? null); //0
*/


/*
//AND and OR Operators, Short Circuiting


console.log(3||'Antoine');
console.log(''||3);
console.log(true || 0);
console.log(undefined || null);
console.log(false || 0);  //0 is falsy but second appear => OR will show it
console.log(undefined || 0 || '' || 'Hello' || 23 || null);


const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest1);

const guest2 = restaurant.numGuests||10

console.log(guest2);  //10 cause restaurant.numGuests is undefined

restaurant.numGuests=23

const guest3 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest3);

const guest4 = restaurant.numGuests||10

console.log(guest4);  //23 because now, restaurant.numGuests is defined...

restaurant.numGuests=0

const guest5 = restaurant.numGuests ? restaurant.numGuests : 10;

console.log(guest5);

const guest6 = restaurant.numGuests||10

console.log(guest6); 

console.log('---AND---');

console.log(0 && 'Jonas');

console.log(7 && 'Jonas');

console.log(3&&'');

console.log(true&&' ');

console.log(undefined&&null); 

//The result is not always a Boolean

console.log('Hello'&& 23 && null && 'Jonas');


//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// We pretend that we don't know if orderPizza Exist But it deserve to dig in a different way

restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');




*/









/*
//Rest Pattern and Parameters

//Spread because on right side of "="
const arr = [1,2,3,4,...[5,6]];

//REST, because of the left side of "="
const [a,b,...others] = [1,2,3,4,5]

console.log(a,b, others);
// => others = [3,4,5]

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu] 
//Skip the 3 first and store all of them except 3 first into an array otherFood

console.log(pizza, risotto, otherFood);

//Objects
const {saturday, ...weekday} = restaurant.openingHours;
console.log(weekday);

//Functions

const add = function(...numbers) {
  let sum=0;
  for (let i=0; i<numbers.length; i++){
    sum+=numbers[i];
  }
  console.log(sum);
}
add(2,3)
add(5,3,7,2,99)
add(8, 9, 9, 5, 7)

const x = [23,5,7];
add(...x);

//Order Pizza with REST...

restaurant.orderPizza('Mushrooms','Onions','Olives','Spinach');

restaurant.orderPizza('Tomatos')
*/












//The sread Operator
/*
const arr=[7, 8, 9];

const badNewArr = [1,2, arr[0], arr[1],arr[2]];
console.log(badNewArr);

const goodNewArr = [1,2, ...arr];
console.log(goodNewArr);

for (let i in goodNewArr){
  console.log(goodNewArr[i]);
};

console.log(...goodNewArr);   //We write all element in a row

const newMenu = [...restaurant.mainMenu, 'Gnocci']; //Warning, here, we are just building a new array
console.log(newMenu);

//Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

//Join2arrays

const allDishAvailable = [...restaurant.mainMenu,...restaurant.starterMenu];
console.log(allDishAvailable);

const str='Jonas';
const letters=[...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

// console.log(``${...str} Schmertmann);  Doesn't work cause it enter multiple value in the ${}

//orderPasta function

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt("Ingredient 2?"),prompt ("Ingredient 3?")];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = {foundedIn: 1998,...restaurant, founder: 'Guiseppe'}

console.log(newRestaurant);

const restaurantCopy = {...restaurant};

restaurantCopy.name = 'Risorante Roma';

console.log(restaurant.name);
console.log(restaurantCopy.name);
*/


// //We need objects to fill the functions inside the object restaurant 
// restaurant.orderDelivery2({
//   starterIndex : 0,
//   mainIndex :0,
//   time: '21:15',
//   address:'9 lotissement les Micocouliers'})

// restaurant.orderDelivery2({     //We onky define the hour, the rest is given by default values...
//   time:'23:59'
// });

// restaurant.orderDelivery({
//   time: '22:30',
//   adress: 'Via del Sole, 21',
//   mainIndex:2,
//   startersIndex:0,
// })

// ////////////////////////DESTRUCTURING OBJECTS
// const {name, locationn, categories, openingHours, mainMenu} = restaurant;   //The order we put elements in the brackets doesn't count..

// console.log(openingHours, locationn, mainMenu);


// const {name: restaurantName, openingHours: hours,categories: tags}=restaurant;

// console.log(restaurantName,hours, tags);

// // restaurant.menu     //Undefined 
// //DEFAULT VALUES;


// const {menu1def, starterMenu: starterss = []}=restaurant;

// console.log(menu1def,starterss);

// const {menu = [], starterMenu: starters = []}=restaurant;   //We create a default value that is an array to prevent undefined property

// console.log(menu, starters);

// //MUTATING VARIABLES

// let a=111;
// let b=999;

// const obj = {a:23, b:7, c:14};

// //There is a trick under cause we wants to reassign the value of the letter a and b...
// ({a,b} = obj);    //brackets at the beginning of a line is considered as an object and in order to assign it qith another object,
// //We should put parenthesis...

// console.log(a,b);

// //NESTED OBJECTS
// const {friday: {open: o, close}, saturday, thuesday: {open: ooopen, close: ccclose}}=openingHours;
// console.log(o, close);
// console.log(saturday);
// console.log(`for thuesday opening:${ooopen}, closing:${ccclose}`);








///////////////////////PART FOR DESTRUCTURING ARRAYS
// const arr = [3,8,9];
// const a= arr[0];
// const b= arr[1];
// const c= arr[2];

// const [d,e,f] = arr;      //Same same than up here

// console.log(a===d);
// console.log(b===e);

// // const [first, , second] = restaurant.categories; //", ," skip the second element
// // console.log(first, second);

// let [main, secondary] = restaurant.categories; 
// console.log(main, secondary);

// // const temp = main;
// // main=secondary;
// // secondary = temp;

// // // console.log(temp, main, secondary);

// //DESTRUCTURING

// //Swittching variables
// [main, secondary] = [secondary, main];

// console.log(main, secondary);


// const firstCommand = restaurant.order(2,0);

// const [starter,Mainn] = restaurant.order(1,1);

// console.log(firstCommand);

// console.log(starter,"As an entrance, for the plate, I will take :", Mainn);


// //Nested destructuring    (nested = imbriqué)
// const nested = [2,4,[6,8],[1,3,5]]
// //In the following, I skip the 4 in the global array !
// const [i, , j, g]= nested;

// console.log(i,j,g);

// // now I want values inside each array

// const [x, ,[xx,xxx],[xxxx,xxxxx,xxxxxx]]=nested;
// console.log(x,xx,xxx,xxxx,xxxxx,xxxxxx);

// //Default Values

// const [p,q,r] = [8,9];

// console.log(p,q,r);   //"r" is undefined cause does not exist in our array !

// const [pp=1,qq=1,rr=1]=[8];

// console.log(pp,qq,rr);  //"qq" and "rr" became 1 cause is define in the previous array.