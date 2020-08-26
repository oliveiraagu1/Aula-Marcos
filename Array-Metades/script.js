let numeros = []
let soma1 = 0;
let soma2 = 0;

for (i = 0; i < 10; i++) {
    numeros[i] = Number(prompt('Digite um numero positivo e inteiro:'))

    if (i<5){
        soma1 = soma1 + numeros[i];
    } else {
        soma2 = soma2 + numeros[i];
    }
}

alert(`O resultado da soma da primeira metade, menos a soma da segunda metade é ${soma1 - soma2}`)
