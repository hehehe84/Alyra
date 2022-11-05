function afficherDeuxValeurs(V1, V2){
    console.log('Première Valeur : ' + V1);
    console.log('Deuxième Valeur : ' + V2);
}

//Pour exécuter la fonction, nous écrivons : 
afficherDeuxValeurs(12,'Bonjour');

//La console affiche :
// > Première valeur:12 
// > Deuxième valeur:Bonjour 

//Exemple d'OC

//let noteTot = 0
//let nombreElem = 0
//let moyenne = 0
//function moyenne(tableau) {               Il est bien meilleur de déclarer les variables dans la fonction !!!
//    for (let i in tableau)  {
//        noteTot += tableau[i];
//        nombreElem += 1;
//    }
//    moyenne = noteTot/nombreElem
//}

const calculateAverageRating = (rating) => {
    if (rating.lenght === 0) {
        return 0;
    }

    let sum = 0;
    //let conteur = 0;
    //for (let i in rating) {
    //    sum += rating[i];
    //    conteur ++;
    //}
    //return sum/conteur;
    for (let i of rating){
        sum += i;
    }
    return sum / rating.length;
}

//Pour calculer les valeurs de moyenne, j'ai utilisé deux méthodes différentes : 
// for (let i "in" rating) on nous avons un conteur i qui parcour le tableau
// for (let i "of" rating) où "i" est la valeur de l'élément que nous examinons

const Rate1 = [5, 4, 5, 5, 1, 2];
const Rate2 = [5, 3, 5, 4, 5];
const Rate3 = [3, 5, 2]


const Moy1 = calculateAverageRating(Rate1);
const Moy2 = calculateAverageRating(Rate2);
const Moy3 = calculateAverageRating(Rate3);

//if (Moy1 && Moy2 && Moy3) {
//    document.querySelector('#score1').innerText = Moy1.toFixed(1) + ' Stars';
//    document.querySelector('#score2').innerText = Moy2.toFixed(1) + ' Stars';
//    document.querySelector('#score3').innerText = Moy3.toFixed(1) + ' Stars';
//}

if (Moy1 && Moy2) {
    document.querySelector('#score1').innerText = Moy1.toFixed(1) + ' stars';
    document.querySelector('#score2').innerText = Moy2.toFixed(1) + ' stars';
    document.querySelector('#score3').innerText = `${calculateAverageRating([]) === 0 ? 'No ratings' : Math.round(calculateAverageRating(Rate3)*10)/10 + ' stars'}`
  }

//Ligne 66, j'ai mis Math.round(calculateAverageRating(Rate3)*10)/10 car grâce à cela, nous arrondissons le nombre à 1 chiffre après la virgule. De même, à deux chiffres après la virgule, nous mettons : Math.round(calculateAverageRating(Rate3)*100)/100

//pour parcourir chaque élément du tableau  :

//for (let elementDeTableau of monTableau) {   //Mon tableau est un tableau déjà existant mais elementDeTableau est une variable, on peut l'appeler "i" par exemple
//    console.log(elementDeTableau); //Affiche les éléments du tableau
//}

//Méthodes d'instance, exemple avec bankAccount


//Création d'une classe "classique"
class bankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}

const newAccount = new bankAccount("Antoine Picot", 1000);

//Création d'une classe avec instance

class bankAccount2 {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    showBalance(){
        console.log("Solde : "+ this.balance + " £ ")
    }
}

const newAccount2 = new bankAccount2("Greta Front", 2000);

newAccount2.showBalance(); //Imprime dans la console "Solde : 2000 £ "

class bankAccount3 {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    showBalance(){
        console.log("solde : "+this.balance + " $");
    }

    deposit(amount){
        console.log("Dépôt de " + amount + " $");
        this.balance += amount;
        this.showBalance();
    }

    withdraw(amount){
        if (amount > this.balance){
            console.log("Retrait impossible. Solde trop bas !");
        }else{
            console.log("Retrait de " + amount + " $")
            this.balance -= amount;
            this.showBalance();
        }

    }
}

const newAccount3 = new bankAccount3("Jim The Boss", 5000);

