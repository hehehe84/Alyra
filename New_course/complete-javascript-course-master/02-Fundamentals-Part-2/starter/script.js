'use strict';


/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence=true
if (hasDriversLicence) console.log('I can drive');
*/

//const interface = 'Audio'         Cause interface iss already reserve (such as 'private' or 'if'...)
/*
function logger() {
    console.log('My name is Antoine');
}

logger();
logger();
logger();
logger(); 


let coucou=false;
const obv=prompt('1 ou 2 ?');

function traitre(hihi){
    if (hihi==1){
        coucou=true;
    }else{
        coucou=false;
    }
};

traitre(obv);

function le_result(heho){
    if (heho===true){
        console.log('Bravo, cette ligne de code inutile montre que tu as choisi "1" en rendant ainsi coucou=true');
    }else{
        console.log('wlh soit original...');
    }
}
le_result(coucou);*/


/*
function fruitProcessor(apples, oranges){   //Return a string
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
    return juice;
}


fruitProcessor(56, 0);

const appleJuice = fruitProcessor(56, 0);       //'Juice with 56 apples and 0 oranges!'

const appleOrangeJuice = fruitProcessor(2,4);
 
*/


//Declaration vs expression
//Declaration


function calcAge1(birthYear){
    return 2022-birthYear;
}

const age1 = calcAge1(1991);

//Expression

/*
const age2=calcAge2(1992);

console.log(age1,age2);
*/
//Illustration on peut appeler une declaration avant de la définir et non possible avec une expression...

//Declaration
const age3 = calcAge3(1991);

function calcAge3(birthYear){
    return 2022-birthYear;
}

//Expression

/*const age4=calcAge4(1992);

const calcAge4 = function(birthYear) {
    return 2022-birthYear;
}*/





/*
console.log(age3);

const calcAge4 = birthYear => 2022 - birthYear;
const age4 = calcAge4(1999);

console.log(age4);



const yearsUntilRetirement = birthYear => {
    const age=2022-birthYear;
    const retirement=65-age;
    return retirement;
};
const yearsLeft=yearsUntilRetirement(1992);

console.log(`For you honey, it left only ${yearsLeft} years before you go to retirement...`)


const yearsUntilRetirement2 = (birthYear,firstName) => {
    const age=2022-birthYear;
    const retirement=65-age;
    return `${firstName} retire in ${retirement} years`;
};

const yearsLeft2=yearsUntilRetirement2(1992, 'Michael');

console.log(yearsLeft2);//OR :
console.log(yearsUntilRetirement2(1994,'Gerard'));

*/

//Functions calling out Other functions


function cutFruitPieces(fruit){
    return fruit*4;                 //4pieces for 1 fruit
}

