/*const sarahAge = 33;
const AgePermis = 18;
var diffAge = Math.abs(AgePermis - sarahAge);

if (sarahAge<AgePermis){
    console.log(`Sarah est trop jeune, elle doit encore attendre ${diffAge} années`);
}else{
    console.log(`Et bien ma vieille, tu as attendu ${diffAge}ans avant de venir nous voir ???`)
}



const birthYear = 2002;

const cent = 2000;

let century;

if (birthYear<cent){
    century = 20;
}else{
    century = 21;
}
console.log(century);

let oui='OUI';

/*if(oui === "OUI"){
    alert("Et oui !");
}

let calc =  40+8+33-29;


javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 55;
console.log(year);
console.log(typeof year);

console.log(typeof 'Jonas');



let namee;

namee = "Bob";

console.log(namee);

namee = "John";

console.log(namee);

namee = "Maxime";

console.log(namee);


let coucou = true;

coucou = false;

if (coucou===false){
    alert("c'est faux !!!");
}


const PI=3.1415;

let myFirstJob = 'teacher'


coucou=true;
console.log(typeof coucou);

let myVar=true;
console.log(myVar);
myVar='coucou';
console.log(myVar);


let year;
console.log(year);
console.log(typeof year);
*/

const country = 'France';
const continent = 'Europe';
var population = 75000000;
console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
var language = "Français";

language = "Arabe"

console.log(language);

var splitCountry=false;

//splitCountry=true;


if(splitCountry===true){
    population=population/2;
    console.log(population)
}

population=population+1;

console.log(population);

let PopFinl=6000000;

let isIt=true;
if(PopFinl>population){
    isIt=true;
}else{
    isIt=false;
}
console.log(`Is the Finland population is superior at ${country} population ? ${isIt}`);
let popaverage=33000000;
console.log(population<popaverage);


const description = "Portugal is in Europe and it's 11million people speak portuguese";

console.log(description);

var description2 = `${country} is in ${continent} and it's ${population} speak ${language}`;

console.log(description2);

population = 60000000;

if(population>33000000){
    console.log(`${country} population is above the average...`);
}else{
    console.log(`the population in ${country} is ${popaverage-population} inhabitant below the average...`);
}


//==vs===
/*
let numNeighbours = Number(prompt('How many neighbour countries does your country have?')); 
//Without  Number(), prompt will get a string and absolutely no number... 

if(numNeighbours===1){
    console.log('Only 1 border !')
}else if(numNeighbours>1){
    console.log(`More than ${numNeighbours} border, crazy !!!`);
}else{
    console.log('No borders');
};
*/

//Logical operators

let language2 = 'english';

let population2=458930;

if (language2==='english' && population2<50000000 &&!isIsland){
    console.log('Sarah could live in this country');
}else{
    console.log('She should search more !');
}

if (language==='english'&& population<50000000&&isIsland){
    console.log(`Come live in ${country}, it meet all your criteria`);
}else{
    console.log(`Oupsie, ${country} is maybe not the right choice for you`);
}

//Switch Statement !
let languageS = 'spanish';

switch(languageS) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers');
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("Number 4");
        break;
    case 'arabic':
        console.log("5th most spoken lansuage");
        break;
    default:
        console.log("Great language too");
}


//Ternary Operator


let place = population>=33000000 ? 'above':'below';

console.log(`France population is ${place} average.`);

console.log(`${country} population is ${population >33000000 ? 'Above' : 'below'} average.`)




























/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 
'tip' for this. It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement, and then try to convert 
it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300
*/

let BillValue;
let tip;

BillValue=1000;

if(50 < BillValue && BillValue < 300){
    tip=0.15*BillValue;
}else{
    tip=0.2*BillValue;
}
console.log(tip);


/*let markMass;
let markHeight;
let johnMass;
let johnHeight;


markMass = 78;
markHeight =1.69;
johnMass =92;
johnHeight =1.95;
markMass = 95;
markHeight =1.88;
johnMass =85;
johnHeight =1.76;

let markHigherBMI = true;




let BMIMark = markMass/(markHeight**2);
let BMIJohn = johnMass/(johnHeight**2);

console.log(BMIMark,BMIJohn);


if(BMIJohn>BMIMark){
    markHigherBMI=false;
}else{
    markHigherBMI=true;
}

console.log(markHigherBMI);

console.log(`Mark a t'il un plus gros IBM que John ? ${markHigherBMI}`);
*/

//Coding challenge 2


let markMass = 95;
let markHeight = 1.98;
let johnMass = 78;
let johnHeight = 1.5;

let markHigherBMI = true;

let BMIMark = markMass/(markHeight**2);
let BMIJohn = johnMass/(johnHeight**2);

console.log(BMIMark,BMIJohn);


if(BMIJohn>BMIMark){
    markHigherBMI=false;
    console.log(`Mark's IBM : ${BMIMark} is lower than John's IBM : ${BMIJohn}`);
}else{
    markHigherBMI=true;
    console.log(`Mark's IBM : ${BMIMark} is higher than John's IBM : ${BMIJohn}`);
}

console.log(markHigherBMI);

console.log(`Mark a t'il un plus gros IBM que John ? ${markHigherBMI}`);





/*
const firstName="Antoine";
const job="Chomeur";
const birthYear = 1996;
const currentYear = 2022;

const Antoine = `I'm ${firstName}, a ${currentYear-birthYear} years old ${job} !`; 

console.log(`String With
multiple
lines`);*/

