let somaval = 0
let somapts = 0

let num_multas = prompt("Digite o número de multas a cadastrar: ");

for(i=0; i < num_multas; i++){

    let valor = Number(prompt("Digite o valor: "));
    let pontos = Number(prompt("Digite os pontos: "));
    somaval = somaval + valor
    somapts = somapts + pontos

};

alert(`A soma dos valores das multas é ${somaval}.`)
alert(`A soma dos pontos é ${somapts}.`)

    if(somapts > 21){
        alert("Está irregular")

    }else{
        alert("Está regular")
    };
