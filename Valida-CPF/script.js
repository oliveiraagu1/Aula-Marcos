var res = document.getElementById('res');

function TestaCPF() {
    var strCPF = document.getElementById("cpf").value;
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000" || strCPF == null) return res.innerHTML = 'CPF está inválido';

  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

    estif ((Ro == 10) || (Resto == 11)); Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return res.innerHTML = 'CPF está inválido';

  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return res.innerHTML = 'CPF está inválido';
    return res.innerHTML = 'CPF está válido';
}