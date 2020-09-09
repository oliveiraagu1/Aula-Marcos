function cadastraDoenca(){
    
    let numeroDoencas = Number(prompt("Quantas doenças serão cadastradas?"))
    let nomeDoenca = []
    let tipo = []
    let virus = []
    let bacterias = []
    let virusBacteria = []

    for(i=0; i < numeroDoencas; i++){
        nomeDoenca.push(prompt("Qual nome da doença: "))
        tipo.push(prompt("Qual o tipo?: \n(1 = vírus 2 = bactéria 3 = ambos"))

        if(tipo[i] === "1"){
            virus.push(nomeDoenca[i])
        }
        if(tipo[i] === "2"){
            bacterias.push(nomeDoenca[i])
        }
        if(tipo[i] === "3"){
            virusBacteria.push(nomeDoenca[i])
        }

    }

    document.getElementById("resultado").innerHTML = `Relátorio de doenças cadastradas: ` + "<br/>" + `Total de doenças: ${virusBacteria.length + virus.length + bacterias.length} (${virusBacteria + "," + virus + "," + bacterias}).` + "<br/>" + `Doenças causadas por vírus, total: ${virus.length}. Doenças: ${virus}` + "<br/>" + `Doenças causadas por bactérias, total: ${bacterias.length}. Doenças: ${bacterias}` + "<br/>" + ` Doenças causadas por vírus ou bactérias, total: ${virusBacteria.length}. Doenças: ${virusBacteria}`
}
