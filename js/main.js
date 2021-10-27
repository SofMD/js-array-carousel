/**
 * JS CAROUSEL
 *
 * Dati tre array contenenti
 * una lista ordinata di 5 immagini e
 * una lista ordinata dei relativi 5 luoghi,
 * e una lista di 5 testi.
 * creare un carosello come nella foto alegata
 *
 * Al click dell'utente sulle frecce l'immagine attiva diventa
 * visibile in formato grande a sinistra e
 * nel suo angolo in basso a destra dovranno essere aggiunti i relativi titolo e il testo.
 * Aggiorniamo anche la thumbnail attiva.
 */

// Immagini
const imageCollection = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
];

// Titoli
const titleCollection = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise',
];

// Testi
const textCollection = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


const imagesCont = document.querySelector('.images');
const thumbsCont = document.querySelector('.thumbs');
let ImgActive = 1;

//inserire nel dom l'immagine e scritte
for(let i = 0 ; i < imageCollection.length ; i++){
    imagesCont.innerHTML += `
    <div class="image-container">
      <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
      <div class="text">
          <h3>${titleCollection[i]}</h3>
          <p>${textCollection[i]}</p>
      </div>
    </div> `;

    thumbsCont.innerHTML += `
    <div class="thumb">
         <img src="${imageCollection[i]}" alt="${titleCollection[i]}">
     </div>`;
}


//aggiungere classe active
document.getElementsByClassName('image-container')[ImgActive].classList.add('active');

//bottoni
let next = document.querySelector('.next');

//creo evento click
next.addEventListener('click', function(){

    if (ImgActive  === imageCollection.length -1){
        ImgActive = 0;
    }
    else{
        ImgActive++;
    };

    document.querySelector('.image-container.active').classList.remove('active');

    document.getElementsByClassName('image-container')[ImgActive].classList.add('active');
});


//bottoni
let prev = document.querySelector('.prev');

//creo evento click
prev.addEventListener('click', function(){

    ImgActive--;

    if (ImgActive < 0 ) {

        ImgActive = imageCollection.length - 1;
    };

    document.querySelector('.image-container.active').classList.remove('active');

    document.getElementsByClassName('image-container')[ImgActive].classList.add('active');
});


