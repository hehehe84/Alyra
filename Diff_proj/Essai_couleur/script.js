btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");


btn1.onclick = () => document.body.style.backgroundColor = "blue";
btn2.onclick = () => document.body.style.backgroundColor = "red";
btn3.onclick = () => document.body.style.backgroundColor = "yellow";
btn4.onclick = () => document.body.style.backgroundColor = "orange";
btn5.onclick = () => document.body.style.backgroundColor = "black";





let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;            //Exemple pour montrer l'opérateur addition


let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;   //Exemple pour montrer l'opérateur soustraction




//Nous allons maintenant montrer les opérateur += et -= pour ajouter fou soustraire des nombres à un total
let cookiesInJar2 = 10;
/* manger deux cookies */
cookiesInJar2 -= 2;  //il reste 8 cookies
/* cuisson d'un nouveau lot de cookies */
cookiesInJar2 += 12; // il y a maintenant 20 cookies dans la boîte


// avec l'opérateur ++ on a +1 et -- on a-1
let numberOfLikes = 10;
numberOfLikes++;  // cela fait 11
numberOfLikes--; // et on revient à 10...


//Opérateur Diviser et multiplier (logique)
let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts;

//Comme avec += et -+, on a les opérateurs *= et -=
let numberOfCats = 2;
numberOfCats *= 6;  // numberOfCats vaut maintenant 2*6 = 12;
numberOfCats /= 3;  // numberOfCats vaut maintenant 12/3 = 4;


let compteur = 0;
compteur++;
compteur = 10;





//On va travailler avec des constantes pour observer des manipulations simples avec des variables pour afficher un calculateur simple de minutes/Heures/jours

// Tout d'abord : initialisation des constantes:

const hoursPerDay = 24
const minutesPerHour = 60
const secondsPerMinute = 60

//Maintenant, nous allons avec nos constantes reproduire un compteur.

const dayInput = document.querySelector('#day-input');  //L'id' de la Page HTML "day-input" devient day-input dans le JS
const calculateButton = document.querySelector('#calculate-button'); // Même chose qu'en haut

//En réalité, "document" = page HTML liée et "querySelector" = recherche désirée de l'ID 

const hours = document.querySelector('#hours');   //Ici, nous affectons le fait que la page HTML aura une constante pour parler d'hours même si on ne la défini pas encore
const minutes = document.querySelector('#minutes');     //    Idem
const seconds = document.querySelector('#seconds');     //      Idem

calculateButton.addEventListener('click',() =>{
let days = dayInput.value;  // On attribut à la variable JOUR la valeur entrée dans le site par l'utilisateur
let calcHours = days*hoursPerDay;
let calcMinutes = calcHours*minutesPerHour;
let calcSeconds = calcMinutes*secondsPerMinute;

hours.innerText = `${calcHours} hours`
minutes.innerText = `${calcMinutes} minutes`
seconds.innerText = `${calcSeconds} seconds`
});




// On parle maintenant des types de variables
//EX : Nombres

let integerCalculation = 1 + 2;  // donne 3
let weirdCalculation = 0.1 + 0.2;  // on attend 0.3, réponse réelle 0.30000000000000004

//Ex : BOOLEENS

let userIsSignedIn = true;
let userIsAdmin = false;

//Ex :Chaînes de caractères

let firstName = "Will";
let lastName = 'Alexander';

//Les chaînes peuvent aussi être concaténées (ajoutées à la fin l'une de l'autre) par l'opérateur   +  

let wholeName = firstName + " " + lastName;  // valeur: "Will Alexander"

// Pour utiliser une variable dans un code, on utilise l'expression ${MaVariable} comme suit :

const myName = `Alexander`;
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation);   //retournera “Bienvenue sur mon site Alexander!” 

//On va maintenant créer des objets

let myBook = {
    title: 'The Story of Tau',
    author: 'Will Alexander',
    numberOfPages: 250,
    isAvailable: true
};
let bookTitle = myBook.title;  // "L'Histoire de Tao"
let bookPages = myBook.numberOfPages  // 250

