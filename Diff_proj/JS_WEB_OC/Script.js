const myAnchor = document.getElementById('my-anchor');


const contents = document.getElementsByClassName('content1');
const firstContent = contents[0];

const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];

const elt = document.querySelector("#myId p.article > a");
//Retournera uniquement le "lien 6"

//Sur les recherches depuis l'élément :
const elt2 = document.getElementById('main');
console.log(elt2.children);         //Renvoie tout les éléments enfant du main, 2 éléments de type "p"
console.log(elt2.parentElement);    //Retourne toute la div qui a l'id "parent"
console.log(elt2.nextElementSibling);//Retourne l'id "suivant"
//console.log(elt2.previousElementSibling);//Retourne l'id Précédent

//Essaie sur OpenClassroom Exercice :

let listeEl = document.querySelector("article > ul.important > li")

console.log(listeEl.nextElementSibling);

console.log("#main-content", document.getElementById("main-content"));

console.log(".important", document.getElementsByClassName("important"));

console.log("article", document.getElementsByTagName("article"));

const liItem = document.querySelector("article ul.important > li");
console.log("article ul.important > li", liItem);
console.log("nextElementSibling", liItem.nextElementSibling);

//InnerHTML et textContent

let elt1 = document.getElementById('main1');
elt1.innerHTML = "<ul><li>Element 1</li><li>Element 2</li></ul>";

//const test1=document.querySelector('p class="Test"');
const liens = document.querySelectorAll("a"); //On sélectionne tout les liens que l'on à a disposition.
const titre = document.querySelector("h1.T1"); //On sélectionne le titre h1 avec la classe T1;
 
// console.log(liens); length = 19, lien add=[16], Remove=[17], Toggle=[18] (premier element =[0])
liens[16].addEventListener("click", function() {    //Cette fonction va supprimer la précédente class pour en créer la nouvelle : Tastadd
    titre.classList.remove("T1");
    titre.classList.add("Testadd");
    preventDefault();
})
liens[17].addEventListener("click", function() {    //Cette fonction fait retourner le titre en class "normale". Il est à noter qu'on peut directement utiliser après la fonction Add() après étant donner que supprimer une classe est faisable à l'infini sans erreur. 
    titre.classList.remove("T1");
    titre.classList.remove("Testadd");      //A pour but de supprimer la class Testadd si nous avons au préalable cliqué sur "Add"
    preventDefault();
})

liens[18].addEventListener("click", function() {
    titre.classList.toggle("Testadd");      //Toggle ="on/off" Si un élément de la classe demandée (Testadd) est présent on l'éteint, si un élément est abscent on l'ajoute !
    preventDefault();
})


const elt3 = document.getElementsByClassName('Test');
//elt3[0].classList.remove("Test"); //Supprime la classe nouvelleClasse que l'on venait de créer
//elt3[0].classList.add("nouvelleClasse"); //Ajoute la classe nouvelleClasse à l'élément
elt3[0].classList.replace("Test","nouvelleClasse"); //Remplace oldClass par newClass si oldClass était présente sur l'élément.

//elt3[0].classList.contains("Test"); //Retourne false car nous venons de la supprimer.
const elt4 = document.querySelector("p.Test2");
elt4.style.backgroundColor="#E1E1E1";
elt4.style.color = "#666";

//On obtient l'attribut du petit paragraphe :
var eltatt = document.querySelector("p.attTest");
console.log(eltatt.getAttribute("class"));
//On modifie cet attribut en une nouvelle classe
eltatt.setAttribute("class", "nouvelleClasse");
//Nous changeons la classe, de attTest à nouvelleClasse !



//Exemple modification de l'attribut d'un bouton Hello World ! (Exemple MozillaDevelopper)
var hellWorld = document.querySelector("button.AZERTY");

hellWorld.setAttribute("name", "helloButton");
hellWorld.setAttribute("disabled", "");





//let eltMyst = document.querySelector();

