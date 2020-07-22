function testar() {
    let n = document.getElementById('numero').value
    if (n == ""){
        alert('Você precisa digitar um número [0,100]')
    } else if (n == 100){
        var body = document.body;
        var p = document.createElement('h1');
        var texto  = document.createTextNode("Você acertou o número!");
        p.appendChild(texto);
        body.appendChild(p);
    } else {
        var body = document.body;
        var p = document.createElement('h3');
        var texto  = document.createTextNode("Você digitou o número errado, tente novamente!");
        p.appendChild(texto);
        body.appendChild(p);
    }
}

function limpar() {
    document.getElementById('numero').value = ''
}