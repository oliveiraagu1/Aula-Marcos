let array = [];
let n = 0;
for (i=0; i<5; i++) {
    n = Number(prompt('Digite um numero:'));
    array.push(n)
}

alert(`Os numeros digitados foram ${array}`)

array.sort(function(a,b){return a-b});

alert(`O maior numero digitado foi ${array[4]}`)

let maior = array[4]

let menores = array.pop()

let mult = array.map(function(menores) {return menores * maior})

alert(`A multiplicação dos menores pelo maior é ${mult}`);

let soma = mult.reduce(function(soma, i){return soma + i;}, 0);

alert(`a soma das multiplicações é ${soma}`)
