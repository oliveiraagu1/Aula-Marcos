let flores = ['Rosa', 'Begônia', 'Dália', 'Orquídea', 'Tulipa', 'Bromélia', 'Girassol']
let preços = [12.60, 8.50, 15.45, 22.30, 6.25, 7.90, 9.20]
let somaTotal = 0

var quantidade = Number(prompt('Quantas flores deseja comprar?'))

    for(i=0; i < quantidade; i++){

        var escolhida = prompt("Escolha uma flor: ")
        var indiceEscolhida = flores.indexOf(escolhida)

        somaTotal += preços[indiceEscolhida]

    }

    if(somaTotal > 50){
        alert(`Você não tem dinheiro suficiente.`)
    }else{
        alert(`Ok, você me deve ${Math.round(somaTotal)} reais.`)

    }