function fruitProcessor2(apples, oranges){   
    const applePieces=cutFruitPieces(apples);
    const orangesPieces=cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangesPieces} pieces of orange!`;
    return juice;
}

console.log(fruitProcessor2(2,3));





//Reviewing functions

const calcAge = function(birthYear){
    return 2022-birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName) {
    const age=calcAge(birthYear);
    const retirement=65-age;
    return `${firstName} retire in ${retirement} years`;
};

//Fonctions pour tout nos calculs !


console.log(yearsUntilRetirement(2000, 'Quentin'));



console.log(yearsUntilRetirement3(1999, 'Thomas'));
function calcAgee(Year){
    return 2022-Year;
};

function calcRetirement(agee){
    return 65-agee;
};
console.log(yearsUntilRetirement3(1945, 'George'));
function yearsUntilRetirement3(birthYear,firstName) {
    const agee=calcAgee(birthYear);
    const retirementt=calcRetirement(agee);
    if(retirementt>0){
        console.log(`${firstName} retire in ${retirementt} years !`);
        return retirementt;
    }else{
        console.log(`${firstName} is already in retirement since ${Math.abs(retirementt)} years !`);
        return -1;
    }
};


    console.log(yearsUntilRetirement3(2003, 'Rayan'));










console.log('Coding Challenge 1 :');

let DolphinScore= [330, 23, 2];
let KoalaScore = [65, 54, 9];

function calcAverage(ScoreList){
    let Total=0;
    let counter=0;
    let i=0;
    for (i in ScoreList){
        Total+=ScoreList[i];
        counter++;
    }
    return (Total/counter);
};

const calcAverage2 = ScoreList => {
    let Total=0;
    let counter=0;
    let i=0;
    for (i in ScoreList){
        Total+=ScoreList[i];
        counter++;
    }
    return (Total/counter);
};

const avgDolph=calcAverage2(DolphinScore);
const avgKol=calcAverage2(KoalaScore);

function checkWinner(avgDolph,avgKol) {
    if (avgDolph>avgKol && (avgDolph>=2*avgKol)){

        return `Dolphins are the best, ${parseInt(avgDolph*10)/10} vs ${parseInt(avgKol*10)/10}`;

    }else if (avgKol>avgDolph && (avgKol>=2*avgDolph)){

        return `Koalas are the best ! ${parseInt(avgKol*10)/10} vs ${parseInt(avgDolph*10)/10}`;

    }else{

        return `No teams win... Dolphins ${parseInt(avgDolph*10)/10} vs ${parseInt(avgKol*10)/10} Koalas is not a sufficient score...`
    }
};
console.log(checkWinner(avgDolph,avgKol));

console.log(checkWinner(1222,8));

const calcAverage3 = (a,b,c) => (a+b+c)/3;
const scoreDolphin = calcAverage3(44,23,71);
const scoreKoala = calcAverage3(23,34,27);


const friend1='Michael';
const friend2='Peter';
const friend3='Steven';

//Array
const friends=['Michael','Steven','Peter','Pierre','Paul','Jacques','Steven','Peter','Pierre'];//String array
const Yearss= new Array(1897, 657, 1994, 2000);
const Yearss2=[1897, 657, 1994, 2000];
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1])//Last element of the array

friends[1] = 'Jay'      //Change the output even with const.. (only primitive value are immutable, not secondaries)
console.log(friends);


const firstName1 = 'Antoine';
const antoineP=[firstName1,'Picot',2022-1996,'Male', 'Student', friends];
console.log(antoineP);


console.log(antoineP[5].length);


//Little exercice


const calcAge2 = function(birthYear) {
    return 2022-birthYear;
}

const years2= [1990, 1991, 1998, 1978, 2018];
console.log('Avec+10 ',years2+10);
console.log('Avec calcAge2 ',calcAge2(years2));
console.log('Avec-10 ',years2-10);
console.log('Impossible de faire des opérations directement avec "Array"');
const newYear=[];


let i;
let invar;
for (i in years2){
    //newYear[i]=calcAge2(years2[i]);
    newYear.push(calcAge2(years2[i]));
}

console.log(newYear);



const friends2=['Michael','Jacques','Steven','Pierre'];

//Add an element at the end of the array
const newlength = friends2.push('Jay');


console.log(friends2);//Add a name at the end of the array.
console.log(newlength);//Give the length of the array.

//Add an element at the beginning of the array
friends2.unshift('Le+Bo');
console.log(friends2);

//Remove an element at the end of the array
const popped=friends2.pop();
console.log(friends2);
console.log(popped);

//Remove an element at the beginning of the array
const shifted = friends2.shift();
console.log(friends2);
console.log(shifted);


console.log(friends2.indexOf('Jacques'));

console.log('Pierre in the string ?',friends2.includes('Pierre'));
console.log('fdsqkjl?',friends2.includes('fdhsqui'));

if (friends2.includes('Michael')){
    console.log("Cool, tu as un ami qui s'appelle Michael");
}else{
    console.log("Micka qui ???");
}



console.log('coding challenge#2');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');



function calctip(bill){
    let tip;
    if(bill>=50&&bill<=200){
        tip=bill*0.15;
    }else{
        tip=bill*0.2;
    }
    return tip;
}

/*
const calcTip1 = function(bill){
    return bill>=50&&bill<=200 ? bill*0.15 : bill*0.2; 
}
console.log(calcTip1(100));
console.log(calcTip1(10));
console.log(calcTip1(1000));

const calcTip2 = bill =>bill>=50&&bill<=200 ? bill*0.15 : bill*0.2;
console.log(calcTip2(100));
console.log(calcTip2(10));
console.log(calcTip2(1000));
*/

console.log(calctip(100));
console.log(calctip(10));
console.log(calctip(1000));
//Validé

const bills=[125, 555, 44];
const tips=[calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
const totaltb=[calctip(bills[0])+bills[0], calctip(bills[1])+bills[1], calctip(bills[2])+bills[2]]
const tips2=[]
const totaltb2=[]
console.log(tips);


//Méthode plus automatique

let i2;
for (i2 in bills){
    tips2.push(calctip(bills[i2]));
    totaltb2.push(calctip(bills[i2])+bills[i2]);
}

console.log(tips2);
console.log(totaltb2);

console.log('Objects');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');




const newArray = {
    firstName : 'Antoine',
    lastName : 'Picot',
    age : 2022-1996,
    job : 'Student',
    friends : ['Michel','Perrine','Thibaut', 'Victor']
};

//Extract data from object

console.log(newArray);//Show this array in detail.

console.log(newArray.lastName);

console.log(newArray['friends']);


const nameKey = 'Name';
console.log(newArray['first'+nameKey],newArray['last'+nameKey]);


const interestedIn = prompt('What do you want to know about Antoine, choose between : firstName, lastName, age, job and friends !')
/*console.log(interestedIn);
console.log(newArray[interestedIn]);*/

if(newArray[interestedIn]){             //The interest is to return nothing if the value enter by the user is not existing
    console.log(newArray[interestedIn]);
}else{
    console.log('The value is not correct...');
};

newArray.location = 'Portugal';
newArray['twitter'] = '@antoineo84';

console.log(newArray);



console.log('Challenge');

//"Jonas has 3 friends and his best friend is Michael"

const Jonas = {
    firstName : 'Jonas',
    lastName : 'Schmedtman',
    numberOfFriends : 3,
    bestFriendName : 'Michael'
}
console.log(Jonas);

console.log(`${Jonas.firstName} has ${Jonas['numberOfFriends']} friends, and his best friend is called ${Jonas.bestFriendName}`);

console.log(`${newArray['first' + nameKey]} has ${newArray.friends.length} friends and his best friend is called ${newArray.friends[2]}`);
console.log(' ');
console.log(' ');
console.log(' ');
console.log("manipulation fonctions avec Jonas2");
console.log(' ');console.log(' ');
console.log(' ');






const Jonas2 = {
    firstName : 'Jonas',
    lastName : 'Schmedtman',
    job : 'teacher',
    birthYear: 1991,
    numberOfFriends : 3,
    friends : ['Michel','Perrine','Thibaut', 'Victor'],
    hasDriversLicense : false,
    perfectNumberOfFriends : 78,
    gender : "Male",

    /*calcAgeEE : function(birthYear){     //Cause a function produce a value; calCageEE is a property of Jonas object.
        return 2022-birthYear;          //CalcAge : Method in fact
    }*/                                   //Function value

    calcAgeEE: function(){
        //console.log(this);          //This point to "Jonas" Object.
        this.ageeee = 2022-this.birthYear;
        return this.ageeee;
    },

    /*
    calcAgeEEE: function(){

        return 2022-this.birthYear;
    },*/    

    

    calcYearsRetir: function(){
        return 65-this.calcAgeEE();
    },

    calcYearsRetirr: function(){
         this.ageUntilR = 65 - this.calcAgeEE();
         return this.ageUntilR;
    },

    CombienDami: function(){
        return this.perfectNumberOfFriends-this.friends.length;
    },

    summary: function(){
        return `${this.firstName} ${this.lastName} is a ${this.gender} ${this.job} and is ${this.calcAgeEE()}. He has ${this.friends.length} friends. And, he has ${this.hasDriversLicense ? 'a' : 'no'} Driver's Licence..`
    }
}
    //We cannot put a function inside an object (the token "function" in front of calcAgeEE;)

