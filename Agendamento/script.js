function reservar() {
    var nomeCliente = document.getElementById('nome');
    var quantidadeClientes = document.getElementById('quantidade');
    var dataReserva = new Date(document.getElementById('dateInput').value)

    if (nomeCliente.value == "" || quantidadeClientes.value == ""){

        alert("Preencha os dados corretamente.")

    } else if (dataReserva > new Date()){

    
        var mesExt = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
        var diaExt = ['domingo','segunda','terça','quarta','quinta','sexta','sábado']

        var dia_semana = dataReserva.getDay()+1;
        var dia_mes = dataReserva.getDate()+1;
        var mes = dataReserva.getMonth();
        var ano = dataReserva.getFullYear();

        var dados = JSON.parse(localStorage.getItem("dadosReserva"));

        if (dados == null) {
            localStorage.setItem("dadosReserva", "[]");
            dados = [];
        }

        var registro = {
            nome: nomeCliente.value,
            quantidade: quantidadeClientes.value,
            data: dataReserva.value
        }

        dados.push(registro)

        localStorage.setItem("dadosReserva", JSON.stringify(dados));
        
        alert(`Olá ${nomeCliente.value}, seu agendamento foi feito com sucesso para ${diaExt[dia_semana]}, ${dia_mes} de ${mesExt[mes]} de ${ano}. Válido para ${quantidadeClientes.value} pessoas.`)

        nomeCliente.value = "";
        quantidadeClientes.value = "";
        
    } else {
        
        alert("Não é possível reservar nessa data.")

    }
}
