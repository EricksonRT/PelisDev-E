//Se pasa el valor de data la funcion
const cargaBienvenida = (data) => {
    alert(data);
}
const btnBuscar = document.getElementById("btn_buscar");
btnBuscar.addEventListener("click", () => {
    let titulo = document.getElementById("titulo").value;
    //Cargamos los datos con la url
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=669a7ccb&t=" + titulo;
    fetch(url)
        .then(response => response.json())
        .then(data => cargaBienvenida(data))
        .catch(error => console.log(error))

})