/*
const inputYear2='1991';
console.log(Number(inputYear2)+18);
console.log(inputYear2+18);*/

console.log("I am " + 21 +' years old');
console.log('15' + 17 - "6");




console.log(Boolean('markMass'));

const Money=0;
if(Money){
    console.log('Don t spend it all !');
}else{
    console.log("You don't have nothing left...");
}


let height;

if(height){
    console.log('What a chance !');
}else{
    console.log("Oh shit, it's a pitty.. height is Undefined");
}


const age2 = '18';

if(age2 === 18){
    console.log('Félicitation, vous êtes un adulte maintenant');
}else if(age2>18){
    console.log('Ca fait longtemps que vous êtes déjà un adulte');
}else{
    console.log('Gros bébé !');
}


if (age2===18) console.log('You just became an adult (strict)')
if (age2==18) console.log('You just became an adult (loose)')


/*
const fav = prompt("What's your favourite number ???")
console.log(fav);
console.log(typeof fav);

if (fav==23){    //Because, 23 is a string
    alert('Cool, 23 is the best number');23
}*/



/*
const fav = Number(prompt("What's your favourite number ???"));
console.log(fav);
console.log(typeof fav);

if (fav===23){    //Work because 23 is a string transform into a number. It's better to une Number() in this condition.
    alert('Cool, 23 is the best number');
}else if (fav ===42){
    console.log('42 ça pue la merde');
}else if(fav!==23,42){
    console.log('Les nombres ne sont ni 23 ni 42')
}*/

/*
const agee=24;

ageMin=20;
ageMax=30;

if (agee>ageMin && agee<ageMax){
    alert("Trop cool, t'es dans le club");
} else if (agee<ageMin || agee>ageMax)
    alert("Looser, t'es trop nul");
*/



//Nous allons faire du booléen


let hasDriversLicense2=true;//A
let hasGoodVision2=true;//B

console.log(hasDriversLicense2||hasGoodVision2);
console.log(!hasGoodVision2);

const shouldDrive= hasDriversLicense2&&hasGoodVision2

if (hasDriversLicense2&&hasGoodVision2){
    console.log('Sarah est capable de conduire')
}else{
    console.log('Oulala, elle devrait pas conduire !')
}


const isTired2 =true;
console.log(hasDriversLicense2 && hasGoodVision2 && !isTired2);





let Dolphins=[88, 10, 11];
let Koalas=[88, 11, 100];

let totDol=0;
let totKol=0

let MoyDol=0;
let MoyKol=0;

let occurence =0;

for (i in Dolphins){
    totDol+=Dolphins[i];
    occurence +=1;
}
MoyDol=totDol/occurence;

occurence=0; 
for (i in Koalas){
    totKol+=Koalas[i];
    occurence++;
}
MoyKol=totKol/occurence;

/*
if (MoyDol>MoyKol){
    console.log("L'équipe gagnante est celle des dauphins");
}else if (MoyDol===MoyKol){
    console.log("Egalité parfaite, il faut faire la belle");
}else{
    console.log("Les Koalas sont les meilleurs, comme toujours !!!");
}*/

let minDol=true;
let minKol=true;


if (MoyDol<100){
    minDol=false;
}else{
    minDol=true;
}


if (MoyKol<100){
    minKol=false;
}else{
    minKol=true;
}

if (MoyDol>MoyKol && minDol){
    console.log("L'équipe gagnante est celle des dauphins");
}else if (MoyKol>MoyDol && minKol){
    console.log("Les Koalas sont les meilleurs, comme toujours !!!");
}else if (MoyDol===MoyKol && !minKol && !minDol){
    console.log("Egalite parfaite + vous êtes nul, il faut marquer min 100 points en moyenne");
}else if (MoyDol===MoyKol && minKol && minDol){
    console.log("pas de pot, beau match mais égalité de ses morts");
}else{
    console.log('Vous êtes juste trop nul....');
}

/*
for (i in Dolphins){
    if (Dolphins[i]<100){
        minDol=false;
    }
}

for (i in Koalas){
    if (Koalas[i]<100){
        minKol=false;
    }
}*/



//Switch

const day ='saturday';

switch(day) {
    case 'monday':  //day==='monday
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        console.log('Go to church');
        break;
    case 'wednsday': 
        console.log('Jerking off');
        break;
    case 'thursday':        //Same statement for both days
    case 'friday':  
        console.log('Record videos');
        console.log('Pee');
        break;
    case 'saturday':
        console.log('Chill in front of Movie');
        console.log('Just read a book');
        break;
    case 'sunday':
        console.log('Wake up');
        console.log('Go to church');
            break;
    default:                //préviens si on a pas de bons résultats
        console.log('Not a valid day !')
}





//Conditional operator

const age=23;
age>=18 ? console.log("I'd like to drink wine !") : console.log("It will be a Pepsi for me !");





const drink = age>=18 ? 'Wine' : 'water';
console.log(drink);     //Withoout this operator, it's less easy...


//Otherwise....
let drink2;
if(age>=18){
    drink2='wine';
}else{
    drink2='water';
}
console.log(drink2);

console.log(`I like to drink ${age>=18 ?'Wine' : 'Water'}`);



//Exercice 4 Encore une fois

let tip2;
let bill=430;

tip2 = (bill>=50&&bill<=300) ? bill*0.15 : bill*0.2;
 
console.log(`The bill was ${bill}, the tip was ${tip2}, and the total value is ${bill+tip2}`);