/*const calcAgeEE = function (birthYear){   //Here, we have a declaration, not good inside an object
    return 2022-birthYear;
}*/
// console.log(' ');
// console.log('Méthode appel fonction Age :', Jonas2.calcAgeEE());
// //console.log(Jonas2['calcAgeEE'](1991));

// console.log('Méthode appel variable enregistrée age :', Jonas2.ageeee);
// console.log(' ');

// console.log('Méthode appel fonction Age avant retraite :', Jonas2.calcYearsRetirr());

// console.log('Méthode appel variable Age avant retraite :', Jonas2.ageUntilR)
// console.log(' ');

// console.log('Méthode appel fonction Nombre amis ideal :', Jonas2.CombienDami());//Instead of calling this variable a multiple of time, we can calculate the variable one time to u
Jonas2.calcAgeEE();
Jonas2.calcYearsRetirr();
console.log('Méthode appel variable enregistrée age :', Jonas2.ageeee);
console.log('Méthode appel variable Age avant retraite :', Jonas2.ageUntilR);
console.log(Jonas2.summary());

console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');
console.log('Coding challende #3');
console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

const Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    },
};

console.log('BMI non crée par appel de fonction => ',Mark.BMI);  
console.log(Mark.calcBMI()); //Here, we have to call one time the function to create the object BMI
console.log('BMI a été crée par appel de la fonction si dessus, maintenant c est nickel =>',Mark.BMI);  

