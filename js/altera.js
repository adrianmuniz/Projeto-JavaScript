// pegar o botão e atribuir uma função
document.querySelector('#alterarConteudo').addEventListener('click', () => {
    // recuperar campo de formulario e pegar o que foi digitado
    const novaInformacao = document.querySelector('#dados').value;
    console.log(novaInformacao);
})