newAccount3.showBalance();
newAccount3.deposit(300);
newAccount3.withdraw(5);
newAccount3.withdraw(40000);
//A chaque fois, la balance est actualisé en interne. c'est cool !


//Exercice sur OC A Regarder plus tard car là c'est un peu chaud !


class Showw{
    constructor(title, numberOfSeasons){
    this.title = title;
    this.numberOfSeasons = numberOfSeasons;
    this.ratings = [];
    this.averageRating = 0;
    }


    addRating(rating){
        this.ratings.push(rating);
        let sum = 0;
        for (let rating of this.ratings){
            sum += rating;
        }

        this.averageRating = sum / this.ratings.length;
    }
}

const tau = new Showw('The Story of Tau', 5);
const colin = new Showw('Les histoires en Mer', 6);
const pepa = new Showw('Peppa Pig', 20);

const shows = [tau, colin, pepa];

const Test = document.querySelector('#Test');
const refresh = document.querySelector('#refresh');

refresh.addEventListener('click', () =>{
    removeShows();
    addRandomRatings();
    updateShows();
})

const updateShows = () =>{
    for (let show of shows) {            //show est notre indentateur
        const showPane = document.createElement('div');
        showPane.classList.add('border-frame');

        const showHeading = document.createElement('h2');
        showHeading.innerText = show.title;

        const showDetails = document.createElement('p');

        const seasons = document.createElement('p');
        seasons.innerText = show.numberOfSeasons + ' seasons';

        const ratings = document.createElement('p');
        ratings.innerText = show.averageRating > 0 ? show.ratings.length + ' ratings\n' + show.averageRating.toFixed(1) + 'stars' : 'No ratings yet';

        showDetails.append(seasons);
        showDetails.append(ratings);
        showPane.append(showHeading);
        showPane.append(showDetails);
        Test.append(showPane);
    }

};

const removeShows = () => {
    const children = [];
    for (let childNode of Test.childNodes) {
        children.push(childNode);
    }
    for (let child of children) {
        if (child.tagName == 'DIV') {
            Test.removeChild(child);
        }
    }
}

const addRandomRatings = () => {
    for (let show of shows) {
        if (Math.random() >= 0.2) {
            const numberOfRatings = Math.floor(Math.random() *4 +1);
            for (let i = 0; i < numberOfRatings; i++) {
                const rating = Math.floor(Math.random() *5 + 1);
                show.addRating(rating);
            }
        }
    }
}

updateShows();

//Méthodes statiques !


const randomNumber = Math.random(); // crée un nombre aléatoire sur l'intervalle [0, 1]

const roundMeDown = Math.floor(495.966); // arrondit vers le bas à l'entier le plus proche, renvoie 495

const roundMe = Math.round(234.6);

console.log(randomNumber);
console.log(roundMeDown);
console.log(roundMe);


//Il est possible de créer nos propres méthodes statistiques en utilisant le mot "static"

class BePolite {
    
    static sayHello() {
        console.log("Hello !");
    }

    static sayHelloTo(name) {
        console.log("Hello " + name + " !");
    }

    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); //Return "Hello !"

BePolite.sayHelloTo("Greta"); //Return "Hello Greta !"

BePolite.add(3, 4);//Sum 7

console.log(BePolite.add(3, 4));//Affiche 7

//Ecrire un code PROPRE !!!

//1 : Ecrire une fonction pour ne pas se répéter dans le code !
const firstUser = "f";
const secondUser = "ff";
const thirdUser = "fff";

if (firstUser.online) {
if (firstUser.accountType === "normal") {
    console.log("Hello " + firstUser.name + "!");
} else {
    console.log("Welcome back premium user " + firstUser.name + "!");
}
   
}
if (secondUser.online) {
if (secondUser.accountType === "normal") {
    console.log("Hello " + secondUser.name + "!");
} else {
    console.log("Welcome back premium user " + secondUser.name + "!");
}
}

if (thirdUser.online) {
if (thirdUser.accountType === "normal") {
    console.log("Hello " + thirdUser.name + "!");
} else {
    console.log("Welcome back premium user " + thirdUser.name + "!");
}
}

//Ce code se répéte, est long et fastidieux, à la pace, nous pouvons écrire la fonction :

