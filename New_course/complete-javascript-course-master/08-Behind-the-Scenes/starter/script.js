'use strict';


function calcAge(birthYear){        //Define in the global scope, (top code)
    const age = 2022-birthYear;

    function printAge(){
        let output = `${firstName}: You are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear>=1981 && birthYear<=1996){
            var millenial= true;        //Var print the str outside "if" block cause it ends up in the closest function scope
            const firstName='Steven';       //Change the name cause this variable is define here, the scope chain doesn't need to go upper. Outside of this function block, the variable is still 'Antoine'
            const str= `Oh, and you're a millenial, ${firstName}`;   //doesn't print str after if cause it's outside the scope
            // let str= `Oh, and you're a millenial, ${firstName}`;     //Same
            console.log(str);



            function add(a,b){
                return a+b;
            }
            // const output="New OUTPUT";  //We redefine a new variable that is only in this "if" block, this will not modify our cl after this "if" block...
            output="New OUTPUT";        //We redefine the variable from the parent scope
        }
        console.log(millenial);       //Works because var is 
        // console.log(add(2,3));       //Works only if we don't use strict mode 
        console.log(output);
    }

    printAge();
    return age;
}


const firstName = 'Antoine';        //glogabl variable in the global scope, will be available upper
calcAge(1996);

// console.log(age);
// printAge();

//Hoisting

//Variables
console.log(me);
// console.log(job);        In the temporal dead zone
// console.log(year);       In the temporal dead zone



var me='Antoine';

let job='student';
const year=1996;


//Functions
console.log(addDecl(1,4));      //We can call function declaration before it's define
// console.log(addExpr(1,4));   //We cannot call declaration cause it's a const variable, it's in the TDZ
// console.log(addArrow(1,4));  //Same than just above

function addDecl(a,b){
    return a+b;
}

const addExpr = function(a,b){
    return a+b;
}

const addArrow =(a,b)=>{
    return a+b;
}

        //We never declare a function with a "var", only with a const !!!!
// console.log(addArrow2(1,4));     //Error cause it's not a function
// var addArrow2 =(a,b)=>{
//     return a+b;
// }


//Example :

//Because of hoisting, in the

console.log(undefined);
if(!numProducts) deleteShoppingCart();

var numProducts=10;

function deleteShoppingCart(){
    console.log('All products deleted')
}

var x=1;
let y=2;
const z=3;
console.log(x===window.x);      //Variables declare with var are inside the window object, not really good

console.log(y===window.y);      
console.log(z===window.z);



