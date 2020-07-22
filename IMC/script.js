btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    peso = parseFloat(document.querySelector(".peso").value);
    altura = parseFloat(document.querySelector(".altura").value);
    result = peso/(altura*altura);

    if(result <= 18.5)
        result += " Abaixo do peso";
    if(result >= 18.5 && result < 24.9)
        result += " Peso normal";
    if(result >= 25 && result < 29.9)
        result += " Sobrepeso";
    if(result >= 30 && result < 34.9)
        result += " Obesidade grau 1";
    if(result >= 35 && result < 39.9)
        result += " Obesidade grau 2";
    if(result >= 40)
        result += " Obesidade grau 3";
    result = "IMC = " +result;
    document.querySelector(".result").innerHTML = result;


});
