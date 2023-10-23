

const form = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
var radio;

function validateForm() {

    var radioboxes = document.getElementsByName('opcion');
    var checked = false;

    for (var i = 0; i < radioboxes.length; i++) {
        if (radioboxes[i].checked) {
            checked = true;
            radio = radioboxes[i]
            break;
        }
    }

    var noRadio = document.getElementById("noRadio");
    var parrafoNR = noRadio.querySelector("p");
    if (!checked) {
        parrafoNR.textContent = 'Debes seleccionar una opción de interés antes de enviar el formulario'
        parrafoNR.style.color = "red"
        return false;
    } else{
        parrafoNR.textContent = ''
    }

    var nombreVacio = document.getElementById("nombreVacio");
    var parrafoNV = nombreVacio.querySelector("p");
    if (nombre.value === '') {
        parrafoNV.textContent = "El nombre no puede estar vacío"
        parrafoNV.style.color = "red"
        return false;
    }else{
        parrafoNV.textContent = ""
    }

    var nombreInvalido = document.getElementById("nombreInvalido");
    var parrafoNI = nombreInvalido.querySelector("p");
    if (!nombre.value.match(/^[a-zA-ZÀ-ÿ\s]{1,40}$/)){
        parrafoNI.textContent = "Nombre inválido"
        parrafoNI.style.color = "red"
    } else{
        parrafoNI.innerHTML = ''
    }

    var emailVacio = document.getElementById("emailVacio");
    var parrafoEV = emailVacio.querySelector("p");
    if (email.value === '') {
        parrafoEV.textContent = "El email no puede estar vacío"
        parrafoEV.style.color = "red"
        return false;
    }else{
        parrafoEV.textContent = ""
    }


    var emailInvalido = document.getElementById("emailInvalido");
    var parrafoEI = emailInvalido.querySelector("p");
    if (!email.value.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
        parrafoEI.textContent = "El email no es válido"
        parrafoEI.style.color = "red"
        return false;
    }else{
        parrafoEI.innerHTML = '';
    }

    var textoVacio = document.getElementById("textoVacio");
    var parrafoTV = textoVacio.querySelector("p");
    if (mensaje.value === '') {
        parrafoTV.textContent = "El mensaje no puede estar vacío"
        parrafoTV.style.color = "red"
        return false;
    }else{
        parrafoTV.textContent = "";
    }
    
    return true;
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (validateForm()) {
    console.log('Interes: ', radio.value)
    console.log('Nombre:', nombre.value);
    console.log('Email:', email.value);
    console.log('Mensaje:', mensaje.value);
    form.reset()
  }
});

