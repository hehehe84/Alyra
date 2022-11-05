//Test du site streaming
// Create your variables here
// ==========================================

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let episodeTime = 45;
let commercialTime = 5;

let totalLenght = (episodeTime+commercialTime)*numberOfSeasons*numberOfEpisodes
let advertisement = (commercialTime)*numberOfSeasons*numberOfEpisodes

//Informations sur un épisode

let episodeTitle = "L'arche de Noé";
let episodeDuration = 45;
let hasBeenWatched = false;




// ==========================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season
Total viewing time : ${totalLenght} minutes
(included ${advertisement} minutes of advertisement)`

//Créer un affichage des informations sur un épisode :

document.querySelector('#episode-info').innerText = `Episode : ${episodeTitle} 
Duration : ${episodeDuration} min 
${hasBeenWatched ? 'Already watched' : 'Not yet watched'}`

//Créer un objet :

let episode2 = {
    title2: 'The Dark Tau',
    duration2: 50,
    hasBeenWatched2: false
}

//Traitement des infos pour les injecter dans episode2 :

document.querySelector('#episode2info').innerText = `Episode 2 : ${episode2.title2}
Duration : ${episode2.duration2} min
${episode2.hasBeenWatched2 ? 'Already watched' : 'Not yet watched'}`;


//On créer des class pour les épisodes 3,4 et 5 à l'aide des outils class

class Episode{
    constructor(title,duration,hasBeenWatched){
       this.title = title;
       this.duration = duration;
       this.hasBeenWatched = hasBeenWatched;
    }
  }

//On créer une série d'épisodes à l'aide de ces Class !

let thirdEpisode = new Episode("Episode 3",55,true)
let fourthEpisode = new Episode("Episode 4",45,true)
let fifthEpisode = new Episode("Episode 5",40,false)


document.querySelector('#third-episode-info').innerText = `Episode : ${thirdEpisode.title}
Duration : ${thirdEpisode.duration} min
${thirdEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#fourth-episode-info').innerText = `Episode : ${fourthEpisode.title}
Duration : ${fourthEpisode.duration} min
${fourthEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;

document.querySelector('#fifth-episode-info').innerText = `Episode : ${fifthEpisode.title}
Duration : ${fifthEpisode.duration} min
${fifthEpisode.hasBeenWatched ? 'Already watched' : 'Not yet watched'}`;


//array and tableau, code pour le streaming

//Tout d'abord, nous allonscréer les variables :

//let firstFrontRowGuest;
//let secondFrontRowGuest;
//... Puis affecter une valeur pour chaque... Chiant ! A la place on utilise des ttableaux

let guest = [];
let guests = ["Sarah Picot", "Antoine Picot", "Clara Picot", "Greta Front", "Ta mère"]
 
let firstGuest = guests[0]; //"Sarah Picot"   Il faut bien commencer à l'indice 0 !!!!!
let thirdGuest = guest[2]; //"Greta Front"


////////
class Episode2{
  constructor(title,duration,hasBeenWatched){
     this.title = title;
     this.duration = duration;
     this.hasBeenWatched = hasBeenWatched;
  }
}


let firstEpisode2 = new Episode2("Episode 1",42,true)
let secondEpisode2 = new Episode2("Episode 2",49,true)
let thirdEpisode2 = new Episode2("Episode 3",55,true)
let fourthEpisode2 = new Episode2("Episode 4",45,true)
let fifthEpisode2 = new Episode2("Episode 5",40,false)
let sixthEpisode2 = new Episode2("Episode 6",55,false)
let seventhEpisode2 = new Episode2("Episode 7",30,false)


let episodes2 = [firstEpisode2, secondEpisode2, thirdEpisode2, fourthEpisode2, fifthEpisode2, sixthEpisode2, seventhEpisode2];

const newbody = document.querySelector('#newbody');

for(let i = 0;i < 12; i++) {    // on commence incrémentation i=0, tant que i<12, i =+1 toute les incrémentations

  let newDiv = document.createElement('div');
  newDiv.classList.add('series-frame');

  let newTitle = document.createElement('h2');
  newTitle.innerText= 'The story of Tau';

  let newParagraph = document.createElement('p');
  newParagraph.innerText = 
  `${episodes2[i].title}
  ${episodes2[i].duration} minutes
  ${episodes2[i].hasBeenWatched ? 'Already Watched': 'Not yet watched'}`;

  newDiv.append(newTitle);
  newDiv.append(newParagraph);
  newbody.append(newDiv);
}

//Ici, nous avons sous JS la création d'un élément HTML faisant référence à une classe CSS.

class Episode3{
  constructor(titre,duree,aEteRegarde){
    this.titre = titre;
    this.duree = duree;
    this.aEteRegarde = aEteRegarde;
  }
}

let NEpisode_100 = [new Episode3(COUCOU,2,true),
new Episode3(HEHE,24,true),
new Episode3(DzienDobry,4,false)];

const body = document.querySelector('body');

for(let i of NEpisode_100){

  let newDiv2 = document.createElement('div');
  newDiv2.classList.add('series-frame');

  let newTitle2 = document.createElement('h2');
  newTitle2.innerText = 'The New Story of Tau';

  let newParagraph2 = document.createElement('p');
  newParagraph2.innerText = `${i.titre}
    ${i.duree} minutes
    ${i.aEteRegarde ? 'Oui, bien Vu !' : 'Non Spoil pas !'}`;


  newDiv2.append(newTitle2)
  newDiv2.append(newParagraph2)
  body.append(newDiv2)
}