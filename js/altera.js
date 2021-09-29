// pegar o botão e atribuir uma função
document.querySelector('#alterarConteudo').addEventListener('click', () => {
    // recuperar campo de formulario e pegar o que foi digitado
    const novaInformacao = document.querySelector('#dados').value;
    console.log(novaInformacao);

    // recuperar a div que está exibindo o conteudo
    const novoConteudo = document.querySelector('#conteudo');
    console.log(novoConteudo);

    //mudando o valor da div no HTML
    novoConteudo.textContent = novaInformacao;

})

// INSERIR DADOS 

