import data from "./data/ghibli/ghibli.js"; //importar datos
import { calculatePercent, filteringBy, orderingBy } from "./data.js";

//variable donde almacenamos los datos para trabajar más comodamente
const getData = data.films

// funcionalidad de la navbar
const secFilms = document.querySelector("#films");
const secCharacters = document.querySelector("#characters");
const secHome = document.querySelector("#home");

//display para las interfaces: se almacenan valores en variables
const navHome = document.querySelector("#nav-home");
navHome.addEventListener("click", () => {
  secHome.style.display = "block";
  secFilms.style.display = "none";
  secCharacters.style.display = "none";
})

const navFilms = document.querySelector("#nav-films");
navFilms.addEventListener("click", () => {
  secHome.style.display = "none";
  secFilms.style.display = "block";
  secCharacters.style.display = "none";
})

const navCharacters = document.querySelector("#nav-characters");
navCharacters.addEventListener("click", () => {
  secHome.style.display = "none";
  secFilms.style.display = "none";
  secCharacters.style.display = "block";
})

// funcion para pintar datos (template) con el fin de que aparezcan en interfaz con innerHTML
const ghibliCardsEl = document.getElementById("data-container")

function drawFilms(filmsArray) {
  const card = filmsArray.map(film => {
    return `
    <div class = "film-container">
      <div class = "face front">
        <img src = "${film.poster}">
        <h4> 📆 ${film.release_date} </h4>
        <h5> ⭐ ${film.rt_score} </h5>
      </div>
    
      <div class="face back">
        <h3> ${film.title} </h3>
        <p> ${film.description} </p>
      </div>
    </div>     
    `
  }).join("")

  ghibliCardsEl.innerHTML = card
  return ghibliCardsEl
}

// Obtener un nuevo array con personajes para pintar datos en las cards con la función drawCharacters
const characters = [];
getData.forEach(film => {
  film.people.forEach(people => {
    people.movie = film.title; //variable para añadir el título la película en la card
    return characters.push(people);
  })
});

const cardsCharactersEl = document.getElementById("showData-characters")
const statistics = document.getElementById("statistics-container")

function drawCharacters(peopleArray) {
  statistics.innerHTML = ""
  const cardCharacter = peopleArray.map(people => {
    return `
    <div class="character-container">
      <h4> ${people.name} </h4>
      <img src = "${people.img}">
      <h5> 🎞️ ${people.movie} </h5>
      <h5> ✏️ Age: ${people.age} </h5>
      <h5> 👀 Eye-color: ${people.eye_color} </h5>
      <h5> 🎩 Hair-color: ${people.hair_color} </h5>
    </div>
    `
  }).join("")

  cardsCharactersEl.innerHTML = cardCharacter
}

// <section class = "films"

// invocando la función drawFilms (pintar data) con el argumento getData para ver en interfaz
drawFilms(getData)

// ordenando por medio del select sortBy
const drawRating = document.getElementById("sortBy")
// Se iguala al value de cada option 
drawRating.addEventListener("change", () => {
  switch (drawRating.value) {
  case "all-films":
    drawFilms(orderingBy(getData));
    break;
  case "high-score":
    drawFilms(orderingBy(getData, "rt_score", "desc"));
    break;
  case "low-score":
    drawFilms(orderingBy(getData, "rt_score", "asc"));
    break;
  case "latest-release":
    drawFilms(orderingBy(getData, "release_date", "desc"));
    break;
  case "older-release":
    drawFilms(orderingBy(getData, "release_date", "asc"));
    break;
  }
})

// <section class = "characters"

// invocando la función drawCharacters con el argumento characters (que es un array) para ver en interfaz
drawCharacters(characters)

// filtrando por medio del select filterBy
const drawFilter = document.getElementById("filterBy")

drawFilter.addEventListener("change", () => {
  let drawPercent;
  // console.log (filteredCharacters);
  // switch (drawFilter.value) {
  // case "select-filter":
  //   drawCharacters(characters);
  //   break;
  // case "female":
  //   filteringBy(characters, "gender", "Female");
  //   drawCharacters(filteredCharacters);
  //   drawPercent =
  //       `<h4 class="female-percent"> ${calculatePercent(characters.length, filteredCharacters.length)} % of the characters are female </h4>`
  //   statistics.innerHTML = drawPercent
  //   break;
  // case "male":
  //   filteringBy(characters, 'gender', "Male")
  //   drawCharacters(filteredCharacters);
  //   drawPercent =
  //     `<h4 class="male-percent"> ${calculatePercent(characters.length, filteredCharacters.length)} % of the characters are male </h4>`
  //   statistics.innerHTML = drawPercent
  //   break;
  // }
  
    
  if (drawFilter.value === "select-filter") {
    drawCharacters(characters)
  }
  if (drawFilter.value === "female") {
    const filteredCharacters = filteringBy(characters, "gender", "Female");
    drawCharacters(filteredCharacters);
    // console.log(calculatePercent(characters.length, filteredCharacters.length));
    drawPercent =
      `<h4 class="female-percent"> ${calculatePercent(characters.length, filteredCharacters.length)} % of the characters are female </h4>`
    statistics.innerHTML = drawPercent
  }
  if (drawFilter.value === "male") {
    const filteredCharacters = filteringBy(characters, 'gender', "Male")
    drawCharacters(filteredCharacters);
    drawPercent =
      `<h4 class="male-percent"> ${calculatePercent(characters.length, filteredCharacters.length)} % of the characters are male </h4>`
    statistics.innerHTML = drawPercent
    // console.log(calculatePercent(characters.length,filteredCharacters.length));
  }
})

//Funcion para pintar los porcentajes

// function showPercent(){
//   const percent=""
// }


// `<h4> ${calculatePercent(characters , filteredCharacters )} % de los personajes son mujeres </h4>`


// statistics.innerHTML= percent

// console.log(showPercent);