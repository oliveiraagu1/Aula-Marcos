function calcularFatorial() {
    var n1_inputFatorial = Number(document.getElementById("numeroFatorial").value)
    var resFatorial = document.getElementById("resultadoFatorial")
    var n1Input = n1_inputFatorial

    var n2_inputFatorial = n1_inputFatorial - 1
    var fatorial = n1_inputFatorial * n2_inputFatorial

    if (n1_inputFatorial == 0 || n1_inputFatorial == 1) {
        resFatorial.innerHTML = `${n1_inputFatorial}! = 1.`
    } else {
        while (n1_inputFatorial != 1 && n2_inputFatorial > 1) {
            n1_inputFatorial--
            n2_inputFatorial--
            fatorial = (fatorial * n2_inputFatorial)
        }
        resFatorial.innerHTML = ` O fatorial de ${n1Input}! é ${fatorial}.`
    }
}