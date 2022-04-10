// Carga pelis cuando se completa la carga de la pagina
document.addEventListener('DOMContentLoaded', () => {
    let url = "https://www.omdbapi.com/?apikey=669a7ccb&s=shark&r=json&page=1";
    fetch(url)
        .then(response => response.json())
        .then(datos => verInicio(datos))
        .catch(error => console.log(error))
});





const btnBuscar = document.getElementById("btn_buscar");
// Manda una peticion para obtener datos
btnBuscar.addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    //Cargamos los datos con la url
    let url = "https://www.omdbapi.com/?apikey=669a7ccb&s=" + titulo + "&r=json&page=1";
    fetch(url)
        .then(response => response.json())
        .then(data => cargaMovies(data))
        .catch(error => console.log(error))

})


const verInicio = (data) => {
    let div = document.getElementById("movies");
    // console.log(data.Search)
    array = data.Search;
    if (data != null) {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(element);
            div.innerHTML += ` <div class="card-e col s2 z-depth-4">
                             <img class="responsive-img" src="${element.Poster}">
                             <p class="">${element.Title}</p>
                             <a class="txt disabled">${element.Type}</a>
                             <p class="">Fecha de lanzamiento:${element.Year}</p>
                               </div>`
        }

    } else {
        div.innerHTML = `<center><h5>Ha ocurrido un error con el servidor</h5></center>`
    }
}

//Se pasa el valor de data la funcion
const cargaMovies = (data) => {
    // console.log(data);
}



//  div.innerHTML = ` <div class="col s3 z-depth-4">
//                 <img class="responsive-img" src="${datos.Poster}">
//                 <p class="">z-depth-4</p>
//             </div>`