const John = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.BMI=this.mass/(this.height**2);
        return this.BMI;
    }
};

John.calcBMI();     //Ici ici on appelle John.calcBMI() afin de pouvoir appeler John.BMI directement dans la console. 
Mark.calcBMI();
 
console.log(John.BMI);

console.log(`${John.firstName} BMI (${John.BMI})'s is ${John.BMI>Mark.BMI ? 'higher' : 'lower'} than ${Mark.firstName}'s BMI (${Mark.BMI}) !`);

console.log(' ');
console.log(' ');
console.log('Time to pass to the loops !');
console.log(' ');
console.log(' ');

//For loop keeps running while condition is TRUE !

for (let i =3; i<=30; i+=3) {
    console.log(`coucou ${i}`);
};
console.log(" ");
console.log(" ");

const Antoinee = {
    firstName : 'Antoine',
    lastName : 'Picot',
    age : 2022-1996,
    job : 'Student',
    friends : ['Michel','Perrine','Thibaut', 'Victor'],
    hasDriversLicense : true
};

const Antoinee2 = [
    'Antoine',
    'Picot',
    2022-1996,
    'Student',
    ['Michel','Perrine','Thibaut', 'Victor'],
    true
];

for (i in Antoinee){
    console.log(Antoinee[i]);
}

console.log('Other Method !')

const types=[];
const types2=[];
for (let i = 0 ; i < Antoinee2.length ;i++){    //Or i<=Antoine2.length-1
    //Reading from Antoinee2 array
    console.log(Antoinee2[i], typeof Antoinee2[i])

    //Filling new types array
    //types[i] = typeof Antoinee2[i]
    types[i]=typeof Antoinee2[i];
    types2.push(typeof Antoinee2[i])
};

console.log(types);
console.log(types2);


const yearss = [1234,2345,3456,4567,5678];

const newYearss=[];
const newYearss2=[];

for (let i=0; i<yearss.length; i++){    //Years.length = Nombre d'éléments mais le nombre commence par 0
    newYearss.push(2022-yearss[i]);
    //newYearss[i]=2022-yearss[i];
}

for (i in yearss){
    newYearss2[i]=2022-yearss[i];
}

console.log(newYearss);
console.log(newYearss2);
console.log(' ');
console.log(' ');
//continue and break
console.log('ONLY STRINGS');
console.log(' ');
console.log(' ');

