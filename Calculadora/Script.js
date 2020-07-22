function somar() {
    const primeiroNumero = document.getElementById("primeiroNumero");
    const segundoNumero = document.getElementById("segundoNumero");
    document.getElementById("resultado").value = 
    Number(primeiroNumero.value) + Number(segundoNumero.value);
    primeiroNumero.value="";
    segundoNumero.value="";
  }
  function subtrair() {
    document.getElementById("resultado").value = Number(document.getElementById("primeiroNumero").value) - Number(document.getElementById("segundoNumero").value);
    document.getElementById("primeiroNumero").value="";
    document.getElementById("segundoNumero").value="";
  }
  function multiplicar() {
    document.getElementById("resultado").value = Number(document.getElementById("primeiroNumero").value) * Number(document.getElementById("segundoNumero").value);
    document.getElementById("primeiroNumero").value="";
    document.getElementById("segundoNumero").value="";
  }
  function dividir() {
    document.getElementById("resultado").value = Number(document.getElementById("primeiroNumero").value) / Number(document.getElementById("segundoNumero").value);
    document.getElementById("primeiroNumero").value="";
    document.getElementById("segundoNumero").value="";
  }
