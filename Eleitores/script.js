function validaFormulario() {
	let inputEleitores = document.forms["meuForm"]["numeroEleitores"].value;
    let inputValidos = document.forms["meuForm"]["numeroValidos"].value;
    let inputBrancos = document.forms["meuForm"]["numeroBrancos"].value;
    let inputNulos = document.forms["meuForm"]["numeroNulos"].value;
	
	if (isNumeroVazioNuloOuIndefinido(inputEleitores)
		|| isNumeroVazioNuloOuIndefinido(inputValidos)
		|| isNumeroVazioNuloOuIndefinido(inputBrancos)
		|| isNumeroVazioNuloOuIndefinido(inputNulos)) {
		window.alert("Digite um número válido em todos os campos!");
		return false;
	}
	mostraResultados(inputEleitores, inputValidos, inputBrancos, inputNulos);
	return true;
};

function mostraResultados(inputEleitores, inputValidos, inputBrancos, inputNulos) {
    let perc_brancos = (inputBrancos/inputEleitores) * 100
    let perc_nulos = (inputNulos/inputEleitores) * 100
    let perc_validos = (inputValidos/inputEleitores) * 100

    window.alert(`O percentual de votos brancos é ${perc_brancos.toFixed(2)}%, o de votos nulos é ${perc_nulos.toFixed(2)}%, e o de votos válidos é ${perc_validos.toFixed(2)}%.`);
};

function isNumeroVazioNuloOuIndefinido(numero) {
	if (numero === null || numero === "" || numero === undefined) {
		return true;
	}
	return false;
};