for (let i = 0 ; i < Antoinee2.length ;i++){
    if (typeof Antoinee2[i] !== 'string') continue;
        console.log(Antoinee2[i], typeof Antoinee2[i])
};

console.log(' ');
console.log(' ');
console.log('Different from STRING only');
console.log(' ');
console.log(' ');

for (let i = 0 ; i < Antoinee2.length ;i++){
    if (typeof Antoinee2[i] === 'string') continue;
        console.log(Antoinee2[i], typeof Antoinee2[i])
};

console.log(' ');
console.log(' ');
console.log("Show the first string until you have something different than a string");
console.log(' ');
console.log(' ');

for (let i = 0 ; i < Antoinee2.length ;i++){
    if (typeof Antoinee2[i] !== 'string') break;
    console.log(Antoinee2[i], typeof Antoinee2[i])
};

console.log(' ');
console.log(' ');
console.log("Show all informations until we find an object / break with object");
console.log(' ');
console.log(' ');

for (let i=0; i<Antoinee2.length; i++){
    if(typeof Antoinee2[i] === 'object') break;
    console.log(Antoinee2[i], typeof Antoinee2[i]);
};

console.log(' ');
console.log(' ');
console.log("Show all informations until we reach the Antoine[3]. It is not practical and bad in this occasion but interesting to treat");
console.log(' ');
console.log(' ');

for (let i=0;i<Antoinee2.length;i++){
    if (Antoinee2[i]===Antoinee2[3]) break;
    console.log(Antoinee2[i]);
};

console.log(' ');
console.log(' ');
console.log("Looping Backwards and loop in loops");
console.log(' ');
console.log(' ');

const Antoinee3 = [
    'Antoine',
    'Picot',
    2022-1996,
    'Student',
    ['Michel','Perrine','Thibaut', 'Victor', 'Peter']
];

for (let i=Antoinee3.length-1; i>=0;i--){   //   4,3,...,0
    console.log(i , Antoinee3[i]);
}

/*
const gym = [

];*/
let numbIt = 0;
let numbItPr = 0;
let numbItSec = 0;

for (let exercice = 1; exercice < 4; exercice++){
    console.log(`----------Starting exercice ${exercice}`);
    numbIt++;
    numbItPr++;
    for (let rep = 1; rep < 6; rep++){
        console.log(`Exercice ${exercice} : Lifting weight repetiton ${rep} !`);
        numbIt++;
        numbItSec++;
    }
}

console.log(numbIt);
console.log(numbItPr);
console.log(numbItSec);


console.log(' ');
console.log(' ');
console.log("The WHILE loop :");
console.log(' ');
console.log(' ');



let rep=1;

while (rep<=10){
    console.log(`Exercice 1, repetition ${rep}`);
    rep++;
}
console.log(' ');
console.log(' ');
console.log(' ');
//We will roll a dice until we roll a six

let numberDice;
while (numberDice !=6 ){
    numberDice = 1+parseInt(Math.random()*6);
    console.log(`The number with the dice n°1 is : ${numberDice}`);
};

console.log(' ');
console.log(' ');

let dice = Math.trunc(Math.random() * 6)+1;

while (dice !=6 ){
    console.log(`You rolled ${dice} with the second dice`);
    dice = Math.trunc(Math.random() * 6)+1;
    if (dice===6) console.log('Loop is finish because we rolled a SIX...');
};


console.log(' ');
console.log(' ');
console.log('Coding challenge');
console.log('Number 4 ! ');
console.log(' ');
console.log(' ');

const bills2=[22, 295, 176, 440,37, 105, 10, 1100, 86, 52];

const tips3=[];
const tips32=[];
const totals=[];
const totals2=[];

console.log('Bills ', bills2);

function calctip2(bill){
    let tip;
    if(bill>=50&&bill<=200){
        tip=bill*0.15;
    }else{
        tip=bill*0.2;
    }
    return tip;
}

