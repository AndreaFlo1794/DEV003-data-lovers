import data from './data/ghibli/ghibli.js'; //importar datos
import { orderingBy } from './data.js';


//display para las interfaces
const navHome= document.querySelector("#nav-home");
const navFilms= document.querySelector("#nav-films");
const navCharacters= document.querySelector("#nav-characters");

const secHome=document.querySelector("#home");
const secFilms=document.querySelector("#films");
const secCharacters=document.querySelector("#characters");

navHome.addEventListener("click", ()=>{
  secHome.style.display="block";
  secFilms.style.display="none";
  secCharacters.style.display="none";
})

navFilms.addEventListener("click", ()=>{

  secHome.style.display="none";
  secFilms.style.display="block";
  secCharacters.style.display="none";

})

navCharacters.addEventListener("click", ()=>{
  secHome.style.display="none";
  secFilms.style.display="none";
  secCharacters.style.display="block";
})







//variable donde almacenamos los datos para trabajar más comodamente
const getData = data.films

// funcion para pintar datos 
function drawFilms(filmsArray){               //Funcion cuyo unico fin es PINTAR, DEVOLVER EL HTML DE CADA FILM
  
  let containerPicture = document.getElementById('data-container');
 const picture = filmsArray.map( function(film){ 

     return  `
    <div class="film-container" id= " ${film.id} ">
     
      <img src="${film.poster}">
      <h4> 📆 ${film.release_date} </h4>
      <h5> ⭐ ${film.rt_score} </h5>
      
    </div>
           
    ` 

  } ).join('')

  containerPicture.innerHTML = picture
  
  console.log(containerPicture.querySelectorAll('.film-container'))
  return containerPicture
}


//Mostrando datos en la interfaz
 drawFilms(getData) 

//ordenando por medio de un select
const drawRating = document.getElementById('desplegar-orden')
const release = document.getElementById('ordenar-fecha').value
const score = document.getElementById('ordenar-rt').value
const dataContainerEl = document.getElementById('data-container')

// ejecutamos funcion de pintar con los nuevos arreglos

drawRating.addEventListener("change" , () =>{ 
  if(drawRating.value === score){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'rt_score'))  }
  if(drawRating.value === release){dataContainerEl.innerHTML = drawFilms(orderingBy(getData , 'release_date')) }
  if(drawRating.value === ""){dataContainerEl.innerHTML = drawFilms(getData)}
  
})







