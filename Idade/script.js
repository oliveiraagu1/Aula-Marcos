function enviarDados() {
    
    var nomeUsuario1 = document.getElementById("nomeUs1").value
    var idadeUsuario1 = document.getElementById("idadeUs1").value
    var nomeUsuario2 = document.getElementById("nomeUs2").value
    var idadeUsuario2 = document.getElementById("idadeUs2").value
    var nomeUsuario3 = document.getElementById("nomeUs3").value
    var idadeUsuario3 = document.getElementById("idadeUs3").value
    var nomeUsuario4 = document.getElementById("nomeUs4").value
    var idadeUsuario4 = document.getElementById("idadeUs4").value
    var nomeUsuario5 = document.getElementById("nomeUs5").value
    var idadeUsuario5 = document.getElementById("idadeUs5").value

    var resultado = document.getElementById("resultadoMedias")

    if (nomeUsuario1 == "" || idadeUsuario1 == "" || nomeUsuario2 == "" || idadeUsuario2 == "" || nomeUsuario3 == "" || idadeUsuario3 == "" || nomeUsuario4 == "" || idadeUsuario4 == "" || nomeUsuario5 == "" || idadeUsuario5 == "") {
        window.alert("Complete os campos em branco para continuar.")
           
    } else if ((idadeUsuario1 < 1 || idadeUsuario1 > 120) || (idadeUsuario2 < 1 || idadeUsuario2 > 120) || (idadeUsuario3 < 1 || idadeUsuario3 > 120) || (idadeUsuario4 < 1 || idadeUsuario4 > 120) || (idadeUsuario5 < 1 || idadeUsuario5 > 120)) {
        window.alert("[Erro] A idade informada deve estar entre 1 e 120.")
    } else {
       
        let arrayPessoas = [{
                nome: nomeUsuario1,
                idade: idadeUsuario1
            },
            {
                nome: nomeUsuario2,
                idade: idadeUsuario2
            },
            {
                nome: nomeUsuario3,
                idade: idadeUsuario3
            },
            {
                nome: nomeUsuario4,
                idade: idadeUsuario4
            },
            {
                nome: nomeUsuario5,
                idade: idadeUsuario5
            },
        ]

        var soma = 0;
        var mediaIdades = 0;
        for (i = 0; i < arrayPessoas.length; i++) {
            soma += Number(arrayPessoas[i].idade)
        }
        mediaIdades = soma / arrayPessoas.length

        var menorIdade = 200;
        for (i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].idade < menorIdade) {
                menorIdade = Number(arrayPessoas[i].idade)
            } else {
                menorIdade = menorIdade
            }
        }

        var usuarioMenorIdade = ""
        for (i = 0; i < arrayPessoas.length; i++) {
            if (arrayPessoas[i].idade == menorIdade) {
                usuarioMenorIdade = arrayPessoas[i].nome
                console.log("arrayPessoas[i].nome", arrayPessoas[i].nome)
            }
        }

        resultado.innerHTML = `A média das idades é ${mediaIdades}. Sendo o ${usuarioMenorIdade} mais novo entre os demais, por ter ${menorIdade} ano(s)`
    }

};