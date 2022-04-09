// Carga pelis cuando se completa la carga de la pagina
document.addEventListener('DOMContentLoaded', () => {
    let url = "https://www.omdbapi.com/?apikey=669a7ccb&s=Lady&r=json&page=1&";
    fetch(url)
        .then(response => response.json())
        .then(data => verInicio(data))
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
    for (let index = 0; index < data.length; index++) {
        const element = array[index];
        console.log("ss");

    }
}

//Se pasa el valor de data la funcion
const cargaMovies = (data) => {
    console.log(data);
}



//  div.innerHTML = ` <div class="col s3 z-depth-4">
//                 <img class="responsive-img" src="${datos.Poster}">
//                 <p class="">z-depth-4</p>
//             </div>`