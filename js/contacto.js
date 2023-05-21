function ValidarFormulario(){
    
const form=document.getElementsByTagName("form")[0];
const Nombre=form[0].value;
const correo=form[1].value;
const telefono=form[2].value;
let datosNombre=false;
let datosCorreo=false;
let datosTelefono=false;
regexCorreo=/[A-Z0-9]{1,64}@[a-zA-Z0-9]{1,64}\.[a-zA-Z0-9]{1,64}/;
regexTelefono=/^[0-9]{3}\-[0-9]{4}\-[0-9]{4}/;

if (Nombre.length <2)
{
    alert ("Debe ingresar un nombre con 2 o más caracteres");
    // console.log(Nombre.length)
}
else{
    datosNombre=true;
}
// Para validar busco que exista el @. 
// Si el @ no existe, la funcion search devuelve -1
let xx=correo.search("@");
if(correo.length=0 || xx==-1){
    alert("debe ingresar un correo válido");
}
else{
    datosCorreo=true;
}

if(!regexTelefono.test(telefono))
{
    alert("Debe ingresar un teléfono válido 111-2222-3333");
}
else{
    datosTelefono=true;
}

if(datosNombre && datosTelefono && datosCorreo)
{
    alert("Datos válidos... enviando el correo");
}
else{
    alert("datos Invalidos");
}
}