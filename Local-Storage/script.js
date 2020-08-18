var pdiv = document.getElementById('resultado')

function salvar()  {
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var aluno = {nome, idade}
    localStorage.setItem("teste", JSON.stringify(aluno))
}

function apresentar() {
    let retorno = localStorage.getItem('teste')
    let converter = JSON.parse(retorno)
    resultado.innerHTML = `Seu nome é ${converter.nome} e você tem ${converter.idade} anos` 
}