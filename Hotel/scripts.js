let leitosvagos = 40
let novosacessos = 0

while (novosacessos <= leitosvagos) {

    let entrada = Number (prompt(`Existem ${leitosvagos - novosacessos} leitos vagos. Quantas pessoas entram ou saem?(+ ou -)` ))
    novosacessos += entrada

    if (entrada <= -1) {
        alert('Não é possível que haja mais do que 40 leitos vagos.')
        leitosvagos = 40
    }
    
};

let leitosexcedidos = novosacessos - leitosvagos
alert (`Não é possível pois ultrapassa a capacidade em ${leitosexcedidos} leitos`)
