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
document.querySelector('#insereConteudo').addEventListener('click', () => {
    //recuperar valor digitado
    const conteudo = document.querySelector('#novosDados').value;

    // recuperar a div sera nela que faremos a gravação do novo valor
    const nova = document.querySelector('#novaTag');

    //criar um elemento h2
    const novoH2 = document.createElement('h2');

    //atribuir ao h2 o conteudo de texto digitado
    novoH2.textContent = conteudo;

    // adicionar o h2 criado na div
    nova.appendChild(novoH2);

})
