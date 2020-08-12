function verificar() {
    var n1 = document.getElementById('numero1').value;
    var n2 = document.getElementById('numero2').value;
    var n3 = document.getElementById('numero3').value;
    var n4 = document.getElementById('numero4').value;
    var n5 = document.getElementById('numero5').value;   
    var res = document.getElementById('resultado')

    function media() {
        var media = (Number(n1) + Number(n2) + Number(n3) + Number(n4) + Number(n5))/5
        res.innerHTML = `A média entre os números pares:(${n1}, ${n2}, ${n3}, ${n4} e ${n5}) é = ${media}`
    }

    if (n1 % 2 == 1 || n2 % 2 == 1 || n3 % 2 == 1 || n4 % 2 == 1 || n5 % 2 == 1) {
        alert('Você digitou algum número impar em um dos campos, sendo assim não será feita a média')
    } else {
        media()
    }

    
};