const sendWelcomeMessageToUser = (user) => {
    if (user.online) {
        if (user.accountType === "normal"){
            console.log("Hello "+ user.name + " !");
        }else{
            console.log("Hello back premium user "+user.name + " !");
        }
    }
}

sendWelcomeMessageToUser(firstUser);
sendWelcomeMessageToUser(secondUser);
sendWelcomeMessageToUser(thirdUser);

//Créer cette fonction nous a ainsi permis de faciliter l'affichage du message de bienvenue de chaque utilisateur 

//Autre exemple avec la classe ci-dessous :

class Show33 {
    constructor(title, numberOfSeasons, episodesPerSeason) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.episodesPerSeason = episodesPerSeason;
  }
}

const tau2 = new Show33('The Story of Tau', 5, 12);
const meldrum = new Show33('The Hero of Old Meldrum', 3, 6);
const clara = new Show33('The Bugs of Isla Clara', 6, 15);

const showss = [tau2, meldrum, clara];

//Le code répété est le suivant : 

const tauTitleText = tau2.title;
const tauSeasonsText = tau2.numberOfSeasons + ' seasons';
const tauEpisodesText = tau2.episodesPerSeason + ' episodes per season';
const tauComponent = {
  titleText: tauTitleText,
  seasonsText: tauSeasonsText,
  episodesText: tauEpisodesText
};

const meldrumTitleText = meldrum.title;
const meldrumSeasonsText = meldrum.numberOfSeasons + ' seasons';
const meldrumEpisodesText = meldrum.episodesPerSeason + ' episodes per season';
const meldrumComponent = {
  titleText: meldrumTitleText,
  seasonsText: meldrumSeasonsText,
  episodesText: meldrumEpisodesText
};

const claraTitleText = clara.title;
const claraSeasonsText = clara.numberOfSeasons + ' seasons';
const claraEpisodesText = clara.episodesPerSeason + ' episodes per season';
const claraComponent = {
  titleText: claraTitleText,
  seasonsText: claraSeasonsText,
  episodesText: claraEpisodesText
};

const showComponents = [tauComponent, meldrumComponent, claraComponent];

//Transformé en ceci :

const generateComponent = (show) => {
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + ' episodes per season';
    return {
      titleText,
      seasonsText,
      episodesText
    };
  }
  
  const tauComponent2 = generateComponent(tau);
  const meldrumComponent2 = generateComponent(meldrum);
  const claraComponent2 = generateComponent(clara);
  
  
  const showComponents2 = [tauComponent2, meldrumComponent2, claraComponent2];


  //L'intérêt de nommer une belle fonction :

  const printStringStatsv0 = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    const wordCount = wordArray.length;
    let letterCount = 0;
    
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        letterCount += word.length;
    }

    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
        wordCount: wordCount,
        letterCount: letterCount,
        averageWordLength: averageWordLength
    };
    
    console.log(stringStats);
}

//Code avec un nom descriptif mais trop de fonction à l'intérieur, il set difficile de comprendre réellement ce qu'il se passe.
//ci-dessous, nous avons une version dite : "re-factorisée"

const TTTTEST = "Bonjour, je m'appelle Antoine Picot et j'ai vingt-six ans"

const getWordCount = (stringToTest) => {            //Fonction retournant le nombre de mots compris dans une phrase
    const wordArray = stringToTest.split(" ");
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    let totalLetters = 0;

    for (let word of wordArray){
        word.replace(/[.,\/#!$%\^&\*;:{}=\-`~()]/g, ""); //Retire les ponctuations pour ne compter que les lettres
        totalLetters += word.length;
    }

    return totalLetters;
}


//Renvoie à la longueur moyenne des mots arrondie à deux chiffres après la virgule.
const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest))/getWordCount(stringToTest)).toFixed(2);
}           

const printStringStats = (stringToTest) => {
    console.log({
        wordCount: getWordCount(stringToTest),
        letterCount: getLetterCount(stringToTest),
        averageWordLength: getAverageWordLength(stringToTest)
    });
}

printStringStats(TTTTEST);

