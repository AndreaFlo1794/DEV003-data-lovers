import data from './data/ghibli/ghibli.js'; //importar datos
import { calculatePercent,filteringBy, orderingBy } from './data.js';

//variable donde almacenamos los datos para trabajar más comodamente
const getData = data.films

//display para las interfaces: se almacenan valores en variables

const navHome = document.querySelector("#nav-home");
const navFilms = document.querySelector("#nav-films");
const navCharacters = document.querySelector("#nav-characters");
const secHome = document.querySelector("#home");
const secFilms = document.querySelector("#films");
const secCharacters = document.querySelector("#characters");

// funcionalidad de la navbar

navHome.addEventListener("click", () => {
  secHome.style.display = "block";
  secFilms.style.display = "none";
  secCharacters.style.display = "none";
})

navFilms.addEventListener("click", () => {
  secHome.style.display = "none";
  secFilms.style.display = "block";
  secCharacters.style.display = "none";
})

navCharacters.addEventListener("click", () => {
  secHome.style.display = "none";
  secFilms.style.display = "none";
  secCharacters.style.display = "block";
})

// llamado de los elementos
const ghibliCardsEl = document.getElementById("data-container")
const drawRating = document.getElementById("sortBy")
const allFilms = document.getElementById("select").value
const score = document.getElementById("score").value
const release = document.getElementById("release-date").value
const cardsCharactersEl= document.getElementById("showData-characters")
const drawFilter= document.getElementById("filterBy");
const selectFilter=document.getElementById("select-filter").value
const female= document.getElementById("female").value
const male= document.getElementById("male").value
const statistics=document.getElementById("statistics")

// funcion para pintar datos (template) con el fin de que aparezcan en interfaz con innerHTML
function drawFilms(filmsArray) {
  const card = filmsArray.map(film => {
    return `
    <div class="film-container">
    <div class="face front">
    <img src="${film.poster}">
    <h4> 📆 ${film.release_date} </h4>
    <h5> ⭐ ${film.rt_score} </h5>
    </div>
    
    <div class="face back">
    <h3> ${film.title}</h3>
    <p>${film.description}</p>
    </div>
    </div>     
    `
  }).join('')

  ghibliCardsEl.innerHTML = card
  return ghibliCardsEl
}

const characters = [];
getData.forEach(film => {
  film.people.forEach(people => {
    people.movie=film.title;
    return characters.push(people);//variable para añadir la pelicula - desestructuración
  })
});

function drawCharacters(peopleArray){              
  const cardCharacter = peopleArray.map(people => { 
    return  `
<div class="character-container">
  <h4>  ${people.name} </h4>
  <img src="${people.img}">
  <h5> 🎞️ ${people.movie}</h5>
  <h5> ✏️ Age:  ${people.age} </h5>
  <h5> 👀 Eye-color:  ${people.eye_color} </h5>
  <h5> 🎩 Hair-color:  ${people.hair_color} </h5>
</div>
` 
  }).join('')

  cardsCharactersEl.innerHTML = cardCharacter
  return cardsCharactersEl
}

// <section class = "films"

// invocando la función drawFilms con el argumento getData para ver en interfaz
drawFilms(getData)

// ordenando por medio de un select
drawRating.addEventListener("change", () => {
  if (drawRating.value === allFilms) {drawFilms(orderingBy(getData))} 
  if (drawRating.value === score) {drawFilms(orderingBy(getData, 'rt_score', "asc"))} 
  if (drawRating.value === release) {drawFilms(orderingBy(getData, 'release_date'))}
})

// <section class = "characters"

// invocando la función drawCharacters con el argumento characters para ver en interfaz
drawCharacters(characters) 

// filtrando por medio de un select

drawFilter.addEventListener("change", () => {
  if (drawFilter.value === selectFilter) {
    drawCharacters(characters)
  } 
  if (drawFilter.value === female) {
    const filteredCharacters = filteringBy(characters, "gender", "Female")
    drawCharacters(filteredCharacters)
    console.log(calculatePercent(characters.length,filteredCharacters.length));
  } 
  if (drawFilter.value === male) {
    const filteredCharacters = filteringBy(characters, 'gender', "Male")
    drawCharacters(filteredCharacters)
    console.log(calculatePercent(characters.length,filteredCharacters.length));
  }
})

//Funcion para pintar los porcentajes





// const filterResult=filteringBy(characters, selectFilter);
// const percent=calculatePercent(characters, filterResult);

// drawFilter(characters);
// mostrar(percent, filteringBy, selectFilter);
// document.getElementById("statistics").style.display="block";
// function mostrar(percent, gender){
//   const estadistica=(`${gender} ha participado en ${percent} peliculas`);
//   console.log(estadistica);
//   const mostrar=statistics.innerHTML=estadistica;
//   return mostrar;
  
// }
// console.log(mostrar(characters.gender, "Female"));

console.log(calculatePercent(characters, "gender", "female"));

