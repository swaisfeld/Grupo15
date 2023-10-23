function validarDatos() {

    // Validar el campo TIPO DE DOCUMENTO
    var msgTipo = document.getElementById("msgTipo");
    var parrafoTD = msgTipo.querySelector("p");
    parrafoTD.style.color = "aliceblue";
    parrafoTD.textContent = "";

    if (document.formIngreso.tipodoc.selectedIndex == 0) {
        parrafoTD.textContent = "Seleccione algun tipo";
        parrafoTD.style.color = "red";A
        document.formIngreso.tipodoc.focus();
        return;
    }

    // Validar el campo NUMERO DE DOCUMENTO
    let nroDoc = document.formIngreso.nroDocumento.value;

    let msgNumero = document.getElementById("msgNumero");
    let parrafoND = msgNumero.querySelector("p");
    parrafoND.style.color = "aliceblue";
    parrafoND.textContent = ""

    if (/[a-zA-Z]/.test(nroDoc)) {
        parrafoND.textContent = "No Ingrese letras ni puntos"
        parrafoND.style.color = "red";
        document.formIngreso.nroDocumento.value = ""
        document.formIngreso.nroDocumento.focus();
        return;
    }

    if (nroDoc.length < 6 || nroDoc.length > 8) {
        parrafoND.textContent = "Numero de 6 a 8 digitos"
        parrafoND.style.color = "red";
        document.formIngreso.nroDocumento.value = ""
        document.formIngreso.nroDocumento.focus();
        return;
    }

    let soloNumeros = nroDoc.match(/\d+/g)
    nroDoc = soloNumeros
    document.formIngreso.nroDocumento.value = nroDoc

    let nroDocEntero = parseInt(nroDoc);
    if (nroDocEntero < 1000000 || nroDocEntero > 80000000) {
        parrafoND.textContent = "Numero entre 1 millon y 8"
        parrafoND.style.color = "red";
        document.formIngreso.nroDocumento.value = ""
        document.formIngreso.nroDocumento.focus();
        return;
    }

    // Validar el campo CLAVE
    let claveIng = document.formIngreso.clave.value;

    let msgClave = document.getElementById("msgClave");
    let parrafoCL = msgClave.querySelector("p");
    parrafoCL.style.color = "aliceblue";
    parrafoCL.textContent = ""

    if (claveIng.length < 6 || claveIng.length > 8) {
        parrafoCL.textContent = "Clave de 6 a 8 digitos"
        parrafoCL.style.color = "red";
        document.formIngreso.clave.value = ""
        document.formIngreso.clave.focus();
        return;
    }

    console.log(document.formIngreso.tipodoc.selectedIndex)
    console.log(document.formIngreso.nroDocumento.value)
    console.log(document.formIngreso.clave.value)

}

// MOSTRAR / OCULTAR Clave
function mostrarClave() {
    var estado = document.getElementById("clave").type

    if (document.getElementById("clave").type == "password") {
        document.getElementById("clave").type = "text"
        document.querySelector(".botonMuestro #b3").value = "No Ver"
    } else {
        document.getElementById("clave").type = "password"
        document.querySelector(".botonMuestro #b3").value = "Ver"
    }

    /* Paso 2: Modifica el atributo type del elemento <input>.
    inputElement.type = "password"; // Cambia el tipo a "pas*/

}

//LLamo a FAQ
function redirigirPagina() {
    var PaginaFAQ = "FAQ.html";
    window.location.href = PaginaFAQ;

}


//LLamo a API del clima
function latitudLongitud() {
    if ("geolocation" in navigator) {
        // El navegador admite la geolocalización
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;

            console.log("Latitud: " + latitud);
            console.log("Longitud: " + longitud);
            APIClima(latitud, longitud);
        });
    } else {
        console.log("La geolocalización no está disponible en este navegador.");
    }
}

function APIClima(latitud,longitud) {
    
    console.log(latitud,longitud)
    
    const apiKey = '4a895df6f0226279f14e1151695d40ac';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var temperatura = data.main.temp;
            var sensacionTermica = data.main.feels_like;
            var maxima = data.main.temp_max;
            var minima = data.main.temp_min;
            var humedad = data.main.humidity;
            var presion = data.main.pressure;

            const lista = document.getElementById('listaAPI');
            const elementosLi = lista.getElementsByTagName('li');
            elementosLi[0].textContent = "Temperatura: " + temperatura.toFixed(0); + "°C";
            elementosLi[1].textContent = "Sensacion Termica: " + sensacionTermica.toFixed(0) + "°C";
            elementosLi[2].textContent = "Maxima: " + maxima.toFixed(0) + "°C";
            elementosLi[3].textContent = "Minima: " + minima.toFixed(0) + "°C";
            elementosLi[4].textContent = "Humedad: " + humedad + "%";
            elementosLi[5].textContent = "Presion: " + presion + "hPa";
            elementosLi[6].textContent = "(" + data.name + ")";

        })
        .catch(error => console.error('Error al obtener datos meteorológicos',error));

}


