// DOMContentLoaded e um evento que garante que o script so seja carregado assim que a pagina tenha sido carregada completamente
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('forgotPasswordForm');// puxa o formulario pelo id
    const emailInput = document.getElementById('email'); // puxa o campo de entrada do email pelo id
    const mensagemErro = document.getElementById('mensagemErro'); // o elemento exibe mensagem de erro
    // Adiciona um ouvinte para o evento de envio do formulario
    // Esta funcao será executada quando o formulaio for enviado/registrado
    form.addEventListener('submit', function(event) {
        mensagemErro.textContent = '';  // Limpa o campo de texto

        //puxa o email do input
        const email = emailInput.value;

        // verifica se o email tem o @ se nao tiver ele pede que insira um email valido
        if (!email.includes('@')) {
            event.preventDefault();  // Impede o envio do formulário
            // e exibe a mensagem de erro
            mensagemErro.textContent = 'Por favor, insira um e-mail válido contendo "@"';
            mensagemErro.style.color = 'red';
        }
    });
});