const lc = (s) => {                     //Comptage de lettre sans nom clair, c'est ballot
    const w = s.split(' ');
    let l = 0;
    for (let wel of w) {
        wel.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        l += wel.length;
    }
    
    return l;
}


//Mise en forme d'un code sympa avec les accolades.
//if (condition) {
//    doTheThing();
//} else {
//    doTheOtherThing();
//}
//if (condition)
//{
//    doTheThing();
//}
//else
//{
//    doTheOtherThing();
//}




//Mise en place de test pour voir la soliditer de notre code :

//Soit les fonctions précédemment écrites :
const getWordCount2 = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
}

const getLetterCount2 = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
        
    }

    return totalLetters;
}

//Ici, nous pouvons nous assurer que getWordCount fonctionne et pour celà ,il nous faut connaître un nombre de mots exact d'une phrase
//et faire un test avec une chaîne vide de mot comme suit : 

const testSimpleWordCount = () => {
    const testString = 'I have four words!';
    if (getWordCount2(testString) !== 4) {
        console.error('Simple getWordCount failed!');
    }
}

const testEdgeWordCount = () => {
    const testString = '             ';
    if (getWordCount2(testString) !== 0) {
        console.error('Edge getWordCount failed!');
    }
}

//Pour notre fonction getLetterCount, nous vérifions de la même manièree avec un nombre de lettre connu et un test avec un nombre de mots vide :
const testSimpleLetterCount = () => {
    const testString = 'I have twenty one letters!';
     if (getLetterCount(testString) !== 21) {
         console.error('Simple getLetterCount failed!');
     }
 }
 
 const testEdgeLetterCount = () => {
     const testString = '")(&;//!!';
     if (getLetterCount(testString) !== 0) {
         console.error('Edge getLetterCount failed!');
     }
 }


 //L'utilisation de console.error est ici important pour afficher les erreurs directement sur la console.
 //Une autre architecture de test pour getWordCount pourrait être : 

//describe('getWordCount2()', function() {
//    it('should find four words', function() {
//        expect(getWordCount2('I have four words!').to.equal(4));
//    });

//    it('should find no words', function() {
//        expect(getWordCount2('      ').to.equal(0));
//    });
//});




//DEBOGUER LA FONCTION


const getWordCountBOG = (stringToTest) => {
    const wordArray = stringToTest.split('');
    return wordArray.length;
}
//Pour observer le bog, nous affichons la console :
const getWordCountBOG2 = (stringToTest) => {
    const wordArray = stringToTest.split(''); //Le problème se situe à l'appel du split : "" au lieu de " ". Ainsi on split les lettres et pas les mots.
    console.log("Word array in getWordCount: ");
    console.log(wordArray);
    return wordArray.length;
}

getWordCountBOG2('I am a fish');

//Exemple console.log

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const anneeInput = document.getElementById("annee");

let params = [];
for(let i = 20; i > 0; i--){
  params.push(i);
}

//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let annee;

