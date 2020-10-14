let valoresOrdenar = []

function enviarValores() {
    let valor = Number(document.getElementById("valores").value)
    valoresOrdenar.push(valor)

    sequenciaOriginalHtml()
}

function sequenciaOriginalHtml() {
    let sequencia = document.getElementById("sequenciaOriginal")
    sequencia.innerHTML = "Sua sequência: " + valoresOrdenar
    document.getElementById("valores").value = ""
}

function ordenarSelecao() {

    let countStart = performance.now() 

    let i, j, index;
    for (i = 0; i < valoresOrdenar.length - 1; i++) {
        index = i;
        for (j = i + 1; j < valoresOrdenar.length; j++) {
            if (valoresOrdenar[j] < valoresOrdenar[index]) {
                index = j;
            }
        }
        let menorNumero = valoresOrdenar[index];
       
        valoresOrdenar[index] = valoresOrdenar[i];
       
        valoresOrdenar[i] = menorNumero;
        
    }

    let countEnd = performance.now() 
    document.getElementById("resultadoHtml").innerHTML += "Sequência ordenada por seleção: " + valoresOrdenar + "<br>" + "Tempo de execução: " + (countEnd - countStart) + " milisegundos" + "<br>" + "<br>"
}

function ordenarInsercao() {

    let countStart = performance.now() 

    let i, j, valor;
    for (i = 1; i < valoresOrdenar.length; i++) {
        
        valor = valoresOrdenar[i];
        j = i - 1; 
        while (j > -1 && valoresOrdenar[j] > valor) {
           
            valoresOrdenar[j + 1] = valoresOrdenar[j];
            
            j--;
        }
        valoresOrdenar[j + 1] = valor;
        
    }

    let countEnd = performance.now() 

    document.getElementById("resultadoHtml").innerHTML += "Sequência ordenada por inserção: " + valoresOrdenar + "<br>" + "Tempo de execução: " + (countEnd - countStart) + " milisegundos" + "<br>" + "<br>"
}

function resetValores() {
    document.getElementById("valores").value = ""
    valoresOrdenar = []
    document.getElementById("sequenciaOriginal").innerHTML = ""
    document.getElementById("resultadoHtml").innerHTML = ""
}