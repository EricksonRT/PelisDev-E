//Cargamos los datos con la url
let url = "https://www.omdbapi.com/?i=tt3896198&apikey=669a7ccb&";
fetch(url)
    .then(response => response.json())
    .then(data => cargaBienvenida(data))
    .catch(error => console.log(error))

//Se pasa el valor de data la funcion
const cargaBienvenida = (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        // console.log("Elemt: " + element.Actors);
    }

}