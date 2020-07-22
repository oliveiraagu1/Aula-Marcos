function randomNumber(multiplicador, inputUsuario) {
    let numAleatorioAutomatico = -1
    let numExecucoes = 0
    while (numAleatorioAutomatico != inputUsuario) {
        numAleatorioAutomatico = Math.floor(Math.random() * multiplicador)
        numExecucoes += 1
        console.log("Numeros gerados automaticamente: ", numAleatorioAutomatico)
        console.log("Numero execucoes: ", numExecucoes)
    }
    return numExecucoes
}

function random09(num) {
    let num09 = document
        .getElementById("num0ate9")
        .value

    let input09 = document.getElementById("res0ate9")

    if (num09 < 0 || num09 > 9) {
        window.alert("O número deve estar entre 0 e 9!")
        limpaInput09(num09)
    } else {
        let numExecucoes = randomNumber(10, num09)
        if (numExecucoes == 1) {
            input09.innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vez!`
            limpaInput09(num09)
        } else {
            input09.innerHTML = `A quantidade de execuções para o computador gerar o número ${num09} foi de ${numExecucoes} vezes!`
            limpaInput09(num09)
        }
    } 

    
}

function limpaInput09(inputUsuario) {
    document
        .getElementById("num0ate9")
        .value = ''
}

function random99() {
    let num99 = document
        .getElementById("num0ate99")
        .value

    let input99 = document.getElementById("res0ate99")

    if (num99 < 0 || num99 > 99) {
        window.alert("O número deve estar entre 0 e 99!")
        limpaInput99(num99)
    } else {
        let numExecucoes = randomNumber(100, num99)
        if (numExecucoes == 1) {
            input99.innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vez!`
            limpaInput99(num99)
        } else {
            input99.innerHTML = `A quantidade de execuções para o computador gerar o número ${num99} foi de ${numExecucoes} vezes!`
            limpaInput99(num99)
        }
    }
}

function limpaInput99(inputUsuario) {
    document
        .getElementById("num0ate99")
        .value = ''
}