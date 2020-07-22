var anoNascimento = document.getElementById('dataNascimento');
var anoAtual = document.getElementById('anoAtual');
var idade = Number(anoAtual.value) - Number(anoNascimento.value);

function calcularAnos () {
        var idade = Number(anoAtual.value) - Number(anoNascimento.value);
        var p = document.createElement('h3');
        var body = document.body;
        var texto  = document.createTextNode(`Você tem ${idade} anos.`);
        p.appendChild(texto);
        body.appendChild(p);
}


function calcular() {
    if (anoNascimento.value == '' || anoAtual.value == ''){
        alert('Digite os dados.')
    } else if (anoNascimento.value > anoAtual.value) {
        alert('Idade inválida.')
    } else {
        calcularAnos()
    }
    
}