for (let i=0; i<+bills2.length;i++){
    tips3.push(calctip2(bills2[i]));
    totals[i]=bills2[i]+tips3[i];
}


//Other way of doing it !
for (let i=0; i<=bills2.length;i++){
    const tip = calctip2(bills[i]);
    tips32.push(tip);
    totals2.push(tip+bills2[i]);
}

console.log("tips :", tips3);
console.log("total ;", totals);

const calcAveragee = function(arr) {
    let Total=0;
    for (let i=0; i <= arr.length-1; i++){
        Total += arr[i];
    }
    return (Total/arr.length);
}

function calcAveragee2(arr) {
     let Total=0;
     for (let i=0; i <= arr.length-1; i++){
         Total += arr[i];
     }
     return (Total/arr.length);
 }



console.log('Bills average',calcAveragee2(bills2));
console.log('Tips average',calcAveragee2(tips3));
console.log('total average ',calcAveragee2(totals));


console.log(' ');
console.log(' ');
console.log(' ');
console.log(' ');

console.log('JS exercices');



const describeCountry = function(country, population, capitalCity) {
    return(`${country} has ${population} million people and it's capital is ${capitalCity}`);
}

let descFin=describeCountry('Finland', 6, 'Helsinki');
let descUSA=describeCountry('USA', 330, 'Washington');
let descFra=describeCountry('France', 75, 'Paris');
console.log(descFin);
console.log(descUSA);
console.log(descFra);

function percentageOfWorld1(population){
    const worldPop=7900;
    let percentage = (population/worldPop)*100;
    return percentage;
}

const percentageOfWorld2 = function(population){
    const worldPop=7900;
    let percentage = (population/worldPop)*100;
    return percentage;
}



const percFin=percentageOfWorld1(6);
const percUSA=percentageOfWorld2(330);
const percFra=percentageOfWorld1(75);
const percCHi=percentageOfWorld2(1441);
console.log('Pourcentage population Finland',percFin);
console.log('Pourcentage population USA',percUSA);
console.log('Pourcentage Population France',percFra);
console.log('Pourcentage Population China',percCHi);

const percentageOfWorld3 = population => {
    const worldPop = 7900;
    let percentage = (population/worldPop)*100;
    return percentage;
};
// const percFin3=percentageOfWorld3(6);
// const percUSA3=percentageOfWorld3(330);
// const percFra3=percentageOfWorld3(75);
// const percCHi3=percentageOfWorld3(1441);
// console.log('Pourcentage population Finland',percFin3);
// console.log('Pourcentage population USA',percUSA3);
// console.log('Pourcentage Population France',percFra3);
// console.log('Pourcentage Population China',percCHi3);

console.log(' ');
console.log(' ');
console.log('Calling Other Functions');
console.log(' ');
console.log(' ');

function describePopulation(country, population){
    const percentage = percentageOfWorld3(population);
    return `${country} has ${population} million people, which is about ${parseInt((percentage)*10)/10}% of the world`;
}

console.log(describePopulation('China', 1441));
console.log(describePopulation('France', 75));
console.log(describePopulation('USA', 330));

console.log(' ');
console.log(' ');
console.log('Intro Arrays');
console.log(' ');
console.log(' ');

// const populations =[6, 75, 330, 1441];
// console.log(populations.length === 4);

// const percentages=[];

// for (let i=0; i < populations.length;i++){
//     percentages.push(parseInt(percentageOfWorld1(populations[i])*1000)/1000);
// }

//console.log(percentages);


console.log(' ');
console.log(' ');
console.log('BAsic Array operations METHODS');
console.log(' ');
console.log(' ');

const neighbours=['Espagne', 'Italie', 'Andorre','Monaco' ,'Belgique','Luxembourg', 'Bresil'];

console.log(neighbours);

neighbours.push('Utopia');

console.log(neighbours);

neighbours.pop();

console.log(neighbours);

console.log(`Your country ${neighbours.includes('Germany') ? 'Is certainly':'Is certainly not'} in central Europe`);

