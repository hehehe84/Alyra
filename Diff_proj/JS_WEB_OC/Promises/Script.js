//Déclaration, exemple avec une voiture qui doit démarrer

const demarre = new Promise((resolve, reject) =>{
    //... Résultat de notre code
    const isRunning=true;

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


const calcul = new Promise((resolve, reject) => {
    //...
    const result=200*120;

    if(result){
        resolve(result);
    }else{
        reject();
    }
})

//Récupération du résultat

calcul.then((result)=> {
    console.log('Resultat: ' + result);
}).catch(()=>{
    console.log('Oups, une erreur...');
})

//Création d'une fonction qui retourne une promesse

const calcule = (num1,num2) =>{
    return new Promise((resolve, reject) => {
        //...
        const result=num1*num2;
    
        if(result){
            resolve(result);
        }else{
            reject();
        }
    })
}

/*
calcule(1200,545).then((result)=> {
    console.log('Resultat: ' + result)
}).catch(()=>{
    console.log('Oups, une erreur...')
})*/

//
/*

const clique=document.getElementById('Clic');


//Deux manière de récupérer les nombres via le DOM
const nm1 = document.getElementById('num1');
const nm2 = document.querySelector('#num2');

clique.addEventListener('click', function() {

    const Resultatdef = document.getElementById('Res');

    n1=parseInt(nm1.value);     //on Récupère les valeurs de nos input, autrement, 
    n2=parseInt(nm2.value);     //Nous avons l'intégralité des ressources dans ceux ci

    //console.log(n1);            //Nous affichons les log de nos nombres pour nous assurer
    //console.log(n2);            //De leurs exactitudes
    calcule(n1,n2).then((result) => {       //Nous entrons de bons nombres, tout va bien
        Resultatdef.innerText = `Résultat : ${result}`;
    }).catch(() => {        //Erreur de saisies, nombres non reconnu, rien ne va
        Resultatdef.innerText = 'Il y a une erreur !';
    })
})


//Nous créons une fonction calcule qui va nous permettre de rejetter un rsultat trop petit

const calcule2 = (num1,num2) =>{
    return new Promise((resolve, reject) => {
        //...
        const result=num1*num2;
    
        if(result>=10000){
            resolve(result);
        }else{
            reject();
        }
    })
}

const cliquebis=document.getElementById('ClicBis');

cliquebis.addEventListener('click', function() {
    const ResultBis = document.getElementById('ResBis');
    n1=parseInt(nm1.value);
    n2=parseInt(nm2.value);

    calcule2(n1,n2).then((result)=>{
        ResultBis.innerText = `Le résultat est assez grand et vaut : ${result}`;
    }).catch(() =>{
        ResultBis.innerText = 'Le résultat est trop petit (inférieur à 10000) retante ta chance !';
    })
})
















//Maintenant, nous parlons de Async et Await



function func() {
    console.log('ok')
}

//console.log(func())

let func2 = () => {
    console.log('ok tier')
}

//console.log(func2())


//Maintenant, passons à Async

let funcasy = async () => {
    console.log('ok2')
    return 'test'
}

funcasy().then(text =>console.log(text))



//Usage du await !

function functwo() {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve('test')
        },2000);
    })
}

//Await de functTwo attend le test

async function funcasy2() {
    console.log('ok3')
    let text = await functwo()          //Functwo() est une promesse asynchrone à l'aide de setTimeout
    return text
}

funcasy2().then(text =>console.log(text))





*/