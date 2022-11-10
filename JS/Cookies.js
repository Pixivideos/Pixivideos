const botonAceptarCookies = document.getElementById("btn-aceptar-cookies");
const avisoCookies = document.getElementById("avisos-cookies");
const fondoAvisoCookies = document.getElementById("fondo-avisos-cookies")

dataLayer = [];

if(!localStorage.getItem('Cookies-Aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'Cookies-Aceptadas'});
}

botonAceptarCookies.addEventListener("click" ,  () => {
    avisoCookies.classList.remove("activo");
    fondoAvisoCookies.classList.remove("activo");

    localStorage.setItem("Cookies-Aceptadas", true);

		dataLayer.push({'event': 'Cookies-Aceptadas'});
});
