//Selectores
let texto = document.getElementById("textoUsuario").value;
let mensajeResultante = document.getElementById("mensaje");
let botonCopiar = document.getElementById("copiar");
//let imagen = document.getElementById("ningunMensaje");
function encriptarTexto() {
    mensajeResultante.innerHTML = texto.replace('e', "enter").replace('i', "imes").replace('a', "ai").replace('o', "ober").replace('u', "ufat");
    abilitarBotonCopiar();
    cambiarEstadoDeImagen()
}
function desencriptarTexto() {
    mensajeResultante.innerHTML = texto.replace("enter", 'e').replace("imes", 'i').replace("ai", 'a').replace("ober", 'o').replace("ufat", 'u');
    abilitarBotonCopiar();
    cambiarEstadoDeImagen()
}

function abilitarBotonCopiar() {
    botonCopiar.disabled = false;
}
/*
function cambiarEstadoDeImagen() {
    if (imagen.style.visibility) {
        imagen.style.visibility = false;
    } else {
        imagen.style.visibility = true;
    }

}*/