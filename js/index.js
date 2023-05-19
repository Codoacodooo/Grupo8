
function obtenerTemperatura(){
    const seccion = document.getElementById("temperatura");

    fetch(`http://api.weatherunlocked.com/api/current/-34.6083,-58.3712?lang=es&app_id=bb30a78c&app_key=22086910eb04311cee562be101801a3b`)
    .then(res => res.json())
    .then(data => {
       seccion.innerHTML = 
            `
            <seccion>
                <p> La temperatura actual en Buenos Aires es ${data.temp_c}º</p>
                <p>${data.wx_desc}, humedad ${data.humid_pct}% <img src="./image/clima/${data.wx_icon}" ></p>
                
            </seccion>
            `     
    })
    .catch(err => console.log(err))
}
    

width="50px"