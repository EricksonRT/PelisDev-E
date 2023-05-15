import { API_KEY } from './apikey';
// const API_KEY = API_KEY;
// Generador de palabaras aleatorias
let palabrasRandom = [
  '2022',
  'Dogs',
  'Erick',
  'Lady',
  'Terror',
  'Series',
  'Ann',
  'Kids',
  'Shark',
  'Final',
  'Fantasy',
];
const random = () => {
  let nroArray = Math.floor(Math.random() * 11);
  return palabrasRandom[nroArray];
};

// Carga pelis cuando se completa la carga de la pagina
document.addEventListener('DOMContentLoaded', () => {
  let url = `https://www.omdbapi.com/?apikey=API_KEY&s=${random()}&r=json&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((datos) => verInicio(datos))
    .catch((error) => console.log(error));
});

const btnBuscar = document.getElementById('btn_buscar');
// Manda una peticion para obtener datos
btnBuscar.addEventListener('click', () => {
  let titulo = document.getElementById('titulo').value;
  //Cargamos los datos con la url
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${titulo}&r=json&page=1`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => cargaMovies(data))
    .catch(
      (error = () =>
        (div.innerHTML = `<center><h5>No se han encontrado coincidencias</h5></center>`))
    );
});

let div = document.getElementById('movies');
const verInicio = (data) => {
  // console.log(data.Search)
  array = data.Search;
  if (data != null) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(element);
      div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                             <img class="responsive-img" src="${element.Poster}">
                             <a class="txt disabled right">${element.Type}</a>
                             <p class="">${element.Title}<hr></p>
                             <p class="disable">Año de lanzamiento: ${element.Year}</p>
                               </div>`;
    }
  }
};

//Se pasa el valor de data la funcion
const cargaMovies = (data) => {
  div.innerHTML = '';
  array = data.Search;
  if (data != null) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      console.log(element);
      div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                             <img class="responsive-img" src="${element.Poster}">
                             <p class="">${element.Title}</p>
                             <a class="txt disabled">${element.Type}</a>
                             <p class="disable">Año de lanzamiento: ${element.Year}</p>
                               </div>`;
      // Animacion de carga en pelis
      document.getElementById('movies').classList.toggle('movies');
    }
  } else {
    div.innerHTML = `<center><h5>Ha ocurrido un error con el servidor</h5></center>`;
  }
};

// variables declaradas
const btnSearchSeries = document.querySelector('#series');
const btnSearchMovies = document.querySelector('#peliculas');
const btnSearchAnime = document.querySelector('#anime');
const btnSearchKids = document.querySelector('#infantil');

// funcion para ver por series
btnSearchSeries.addEventListener('click', () => {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${random()}&r=json&page=1&type=series`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      div.innerHTML = '';
      array = data.Search;
      if (data != null) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          console.log(element);
          div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                                     <img class="responsive-img" src="${element.Poster}">
                                     <a class="txt disabled right">${element.Type}</a>
                                     <p class="">${element.Title}<hr></p>
                                     <p class="">Fecha de lanzamiento :${element.Year}</p>
                                       </div>`;
          // Animacion de carga en pelis
          document.getElementById('movies').classList.add('movies');
        }
      }
    })
    .catch(
      (error = () => {
        div.innerHTML = `<center><h5 class="">Ha ocurrido un error al cargar series, intente nuevamente</h5></center>`;
      })
    );
});

// funcion para ver por Movies
btnSearchMovies.addEventListener('click', () => {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${random()}&r=json&page=1&type=movie`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      div.innerHTML = '';
      array = data.Search;
      if (data != null) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          console.log(element);
          div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                                     <img class="responsive-img" src="${element.Poster}">
                                     <a class="txt disabled right">${element.Type}</a>
                                     <p class="">${element.Title}<hr></p>
                                     <p class="">Fecha de lanzamiento :${element.Year}</p>
                                       </div>`;
          // Animacion de carga en pelis
          document.getElementById('movies').classList.add('movies');
        }
      }
    })
    .catch(
      (error = () => {
        div.innerHTML = `<center><h5 class="">Ha ocurrido un error al cargar peliculas, intente nuevamente</h5></center>`;
      })
    );
});

// funcion para ver por Anime
btnSearchAnime.addEventListener('click', () => {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=anime&r=json&page=1&type=`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      div.innerHTML = '';
      array = data.Search;
      if (data != null) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          console.log(element);
          div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                                     <img class="responsive-img" src="${element.Poster}">
                                     <a class="txt disabled right">${element.Type}</a>
                                     <p class="">${element.Title}<hr></p>
                                     <p class="">Fecha de lanzamiento :${element.Year}</p>
                                       </div>`;
          // Animacion de carga en pelis
          document.getElementById('movies').classList.add('movies');
        }
      }
    })
    .catch(
      (error = () => {
        div.innerHTML = `<center><h5 class="">Ha ocurrido un error al cargar Animes, intente nuevamente</h5></center>`;
      })
    );
});

// funcion para ver por Kids
btnSearchKids.addEventListener('click', () => {
  let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=kids&r=json&page=1&type=series`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      div.innerHTML = '';
      array = data.Search;
      if (data != null) {
        for (let i = 0; i < array.length; i++) {
          const element = array[i];
          console.log(element);
          div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                                     <img class="responsive-img" src="${element.Poster}">
                                     <a class="txt disabled right">${element.Type}</a>
                                     <p class="">${element.Title}<hr></p>
                                     <p class="">Fecha de lanzamiento :${element.Year}</p>
                                       </div>`;
          // Animacion de carga en pelis
          document.getElementById('movies').classList.add('movies');
        }
      }
    })
    .catch(
      (error = () => {
        div.innerHTML = `<center><h5 class="">Ha ocurrido un error al cargar infantil, intente nuevamente</h5></center>`;
      })
    );
});
// Volver hacia arriba
// document.getElementById("ScrollToTop").addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// })

let buttons = document.querySelectorAll('.ancla');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute('href');
    document.querySelector(target).scrollIntoView({
      top: 0,
      behavior: 'smooth',
    });
  });
});