//En règles générales :
//eltMyst.setAttribute("type", "password");   // Change le type de l'input en un type password
//eltMyst.setAttribute("name", "my-password");    // Change le nom de l'input en my-password
//eltMyst.getAttribute("name");               // Retourne my-password


//Créer de nouveaux Elements (Et ajouter ces "enfants" dans notre page)

const newElt = document.createElement("div");       //Création d'un élément de type "DIV", non rattaché au DOM
let newnewelt = document.getElementById("main3");   //Récupération de l'élément ayant pour id "main3"

newnewelt.appendChild(newElt);                       //Ajout de l'élément enfant dans l'élément "main"

newnewelt.removeChild(newElt);                       //Supprime l'élément newElt de l'élément newnewelt.
//newnewelt.replaceChild(document.createElement("article", newElt)); //Remplace newElt par un elt de type "article"


//Exercice JS


let p = document.createElement("p");
let newElement = document.getElementById("mainExo");
newElement.appendChild(p);

p.innerHTML = "Mon <strong>grand</strong> contenu";

p.classList.add("important");
p.style.color = "gold";

//Pas mal du tout pour capter !!


//Ecoute des événements :

//événement onClick

const eltt = document.getElementById('mon-lien'); //On récupère l'élément sur lequel on veut détecter le clic
eltt.addEventListener('click',function(){
    
    eltt.innerHTML = "C'est cliqué !"; //Change le contenu de notre élément pour afficher "c'est cliqué"
});

const eltt2 = document.getElementById('mon-lien2'); // On récupère l'élément sur lequel on veut détecter le clic

eltt2.addEventListener('click', function(event){    // On écoute l'événement click, notre callback prend un paramètre que nous avons appelé event ici
    eltt2.innerHTML = "c'est cliqué !";
    event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
})

//stopPropagation()

//elementInterieur.addEventListener('click', function(event) {
//    event.stopPropagation();
//    elementAvecMessage.innerHTML = "Message de l'élément intérieur";
//});


//Exemple OC
let parent_click = 0;
let enfant_click = 0;
let cont_parent=document.getElementById('parent-count')
let cont_enfant=document.getElementById('child-count')

pareent=document.getElementById('parent');
pareent.addEventListener('click', function(){
  cont_parent.innerText=(++parent_click)+'';
})

enfantt=document.getElementById('child');
enfantt.addEventListener('click', function(e){
  cont_enfant.innerText=(++enfant_click)+'';
  e.preventDefault();
  e.stopPropagation();
})


//Exercice trouvé sur internet

let togg1=document.getElementById("togg1");
let togg2=document.getElementById("togg2");
let d1=document.getElementById("d1");
let d2=document.getElementById("d2");

togg1.addEventListener('click', function() {
    if(getComputedStyle(d1).display != "none"){
        d1.style.display="none";
    } else {
        d1.style.display="block";
    }
})

//Sachant que : togg1.addEventListener('click', function() {
//Exactement pareil que :
//togg1.addEventListener('click',() => {

//Nous utilisons une autre manière de rentrer la fonction pour togg2

function togg() {
    if(getComputedStyle(d2).display != "none"){
        d2.style.display="none";
    }else{
        d2.style.display="block";
    }
}
togg2.onclick = togg;

let d3=document.getElementById("d3");
let d4=document.getElementById("d4");
let p1=document.getElementById("p1");
let ul1=document.getElementById("ul1");

d3.addEventListener('mouseover',function() {
    p1.style.display = "block";
});

d3.addEventListener('mouseout', () => {
    p1.style.display = "none"; 
})


function aff(){
    ul1.style.display = "block";
}

d4.onmouseover = aff;

function ret(){
    ul1.style.display = "none";
}
d4.onmouseout = ret;


//Super Exo !!!!


//Mousemove avec OC :


//mouvement_souris.addEventListener('mousemove', function(event) {
//    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
//    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
//});

//Exemple du change : 

const selectElement = document.querySelector('.ice-cream');

selectElement.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  result.textContent = `You like ${event.target.value} Ice-cream ! Gros dégueulasse !!`;
});





const input = document.querySelectorAll('input');
const log = document.getElementById('log');

