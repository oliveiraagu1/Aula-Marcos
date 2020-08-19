let casais = Number(prompt("Quantos casais de leão baio existem dentro do grupo?"))
let individuais = 14 - (casais * 2)
let areaIndividual = 320
let areaPorCasal = 400

let total = (individuais * areaIndividual) + (casais * areaPorCasal)

alert(`O número de casais é ${casais} e o de solteiros é ${individuais}.`)
alert(`O total de área dominada pelo grupo é de ${total} km quadrados`)
