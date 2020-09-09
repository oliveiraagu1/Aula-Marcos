function verificaNumero(){

    let vetor = [1, 8, 15, 22, 24, 30, 35, 40, 47, 48]
    let inputUsuario = Number(document.getElementById("numeroInputUsuario").value);

    for(i=0; i < 10; i++){
        if(inputUsuario === vetor[i]){
            document.getElementById("resultado").innerHTML = `O número que você digitou é: ${inputUsuario} e ele existe no vetor, estando no índice: ${i}`
            return
        }
    }
    alert("Você errou, Digite outro número!")
}