function updateValue(e) {
    log.textContent = e.target.value;
  }

input[0].addEventListener('change', updateValue);


//On n'utilise plus change mais input !

const log2 = document.getElementById('valuenew');
input[1].addEventListener('input', updateValue2);

function updateValue2(e) {
    log2.textContent = e.target.value;
}


//Exo récup données utilisateurs !!!*


//const name2 = document.querySelector('name');
const resname = document.getElementById('res-name');

function updateValue3(e) {
    resname.textContent = e.target.value;
}

input[2].addEventListener('change',updateValue3);  //Dans mon exemple


const genre = document.getElementById('gender');


genre.addEventListener('change', (event) => {
    const res_gender = document.getElementById('res-gender');
    res_gender.textContent=`${event.target.value}`;
});

//On va tenter avec la doc de déterminer la pos de la souris sur notre petit résultat de form


const result2 = document.getElementById('result2');


result2.addEventListener('mousemove', e => {
    const mouse_x = document.getElementById('mouse-x');
    mouse_x.innerText = e.offsetX;
    const mouse_y = document.getElementById('mouse-y');
    mouse_y.innerText = e.offsetY;
});


//Récupérer les données d'un service WEB : Avec les données au format JSON.

fetch('https://mockbin.com/request')
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {
  console.log(value);
})
.catch(function(err) {
  // Une erreur est survenue
});

//Exo OC sur les API et les données au format JSON
function askHello() {
    fetch('https://mockbin.com/request?greetings=salut')
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        val_res = document.getElementById('hello-result');           // Ici, pour afficher le résultat, nous utilisons : console.log(value); Cependant, nous modifions cette ligne de code pour l'implémenter dans notre HTTP.
        val_res.innerText = value.queryString.greetings;
    })
    .catch(function(err) {
        //Une erreur est survenue
    });
};

let clicc = document.getElementById('ask-hello');

clicc.addEventListener('click', askHello);

//Autre manière d'écrire :

//function askHello() {
//    fetch("https://mockbin.com/request?greetings=salut")
//    .then(function(res) {
//       if (res.ok) {
//         return res.json();
//       }
//     })
//     .then(function(value) {
//       document
//           .getElementById("hello-result")
//           .innerText = value.queryString.greetings;
//     })
//     .catch(function(err) {
//       // Une erreur est survenue
//     });
//   }
  
//   document
//     .getElementById("ask-hello")
//     .addEventListener("click", askHello);

let myInput = document.getElementById('myInput');





myInput.addEventListener('input',function (e){
    var value = e.target.value;
    var isValid = Boolean();        //Ne pas oublier de créer le booléen pour tester le code
    let Att = document.getElementById('Att');
    if(value.startsWith('Hello ')) {
        isValid.true;
        Att.innerHTML = "C'est bien FDP !";
    }else{
        isValid.false;
        Att.innerHTML = "Essaie encore !";
    }
});



let Regex = document.getElementById('InputRegex');

function isValid2(value) {
    return /^e[0-9]{3,}$/.test(value);
}
// console.log(isValid2('e3432'));     Retourne True !
// console.log(isValid2('e32'));     Retourne False !

Regex.addEventListener('input', function(e) {
    let Att2 = document.getElementById('Att2');

    var value = e.target.value; //Element aidant à actualiser la valeur.

    IVal = isValid2(value);
    if (IVal == true) {
        Att2.innerHTML="Bien-ouej !";
    }else{
        Att2.innerHTML="Cherche toujours...";
    }
});

//Exercice OC donné en HTML

let codeok = document.getElementById('code');

function isValid3(value) {
    return/^CODE-/.test(value);
}

//La fonction qui suit est intéressante à creuser !!!

function disableSubmit(disabled) {      
    btnAvailable = document.getElementById('submit-btn');
    if (disabled) {
        btnAvailable.setAttribute('disabled', "true");
    }else{
        btnAvailable.removeAttribute('disabled');
    }
};

