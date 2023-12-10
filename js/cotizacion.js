const btnContratar = document.querySelector("button.button-contratar")

// me enlazo con los elementos HTML del detalle del préstamo
const spanMonto = document.querySelector("span.label-monto")
const spanDestino = document.querySelector("span.label-destino")
const spanTasa = document.querySelector("span.label-intereses") 
const spanPlazo = document.querySelector("span.label-plazo")
const spanCuota = document.querySelector("span.label-cuota")
const spanTotalDevolver = document.querySelector("span.label-total")
const divMensajeFinal = document.querySelector("div#panelMensaje")


function recuperarDeLS() {
    const datosDelPrestamo = JSON.parse(localStorage.getItem("DatosDelPrestamo"))

    spanMonto.textContent = "$ " + datosDelPrestamo.dinero.toFixed(2)
    spanDestino.textContent = datosDelPrestamo.destino
    spanTasa.textContent = (datosDelPrestamo.interes - 1) * 100
    spanPlazo.textContent = datosDelPrestamo.meses
    spanCuota.textContent = "$ " + datosDelPrestamo.cuota.toFixed(2)
    spanTotalDevolver.textContent = "$ " + (datosDelPrestamo.meses * datosDelPrestamo.cuota).toFixed(2)
}

btnContratar.addEventListener("click", ()=> {
    // ALTERNATIVA 01 - validar con el Tutor
    // alert("Un asesor de créditos lo contactará para finalizar la acreditación del dinero. ¡Muchas gracias por confiar en nuestra entidad para hacer realidad sus sueños!")
    // localStorage.clear()
    // location.href = "index.html"

    // ALTERNATIVA 02 - Usar un DIV en pantalla
    divMensajeFinal.classList.add("transition-div-show") // mostramos el div con mensaje final
    localStorage.clear()
})





recuperarDeLS()