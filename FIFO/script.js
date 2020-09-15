arrayTrabalhoAlunos = [
    {
      nome: "Bruno",
      idade: 21,
      genero: "Masculino",
      formaDePagamento: "Dinheiro",
      filme: "Titanic",
    },
    {
     nome: "Leandro",
      idade: 25,
      genero: "Masculino",
      formaDePagamento: "Di nheiro",
      filme: "Interestelar",
    },
    {
      nome: "Lara",
      idade: 18,
      genero: "Feminino",
      formaDePagamento: "Cartao",
      filme: "Titanic",
    },
    {
      nome: "Pedro",
      idade: 16,
      genero: "Masculino",
      formaDePagamento: "Cartao",
      filme: "Interestelar",
    },
    {
      nome: "Mikaella",
      idade: 20,
      genero: "Feminino",
      formaDePagamento: "Cartao",
      filme: "Titanic",
    },
];

function verificar() {
  if (arrayTrabalhoAlunos.length != 0) {

    let i = 0;

    let lista = `O seu nome é: ` + arrayTrabalhoAlunos[i].nome + ", " +
     `Sua idade é: ` + arrayTrabalhoAlunos[i].idade + ", " +
     `Seu gênero é: ` + arrayTrabalhoAlunos[i].genero + ", " +
     `Sua forma de pagamento é: ` + arrayTrabalhoAlunos[i].formaDePagamento + ", " +
     `Seu filme é: ` + arrayTrabalhoAlunos[i].filme;
    document.getElementById("mostrar").innerHTML = lista;

    arrayTrabalhoAlunos.shift();
  } else {
    alert("Está fila no momento está vazia!");
    lista = "A Fila está vazia!";
    document.getElementById("mostrar").innerHTML = lista;
  }
}