function onConvert(){  
  
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  annee = parseInt(anneeInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(annee)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  const mois = annee * params[8]; //Initialement, si on met params[12], on observe dans la console que params[12] = 10. ICI, params[8]=12. On choisira donc cette valeur pour afficher le bon nombre d'année
  
  console.log('annee', annee);
  console.log('params', params);
  
  espaceMessage.innerHTML = annee + " années font " + mois + "mois ";
}



//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener('click', onConvert);

//Récursivité et exemple de recherche binaire :

//Ici, nous avons une approche qui va être dite classique, lente car nous allons parcourir tout les éléments de notre tableau
const findElement = (array, thingToFind) => {
    for (let element of array) {
        if (element === thingToFind) {
            return true;
        }
    }
    return false;    //False quand après avoir parcourue tout les éléments, nous ne trouvons pas celui que nous voulions.
}

//Un moyen d'optimiser le code serait de faire une approche récursif de celui-ci !

//Ici nous partons sur un tableau déjà trié pour pouvoir effectuer notre code. Il faut s'entraîner avec un non trier pour créer une fonction efficace.


const binarySearch = (array, thingToFind, start, end) => {  
    if (start>end){         //Par la suite, nous observons que "end=mid-1" ou "start=mid+1" dans la fonction, si start>end => la récursivité est arrivé à l'échelon max
        return false;       //Cette fonction est dite le base Case.
    }
    
    
    let mid = Math.floor((end+start)/2);               //Ici nous utilisons les indexs plutôt que .length car à l'aide de ces index, nous pouvons discriminer les parties du tableau qui ne nous plaisent pas par la suite de la récursivité
    if (array[mid] === thingToFind) {
        return true;
    }
    
    if (thingToFind < array[mid]) {
        //Recherche Première moitié
        return binarySearch(array, thingToFind, start, mid-1);

    }else{
        //Recherche deuxième moitié
        return binarySearch(array, thingToFind, mid+1, end);
    }

}


//Exemple avec la factorielle : 

//On pointe l'élément du message :
const espaceMessage2 = document.getElementById("message2");
//On pointe l'élément du bouton :
const bouton2 = document.getElementById("bouton2");
//On pointe sur l'élément de champ saisie du nombre entré par l'utilisateur :
const numberInput2 = document.getElementById("number2");

let number2;

//Fonction factorielle
function factorielle(number2){
    if (number2<=1){
        return 1;
    }else{
        return (number2*(factorielle((number2)-1)));
    }
}




//Fonction affichant le résultat :

function onCalcul() {
    //On récupère la saisie de l'année et on transforme le texte en nombre entier :
    number2 = parseInt(numberInput2.value);
    //Si la saisie n'est pas un nombre, on affiche un message d'erreur :
    if(isNaN(number2)){
        alert("Ceci n'est pas un nombre");
        return;
    }
    espaceMessage2.innerHTML = "La factorielle de " + number2 + " est " + factorielle(number2);
}

//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton2.addEventListener('click', onCalcul);

//Résumé des différentes choses que l'on a vu pendant le cours :

//Variable différente
let maVariable = "Contenu de la variable";

//Création constante
const maConstant = "Production";

//Créqtion d'un type
let monTableau = ['a','b','c']; let monNombre = 123;

//Les variables number s'additionnent, se soustraient,...
//Les string peuvent être convertis en maj avec maString.toUpperCase()

//Programmation d'objets orientés POO

//Classes
class MaClass{}

//Instances :

let monInstance = new MaClass();
//Propriétés, attributs :

class Maison{

    constructor(couleur){
        this.couleur = couleur;
    }

}

let maMaison = new Maison('rouge');
console.log(maMaison.couleur) // Donnera “rouge”

//Méthodes de classes :

class Maison2{

    constructor(couleur){
        this.couleur = couleur;
    }
    
    changerCouleur(nouvelleCouleur){
        this.couleur = nouvelleCouleur;
    }

}

let maMaison2 = new Maison2('rouge');
console.log(maMaison.couleur) // Donnera “rouge”
maMaison2.changerCouleur('bleu')
console.log(maMaison.couleur) // Donnera “bleu”


//Collections (Array et objects)

//Array :
let monArray = ['a','b','c'];

console.log(monArray[0]); // donnera ‘a’ car c’est le premier élément du tableau

//Object :
let monObject = { nom: "Jean", prenom: "Dupond", age: 26};

console.log(monObject.age); // donnera 26

console.log(monObject['age']); // donnera aussi 26

//Bloc de code :
if(condition){

    // Dans le bloc if
    
}

//Indentations

if(condition){

    console.log("Cette ligne est bien indentée");

    console.log("Cette ligne est mal indentée");

}


//Opérateurs logiques :
if(condition1 && !condition2){

    console.log("Cette ligne s’affiche si condition1 est vrai ET si condition2 n’est pas vrai");

}

//Exceptions

try {

    fonctionQuiRetourneUneException();

} catch(e) {

    console.log("il y a une Exception: "+e.getMessage());

}

//Paramètres de fonctions : 

function maFonction(parametre1){

console.log(parametre1) // On a affiche la valeur du paramètre
    
    // Traitement
    
}

//Arguments de fonctions :

let monArgument = "Bonjour";

maFonction(monArgument); // On obtient un log disant “Bonjour”

//Recursivité :

function factorielle2(number){

if(number <= 1) return 1;
    
else return (number * factorielle2(number-1));
    
}