//Ainsi, dans cet exemple, afin de récupérer la valeur clé, nous allons mettre : VarObjet.NomClé pour récupérer la clé de la valeur.

class book{
    constructor(titre,auteur,nbrPage){
        this.titre = titre;
        this.auteur = auteur;
        this.nbrPage = nbrPage;
    }
}

let monLivre = new book("L'histoire de ma Vie", "Antoine Picot", 333)


//btn1.onclick = () => document.body.style.backgroundColor = "blue";


function changeColor(element){
    var currentColor = element.style.backgroundColor;
        if(currentColor == "red"){
            element.style.backgroundColor = "green";
        } else {
            element.style.backgroundColor = "red";
        }
}

function myFunc(){
    document.getElementById("demo").innerHTML = "Hello Everyone !";
}

function myFunc2(){
    document.getElementById("demo2").style.color = "green";
    document.getElementById("demo2").style.fontWeight = "bold";
    document.getElementById("demo2").style.fontSize = "300%";
}

function hide(){
    document.getElementById("demo3").style.display = "none";
}

function show(){
    document.getElementById("demo3").style.display = "block";
}

// on essaie avec la console
var x = 10;
var t = 2;
var sum = x+t;

console.log(sum);

//maintenant interractions avec le html

function funkyFunc() {
    var a = 5;
    var b = 3;
    var sum2 = a + b;

    alert(sum2)
}


//Pas de soucis, à l'aide de ParseInt, nous avons transformé une chaîne de caractère en entier !!!!!!!!!!!!!

const nombre_1 = document.querySelector('#nombre1');
const nombre_2 = document.querySelector('#nombre2');
const Sommes = document.querySelector('#Sommes');

const Result = document.querySelector('#Result')

Result.addEventListener('click',() =>{
    
    n1 = parseInt(nombre_1.value);
    n2 =parseInt(nombre_2.value);
    
    var Somme = (n1)+(n2);

    Sommes.innerText = `${Somme} Brouettes`
});

    


//const hoursPerDay = 24
//
//const dayInput = document.querySelector('#day-input');  //L'id' de la Page HTML "day-input" devient day-input dans le JS
//const calculateButton = document.querySelector('#calculate-button'); // Même chose qu'en haut
//
//const hours = document.querySelector('#hours');
//calculateButton.addEventListener('click',() =>{
//let days = dayInput.value;  
//let calcHours = days*hoursPerDay;

//hours.innerText = `${calcHours} hours`
//});

//Essaies sur la console

let a1 = 5;

let b1 = 15;

let c1 = a1*(b1*5-a1)-3*a1

console.log("the value of a1 is : "+ a1);
console.log("the value of a1 is :", a1);
console.log("the value of a1+b1 is :", a1 + b1);
console.log(c1)



//Regrouper des données avec les tableaux ou les objets (array)

//Attention aux variables et leurs valeurs :

let numberOfGuests = 20;
let totalNumberOfGuests = numberOfGuests; // 20    Pas de soucis, transfert de la valeur entre les variables

//Par contre : 

let artistProfile = {
    name: "Tao Perkington",
    age: 27,
    available: true
};
let allProfiles = [artistProfile]; // nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false; // modification de l'objet
console.log(allProfiles) // affiche { nom: "Tao Perkington", âge: 27, disponible: false }   A revoir car pas simple simple 

let guest1 = []; // Création d'un tableau vide

//Nombre d'éléments dans un tableau :

let guests = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.length; // 3

let firstGuest = guests[0]; // "Will Alexander"
let thirdGuest = guests[2]; // "Audrey Simon"
let undefinedGuest = guests[12] // undefined

//Ajout d'un élément dans un tableau :

guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin de notre tableau guests

//Supprimer un élément dans un tableau :

guests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests

guests.pop(); // supprimer le dernier élément du tableau



