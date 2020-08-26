let array = []
let n = 0;

for (i = 0; i < 10; i++) {
    let n = Number(prompt('Digite um número:'));
    array.push(n);
}

alert(array.sort(function(a,b){return a - b}));
