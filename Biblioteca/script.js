
var título = document.getElementById("título")
var editora = document.getElementById("editora")
var autor = document.getElementById("autor")
var ano = document.getElementById("ano")
var copias = document.getElementById("copias")

let livros = []

function Livro(título, editora, autor, ano, copias){

    this.título = título
    this.editora = editora
    this.autor = autor
    this.ano = ano
    this.copias = copias

}

function Pesquisar(){

    let pesquisa = título.value
        
        for(i=0; i < livros.length; i++){

            if(livros[i].título == pesquisa) {

                document.getElementById("editora").value = livros[i].editora
                document.getElementById("autor").value = livros[i].autor
                document.getElementById("ano").value = livros[i].ano
                document.getElementById("copias").value = livros[i].copias

            }

        }

}



function Cadastrar(){

    let novoLivro = new Livro (título.value, editora.value, autor.value, ano.value, copias.value)
    livros.push(novoLivro)
    alert("Livro cadastrado com sucesso!")

}

function Excluir(){





}

function Listar(){

    let listacompleta = ''

        for (i=0; i < livros.length; i++){

            listacompleta += (Object.values(livros[i]).join(' , ')) + '<br>'

        }

        document.getElementById("Resultado").innerHTML = listacompleta
    
}