//Quand on a la classe ci-dessous :
class Movie {
    constructor(title, director, duration) {
        this.title = title;
        this.director = director;
        this.duration = duration;
    }
}
//On  peut ajouter une nouvelle instance de classe comme ceci :
let firstMovie = new Movie("L'Histoire de Tao", "Will Alexander", 90);






//Déroulement du programme If/Else/Switch    

///!\ Très important de regarder les erreurs js sur le navigateur, ici, myBoolean n'était pas défini => Les fonctions par la suite ne s'exécutaient pas

let myBoolean = true;

if (myBoolean) {
    // réaction à la valeur vraie de myBoolean
    } else {
    // réaction à la valeur faux de myBoolean
}


let UserLoggedIn = true;

if (UserLoggedIn) {
   console.log("Utilisateur connecté!");
} else {
   console.log("Alerte, intrus!");
}

//En utilisant les valeurs de comparaisons :;

const numberOfSeats = 30;
const numberOfGuestss = 25;
if (numberOfGuestss < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}

//On peut alors enchainer les instructions if/else afin d'avoir de multiples conditions !

if (numberOfGuestss == numberOfSeats) {
// tous les sièges sont occupés
} else if (numberOfGuestss < numberOfSeats) {
// autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}




//Petit script sur JS afin de faire une confirmation d'âge, il s'agit en réalité de l'exo d'openclassroom ligne 94 sur le html

const espaceMessage = document.getElementById("message");  //On pointe sur l'élément de message
const bouton = document.getElementById("bouton");  //On pointe sur l'élément de bouton
const ageInput = document.getElementById("age");   //On pointe sur l'élément de champ de saisie de l'age

let age;      //On défini la variable age qu'on utilisera plus tard et une variable définissant l'age de la majorité
let ageMajorite = 18;



function valider(){                //Cette fonction affichera le message de validation écrit sur la page html
  espaceMessage.innerHTML = "Vous êtes autorisé à entrer";
}


function refuser(){                 //Cette fonction affichera un message d'erreur en alerte sur notre ordinateur
  alert("Cet espace est interdit aux personnes mineurs");
}




function onConfirm(){               //La fonction onConfirm est celle exécutée quand on clique sur le bouton !
  
    age = parseInt(ageInput.value);   //On récupère la saisie de l'age et on transforme le texte en nombre entier 
  
    if(isNaN(age)){                  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
      alert("Ceci n'est pas un nombre");
      return;
    }

    if(age < ageMajorite){           //petite boucle if pour valider la bonne tenue de notre code (confirme si on entre ou pas)
      refuser();
    }else{
      valider()
    } 
  
    ageInput.value = "";            //On vide le champ de saisie une foie le bouton cliqué

}


bouton.addEventListener('click', onConfirm);            //Click sur le bouton => appelle la fonction onConfirm

//Parlons maintenant des portes logiques :

let userLoggedIn = true;
let UserHasPremiumAccount = true;
let userHasMegaPremiumAccount = false;

userLoggedIn && UserHasPremiumAccount; // true
userLoggedIn && userHasMegaPremiumAccount; // false

userLoggedIn || UserHasPremiumAccount; // true
userLoggedIn || userHasMegaPremiumAccount; // true

!userLoggedIn; // false
!userHasMegaPremiumAccount; // true


//On ajoute des portes logiques au code précedent :

const espaceMessage2 = document.getElementById("message2");
const bouton2 = document.getElementById("bouton2");
const ageInput2 = document.getElementById("age2");
const parentalInput = document.getElementById("parental");
let age2;
let isControlParentalActive;

function valider2(){                //Valider "2" car espaceMessage2 est lié à message 2 dans la fonction ci-dessus
    espaceMessage2.innerHTML = "Vous êtes autorisé à entrer";
  }

function onConfirm2(){
  
age2 = parseInt(ageInput2.value);
    if(isNaN(age2)){
        alert("Ceci n'est pas un nombre");
        return;
    }

    isControlParentalActive = parentalInput.checked;
    
    if(age2 < ageMajorite && isControlParentalActive){
        refuser();
    }else{
        valider2()
    }
    ageInput2.value = "";
}

bouton2.addEventListener('click', onConfirm2);


//SWITCH EXEMPLE AVEC UNE CLASSE COMME CELLE CI

let firstUser = {                  //User 1
    name: "Will Alexander",
    age: 33,
    accountLevel: "normal"
};

let secondUser = {                  //User 2
    name: "Sarah Kate",
    age: 21,
    accountLevel: "premium"
};

let thirdUser = {               //User 3
    name: "Audrey Simon",
    age: 27,
    accountLevel: "mega-premium"
};


switch (firstUser.accountLevel) {
    case 'normal':
          console.log('You have a normal account!');
    
    break;
    case 'premium':
          console.log('You have a premium account!');
    
    break;
    case 'mega-premium':
          console.log('You have a mega premium account!');
    break;
    
    default:
          console.log('Unknown account type!');
}

//Utiliser des breaks est très important pour ne pas relever toutes les suites du code


//Switch permet de rendre plus visuel qu'un code comme celui-ci :

if (firstUser.accountLevel === 'normal' ) {
    console.log('You have a normal account!');
} else if (firstUser.accountLevel === 'premium' ) {
      console.log('You have a premium account!');
} else if (firstUser.accountLevel === 'mega-premium' ) {
      console.log('You have a mega premium account!');
}  else {
      console.log('Unknown account type!');
}








//Implémentation des boucles

const numberOfPassengers = 10;
for (let i = 0; i < numberOfPassengers; i++) {
   console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
   console.log("Embarquement du passager " + passengers[i]);
}

//Même résultat, différente écriture

for (let passenger of passengers) {
   console.log("Embarquement du passager " + passenger);
}


//On visualise l'inétrêt ddès que la liste est plus complexe :

const passengers2 = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers2) {
   console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}

