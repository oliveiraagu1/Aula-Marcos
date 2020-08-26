let anos = [];

for (let ano = 2000; ano < 2010; ano++) {
    
    let houve = prompt(`Houve alistamento militar no ano ${ano}?`)

    if (houve != 's' && houve != 'n'){

        alert("Digite 's' para sim e 'n' para não")
        ano --

    } else if (houve == 's'){

        anos.push(ano)

    } else {continue}

}

let ultimo = anos.pop()

alert(`O ultimo alistamento foi feito em ${ultimo}`);