neighbours[3]='République de Monaco';

console.log(neighbours);


console.log(' ');
console.log(' ');
console.log('Intro to Objects');
console.log(' ');
console.log(' ');


const myCountry = {
    country : 'France',
    capital : 'Paris',
    language : 'French',
    population : 75,
    neighbours : ['Espagne', 'Italie', 'Andorre','Monaco' ,'Belgique','Luxembourg', 'Bresil']
}


console.log(myCountry);


console.log(' ');
console.log(' ');
console.log('Dot vs Bracket Notation');
console.log(' ');
console.log(' ');

console.log(`${myCountry.country} has ${myCountry['population']} million ${myCountry['language']} speakers, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry['capital']}.`);

console.log(`France population is now ${myCountry.population+2} Million, babby boom`);

// myCountry.population += 2;
// console.log(myCountry.population);

console.log(`France Population is now at ${myCountry['population']-2} Million, oups... COVID... `)

// myCountry['population'] -= 2;
// console.log(myCountry.population);

console.log(' ');
console.log(' ');
console.log('Object Methods');
console.log(' ');
console.log(' ');

const myCountry2 = {
    country : 'France',
    capital : 'Paris',
    language : 'French',
    population : 75,
    neighbours : ['Espagne', 'Italie', 'Andorre','Monaco' ,'Belgique','Luxembourg', 'Bresil'],


    summary : function(){
        this.describe =`${this.country} has ${this['population']} million ${this['language']} speakers, ${this.neighbours.length} neighbouring countries and a capital called ${this['capital']}.`; 
        return this.describe; 
    },

    checkIsland : function(){
        this.isIsland = (this.neighbours.length === 0) ? true : false;
        return this.isIsland
    }
}

console.log(myCountry2.summary());

//Or we can call summary to have the object myCountry2.describe to call several times
myCountry2.summary();

console.log(myCountry2.describe);

myCountry2.checkIsland();

console.log('Is the country an island ?',myCountry2.isIsland);

console.log(' ');
console.log(' ');
console.log('Iteration : the For loop');
console.log(' ');
console.log(' ');
/*
for (let i=1; i <= 50;i++){
    console.log(`Voter number ${i} is currently voting`);
}*/

console.log(' ');
console.log(' ');
console.log('Looping Arrays, Breaking and Continuing');
console.log(' ');
console.log(' ');

const populations =[6, 75, 330, 1441];
console.log(populations.length === 4);
const percentages=[parseInt(percentageOfWorld1(populations[0])*100)/100,parseInt(percentageOfWorld1(populations[1])*100)/100,parseInt(percentageOfWorld1(populations[2])*100)/100,parseInt(percentageOfWorld1(populations[3])*100)/100];
console.log(percentages);



const populations2 =[6, 75, 330, 1441];
const percentages2=[];
for (let i=0; i < populations.length;i++){
    percentages2.push(parseInt(percentageOfWorld1(populations[i])*100)/100);
}

console.log(percentages2);

console.log(`Les deux tableaux ${percentages==percentages2 ? 'sont' : 'ne sont pas'} identiques`);

console.log(' ');
console.log(' ');
console.log('Looping Backwards and Loops in Loops');
console.log(' ');
console.log(' ');

const listofNeighbours = [
    ['Canada', 'Mexico'], 
    ['Spain'], 
    ['Norway', 'Sweden', 'Russia']];

console.log(listofNeighbours);
for (let i =0; i<listofNeighbours.length; i++){
    for (let j=0; j<listofNeighbours[i].length; j++){
        console.log(`Neighbour: ${listofNeighbours[i][j]}`);
    }
}


console.log(' ');
console.log(' ');
console.log('The while Loop');
console.log(' ');
console.log(' ');

const populations3 =[6, 75, 330, 1441];
const percentages3=[];
let itt=0;
while(itt<populations3.length){
    percentages3.push(parseInt(percentageOfWorld1(populations3[itt])*100)/100);
    itt++;
}

console.log(percentages3);


