let seatsLeft = 10;
let passengersStillToBoard = 8;
let passengersBoardedd = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoardedd++; // un passager embarque
    passengersStillToBoard--; // donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoardedd); // imprime 8, car il y a 8 passagers pour 10 sièges


//Erreur d'execution et petit exemple pour essayer d'aller contre !

//if (dataExists && dataIsValid) {
    // utiliser les données ici
//} else {
    // gérer l'erreur ici
//}

//try {
    // code susceptible à l'erreur ici
//} catch (error) {
    // réaction aux erreurs ici
//}

//boucle for d'exemple :


// Va afficher la valeur 2

const guestss = [
    {
        name: "Will Alexander",
        vip: false
    },
    {
        name: "Sarah Kate",
        vip: true
    },
    {
        name: "Audrey Simon",
        vip: true
    },
    {
        name: "Tao Perkington",
        vip: false
    }
];

let vips = 0;
let normies = 0;

for (let guest of guestss) {
    if (guest.vip) {
        vips++;
    }
}

// Va afficher la valeur 14

const passengerss = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
];

let passengersBoarded = 10;

for (let i in passengerss) {
    passengersBoarded++;
}

//Va afficher 5 "Oh hey!"

for (let i = 0; i < 5; i++) {
    console.log('Oh hey!');
}

//Va afficher "Important" !!! Car il manque le "break" pour ne pas faire d'erreur sur ce "switch". La valeur attendue est Normmal mais à cause de l'abscence de "break" on a perdu la valeur !!!

let vipStatus = "";

let guest = {
    name: "Sarah Kate",
    age: 21,
    ticket: true,
    guestType: "artist"
};

switch (guest.guestType) {
    case "artist":
        vipStatus = "Normal";
    case "star":
        vipStatus = "Important";
        break;
    case "presidential":
        vipStatus = "Mega-important";
        break;
    default:
        vipStatus = "None";
}

//Condition logique pour pouvoir continuer à embarquer dans l'avion : if(passengersRemaining || planeIsFull)

let passengersRemaining = true;
let planeIsFull = false;

let continueBoarding = false;

if (passengersRemaining || planeIsFull) { //Logique car PR est true tant qu'il reste à embarquer et plane is full est tout le temps false !
    continueBoarding = true;
}

