function calcularExpoente() {

    var numBase = document.getElementById("numeroBase").value
    var numExpoente = document.getElementById("expoente").value

    var resBaseExpoente = numBase * numBase
    var contador = numExpoente

    for (i = contador - 1; i > 1; i--) {
        resBaseExpoente = resBaseExpoente * numBase
    }
    document.getElementById("resultadoExponenciacao").innerHTML = `O número ${numBase} elevado a ${numExpoente} é = ${resBaseExpoente}.`
}
