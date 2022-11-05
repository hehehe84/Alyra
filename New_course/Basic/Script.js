'use strict';

//Calculate t° amplitude : 

const temperature=[3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperature2=[9, -17, -8, 10, 'error', 9, 'error', 7, 15, 'error', 9, 5];

//1) Understand problem

//Amplitude : difference between highest and lowest Temp

//HOW can we compute max and min temp ?

//What's a sensor error ? What to do(ignore it)

//2) Breaking up into sub-prob

//How to ignore errors ?
//Find max value in temp array
//Find min temp array
//Substract min and max and turn it
/*
const calcAmpTemperature = function(temps){
    let maxx=temps[0];
    let minn=temps[0];
    for (let i=0; i<temps.length; i++){
        //if (typeof temps[i]!=='numbers') continue;        Shit caus if it's string, it just didn't count
            if(temps[i] < minn) minn=temps[i];
            if(temps[i] > maxx) maxx=temps[i];
    }
    console.log(maxx, minn)
    return (maxx-minn);
};
const amplitude=calcAmpTemperature(temperature);

console.log(amplitude);



//Problem 2, receive 2 arrays of temperature, we should merge

const tempMerge= temperature.concat(temperature2);

const amplitudefin=calcAmpTemperature(tempMerge);

console.log(amplitudefin);


const calcAmpTemperatureMerge = function(temps1,temps2){
    const tabl=temps1.concat(temps2);
    let maxx=tabl[0];
    let minn=tabl[0];
    for (let i=0; i<tabl.length; i++){
        //if (typeof temps[i]!=='numbers') continue;        Shit caus if it's string, it just didn't count
            if(tabl[i] < minn) minn=tabl[i];
            if(tabl[i] > maxx) maxx=tabl[i];
    }
    console.log(maxx, minn)
    return (maxx-minn);
};

const newamplitudefin=calcAmpTemperatureMerge(temperature,temperature2);

console.log(newamplitudefin);
*/
//DEBUGGING


const measurementKevin=function(){
    const measurement={
        type: 'temp',
        unit:'celcius',
        // value: (prompt('Degrees celcius:'))
        value: 10
    }
    console.table(measurement);
    const kelvin=measurement.value+273;
    return kelvin;
}

console.log(measurementKevin());


//Using a debugger

const calcTempAmplBUG = function(temps1,temps2){
    const tabl=temps1.concat(temps2);
    let maxx=tabl[0];
    let minn=0;
    for (let i=0; i<tabl.length; i++){
        //if (typeof tabl[i]!=='numbers') continue;     //   Shit caus if it's string, it just didn't count
            if(tabl[i] < minn) minn=tabl[i];
            if(tabl[i] > maxx) maxx=tabl[i];
    }
    console.log(maxx, minn)
    return (maxx-minn);
};

const amplitudeBug = calcTempAmplBUG([3,5,1],[9,4,5])

console.log(amplitudeBug);

//GThere is a bug cause 9-1=8, not 9

console.log('Challenge coding');


const temp1=[17, 21, 23]
const temp2=[12, 5, -5, 0, 4]


const printForecast = function(arr){
    let str='';
    for (let i=0; i<arr.length;i++){
        str+=`${arr[i]} °C in day ${i+1}...`;
        // console.log(`${arr[i]}°C in day ${i+1}`);
    }
    console.log(str); 
}

const res1=printForecast(temp1);
const res2=printForecast(temp2);

console.log(res1);

// const a='Jonas';
// first();

// function first(){
//     const b = "Hello!";
//     second();

//     function second(){
//         const c= 'Hi !';
//         third();
//     }
// }

// function third(){
//     const d = "Hey!";
//     console.log(d+c+b+a);
    
// }

console.log('This');

const antoine = {
    name:'Antoine',
    year:1996,
    calcAge:function(){
        return 2022-this.year;      //This is the object : antoine ; we can also call antoine.year but it less practical cause like that we can change the name of our object
    }
};
console.log(antoine.calcAge());

console.log('This in practice !!!');

console.log(this);  //Window object

const calcAge2 = function(birthYear){
    console.log(2022- birthYear);
    console.log(this);      //undefined cause we are in strict mode, not in strict =>this is the window object
};

calcAge2(1996);

const calcAgeArrow = birthYear=>{       //this point in the this keyword in the global scope
    console.log(2022- birthYear);
    console.log(this);      //In the arrow function, this is the one of the surroundings => It is the window ! cause this function is not in a bigger one that includes a this keyword
};                          //In an object, this would be the object or the arrow function...
                            //this keyword of the global scope => window
calcAgeArrow(1996);


//this for method
const antoine2 = {
    year:1996,
    calcAge:function(){
        console.log(this);      //this here point to antoine2 cause antoine2 was the object calling calcAge method...
        console.log(2022-this.year);
    }  
};
antoine2.calcAge();  //=>this is the object "antoine2";

const matilda = {
    year: 2017,
};

matilda.calcAge = antoine2.calcAge;     //method borrowing, like that we don't have to duplicate them

matilda.calcAge();      //"this" will be bring to matilda !, this is no more the one we have on antoine2
//this always point to the method (and here it's to matilda)...

//this is dynamic and depends the object/method we are calling

const f = antoine2.calcAge; //=>f is the function calcAge

// f();         //Undefined.year does not exist

// It's important to dig "this" once again

// var firstName='Matilda' Is used to illustrate that with arrow function, we create a variable in the window...

const antoine3 = {
    firstName:'Antoine',
    year:1996,
    calcAge:function(){
        console.log(this);      //this here point to antoine2 cause antoine2 was the object calling calcAge method...
        console.log(2022-this.year);
    },
    greet :() => console.log(`Hey ${this.firstName}`),
};

antoine3.greet(); //Hey undefined cause in the arrow function, "this" came from the surrounding. THe arrow function does not hav it's own "this"
console.log(this.firstName);

const antoine4 = {
    firstName:'Antoine',
    year:1996,
    calcAge:function(){
        console.log(this);      //this here point to antoine2 cause antoine2 was the object calling calcAge method...
        console.log(2022-this.year);

        //Solution 1
     // const self=this;
        // const isMillenial = function(){
        //     console.log(self.year);
        //     console.log(self.year=1981 && self.year<=1996);
        // }
        // isMillenial();

        // solution 2       With arrow function that doesn't have it's own this keyword so it use the one of the parent scope
        const isMillenial=() => {
            console.log(this.year);
            console.log(this.year=1981 && this.year<=1996);
        }
        isMillenial();
    },
    greet :() => console.log(`Hey ${this.firstName}`),
};
antoine4.calcAge();


const addExpr = function(a,b){
    console.log(arguments);
    return a+b;
};
addExpr(2,5);
addExpr(2,5,8,12);

var addArrow = (a,b)=>{
    // console.log(arguments); //Not defined so it will not recognize what is an argument
    return a+b;
};

console.log( addArrow(2,5,8));

console.log("Primitives vs Objects");

let age = 30;
let oldAge = age;
age = 31;

console.log(age);
console.log(oldAge);

const me ={
    name:"Jonas",
    age:30,
};

const friend=me;

friend.age=55;
console.log('friend',friend);
console.log('me',me);

//Problem, we have problem of order
console.log('in practice');
//Primitive types
let lastName='Picot';
let oldLastName= lastName;

lastName='Davis';

console.log(lastName,oldLastName);

console.log('Same thing with an object');


//Reference types
const Jessica ={
    firstName:"Jessica",
    lastName:"Williams",
    age:27,
};

console.log('Before marriage and before we get the new manip',Jessica);

const marriedJessica=Jessica;
marriedJessica.lastName='Davis';

console.log('BeforeMarriage',Jessica);
console.log('AfterMarriage',marriedJessica);

// marriedJessica  = {};  // We cannot change the value cause it's a new object.


//Copying objects
const Jessica2 ={
    firstName:"Jessica",
    lastName:"Williams",
    age:27,
    family:['Alice','Bob','Killian']
};

const JessicaCopy=Object.assign({}, Jessica2); //Merge 2 objects
//We create a new object JessicaCopy that is the merge between Jessica2 and an empty object.
JessicaCopy.lastName='Davis';


console.log('Before marriage',Jessica2);
console.log('After Marriage',JessicaCopy);

JessicaCopy.family.push('Mary');
JessicaCopy.family.push('John')

console.log('Before marriage familymember',Jessica2);
console.log('After Marriage familymember',JessicaCopy);

//Cause we manipulate an object inside an object. With manipulation of the object, everythin is change inside the other one...

const tabl1={
    type1:'azerty',
    type2:'Dingue',
    type3:44,
    type6:['Alice','Bob','Killian']
};

const tabl2={
    type4:'azertyuiop',
    type5:'Dingo',
    type3:69,
}

const tabl3 =  Object.assign(tabl1,tabl2)

console.log(tabl3);



