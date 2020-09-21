document.getElementById('salvar').onclick = function apresenta () {

    let aluno = document.getElementById('nome').value

    if (aluno.length < 1) {
        alert('Preencha o campo ALUNO')
        document.getElementById("nome").focus();
    } 
    
    let materia = []

    let alunos = [
        ['Nome', aluno],
        ['Matéria', materia]
    ];

    let math = document.getElementById('math')
    let port = document.getElementById('port')
    let eng = document.getElementById('eng')
    let bio = document.getElementById('bio')
    let hist = document.getElementById('hist')
    
    if (math.checked == true){
        materia.push(math.value)
    } 

    if (port.checked == true){
        materia.push(port.value)
    }

    if (eng.checked == true){
        materia.push(eng.value)
    }

    if (bio.checked == true){
        materia.push(bio.value)
    }

    if (hist.checked == true){
        materia.push(hist.value)
    }

    var objAlunos = Object.fromEntries(alunos);
    var objString = JSON.stringify(objAlunos)

    let res = document.getElementById('res')
    res.innerHTML = `Objeto: ${objString}`

}