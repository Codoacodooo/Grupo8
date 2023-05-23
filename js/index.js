    
function obtenerUsuarioRandom(){
    const seccion = document.getElementById("profesores");
    // seccion.innerHTML = "<p> °°° </p>"

    fetch("https://randomuser.me/api/?nat=es")
    .then(res => res.json())
    .then(data => {
       seccion.innerHTML =
                `
                <seccion>
                    <p>${data.results[0].name.first} ${data.results[0].name.last}</p>    
                    <img src="${data.results[0].picture.large}" width="50px" class="img-fluid rounded-circle">
                    <p>+54-${data.results[0].cell}</p>
                </seccion>
                `
    })
    .catch(err => console.log(err))
}
