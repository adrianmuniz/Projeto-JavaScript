// recuperar o tbody pq la escreveremo os dados digitados 
const tbody = document.querySelector('tbody');

// recuperar o form e cancelar o evento padrao (envio)
// para isso preciso de um escutador de evento = submit;
// ao inves de enviar, executara a função para colocar os dados na tabela

document.querySelector('form').addEventListener('submit', function(event) {
    // cancelando um evento padrão
    event.preventDefault();

    // executar o que estiver abaixo

    //recuperar os campos do form
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ]

    // criar uma tr  - A linha da tabela
    const tr = document.createElement('tr');

    // fazer um forEach para percorrer o array e criar os tr e td
    campos.forEach((campo) => {
        // criar a td
        const td = document.createElement('td');

        // atribuir o valor digitado á td
        td.textContent = campo.value;

        // adicionar a tr na td criada
        tr.appendChild(td);
    });

    //colocar a tr no tbody
    tbody.appendChild(tr);

    //resetar o form
    this.reset();

    //dar foco ao usuario
    campos[0].focus();
})