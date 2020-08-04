for (let i = 10; i >= 0; i--) {
    numero = window.prompt("Próximo número")

    if (numero != i) {
        window.alert("Você errou a sequência, tente novamente!")
        break
    } else if (numero == 1) {
        window.alert("Você acertou a sequência!")
        break
    }
}