codeok.addEventListener('input', function(e) {
    let TRegex=document.getElementById('code-validation');
    var value = e.target.value;
   
    iVal=isValid3(value);
    if(iVal==true) {
        TRegex.innerHTML="Code valide";
        disableSubmit(false);
    }else{
        TRegex.innerHTML="Code invalide...";
        disableSubmit(true);
    }
});

//CORRECTION / autre manière de faire

// function getCodeValidation() {
//     return document.getElementById("code-validation");
// }
  
// function disableSubmit(disabled) {
//   if (disabled) {
//     document
//       .getElementById("submit-btn")
//       .setAttribute("disabled", true);
//   } else {
//     document
//       .getElementById("submit-btn")
//       .removeAttribute("disabled");
//   }
// }
  
// document
//   .getElementById("code")
//   .addEventListener("input", function(e) {
//   if (/^CODE-/.test(e.target.value)) {
//     getCodeValidation().innerText = "Code valide";
//     disableSubmit(false);
//   } else {
//     getCodeValidation().innerText = "Code invalide";
//     disableSubmit(true);
//   }
// });



//Méthode POST
/*fetch("http://url-service-web.com/api/users", {
	method: 'POST',
	headers: { 
'Accept': 'application/json', 
'Content-Type': 'application/json' 
},
	body: JSON.stringify(jsonBody)
});*/


//Exercice d'application OC pour la méthode POST

function send(e) {

    e.preventDefault();

    fetch("https://mockbin.com/request", {
	method: "POST",
	headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
    },
	    body: JSON.stringify({value: document.getElementById("value").value})
    })
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value){
        resultat = document.getElementById("result3");
        resultat.innerText = value.postData.text;          //Not innerHTML
    });
}

formulaire = document.getElementById("form2");
formulaire.addEventListener('submit', send);




/*function askHello() {
    fetch('https://mockbin.com/request?greetings=salut')
    .then(function(res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function(value) {
        val_res = document.getElementById('hello-result');           // Ici, pour afficher le résultat, nous utilisons : console.log(value); Cependant, nous modifions cette ligne de code pour l'implémenter dans notre HTTP.
        val_res.innerText = value.queryString.greetings;
    })
    .catch(function(err) {
        //Une erreur est survenue
    });
};*/


//CORRECTIoN OC sur la partie interraction serveur WEB

//JSON.parse(sth)           Convertis du JSON en JS


/*const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true*/



//JSON.stringify !!!   Convertis du JS en JSON

/*console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""*/











//Code asynchrone !!!

setTimeout(function() {
    console.log("I'm here!")
},2000);

console.log("Where are you?");              //Affiche ce console.log car le premier à 2 secondes de décalage !


/*fs.readFile(filePath, function(err, data) {
    if (err) {
        throw err;
    }
    // Do something with data
});*/





//Exercice OC !!!!!

async function getNumber1() {
    return 10;
}
  
async function getNumber2() {
    return 4;
}
  
async function compute() {
    return await getNumber1() + await getNumber2();
}

compute()
    .then(function(res) {
        resultat = document.getElementById('resulttt');
        resultat.innerText = res+' ';
});

/*Mettable aussi sous la forme :
compute()
  .then(function(res) {
    document
      .getElementById("result")
      .innerText = res + '';
});
*/


//Paralléliser les requêtes HTML

let prom1 = "Salut";
let prom2 = "toi";

Promise.all([prom1, prom2])
.then(function(values) {

    console.log(values.join(" "));

});



async function func1() {
    return 3;
}

async function func2() {
    return 4;
}









//Exemple internet pour les promesses

//Déclaration, exemple avec une voiture qui doit démarrer

const demarre = new Promise((resolve, reject) =>{
    //... Résultat de notre code
    const isRunning=false;

    if(isRunning === true) {
        resolve()
    }else{
        reject()
    }
})

//Utilisation


demarre.then(() => {
    console.log('good');
}).catch(()=> {
    console.log('Oops, une erreur...');
})

//Va catch une erreur si isRunning = false; va dire que le résultat est bon si isRunning = true

//Promise de calcul ::





