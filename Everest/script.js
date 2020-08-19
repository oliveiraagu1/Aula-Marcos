let meta = 3488
let subida_diaria = 0


function subir() {
    for (let dias = 0; dias < 8; dias++) {
        subida_diaria = Number(prompt(`Faltam ${meta} metros para o cume. Quantos metros você subiu hoje?`))
        meta = meta - subida_diaria

        if (meta < 0 && dias < 8) {
            alert(`parabéns! Você atingiu o cume em ${dias} dias!`)
            break;
        }
    }

    alert(`Você deve voltar, pois corre risco de ficar sem oxigênio.`)
}

subir()
