let pipoca = 6
let chocolate = 3
let refrigerante = 8.5
let soma = 0

let tipos = Number(prompt("Quantos tipos de guloseimas você quer?"))

for(let i=1; i <= tipos; i++){

    let guloseima = prompt(`Qual a guloseima número ${i}?`);
    let quantidade = Number(prompt(`Qual a quantidade da guloseima número ${i}?`))

        if(guloseima === 'pipoca'){

            soma = soma + (pipoca * quantidade)
        }
        if(guloseima === 'chocolate'){

            soma = soma + (chocolate * quantidade)
        }
        if(guloseima === 'refrigerante'){

            soma = soma + (refrigerante * quantidade)
        }
}

alert(`O valor total a pagar é de ${soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`);
