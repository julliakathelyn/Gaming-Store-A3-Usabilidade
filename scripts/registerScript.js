document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio padrao do formulario (que recarregaria a página)

    // valores do campo, verifica se a senha e = senha, se nao for aparece mensagem de erro
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = 'As senhas não coincidem!'; // mensagem de erro
        mensagemErro.style.color = 'red';
    } else {
        mensagemErro.textContent = 'Registrado com sucesso!'; // se for = senha aparece a mensagem de registrado
        mensagemErro.style.color = 'green';
    }
});

// Funcao para formatar o CPF
function formatarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // remove todos os caracteres que nao sao numeros
    cpf = cpf.substring(0, 11); // Limita o CPF a 11 dígitos
    // formata o CPF adicionando pontos e traço
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');  
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return cpf;
}

// funcao para validar o CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // remove todos os caracteres que nao sao numeros
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) { // verifica se o cpf tem 11 digitos ou se todos digitos sao iguais
        // ^ indica uma string
        // (\d) corresponde a qualquer digito de 0-9, () = grupo de captura encontrado para uso posterior
        // \1 backreference que reutiliza oque ja foi capturado no primeiro grupo
        // {10} indica uqe o digito capturado (\1) deve ser repetido exatamente 10x
        // $ indica final da string 
        return false; // cpf invalido
    }
    ////////////////////////////////////////////////
    let soma = 0; // soma comeca apartir do 0
    let resto;
    
    // calculando o primeiro digito verificador
    for (let i = 1; i <= 9; i++) {
        // soma os primeiro 9 digitos do cpf e multiplica eles por pesos de 10 a 2
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    // calcula o resto da divisao da soma por 11, multiplicando por 10
    resto = (soma * 10) % 11;
    // se o resto for 10 ou 11 ele e definido como 0
    if ((resto === 10) || (resto === 11)) resto = 0;

    //compara o resto do calculo com 10ºdigito do cpf
    // se for diferente o cpf e invalido
    if (resto !== parseInt(cpf.substring(9, 10))) return false;
    ////////////////////////////////////////////////
    soma = 0;
    // soma dos primeiro 10 digitos do cpf multiplicados por pesos de 11 e 2
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    // se o resto for 10 ou 11, define como 0
    resto = (soma * 10) % 11;

    // compara o resto calculado com o 11ºdigito do CPF
    // se for diferente o cpf e invalido
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;
    return true; // cpf e invalido
}

// evento de input no campo CPF para formatar e validar o CPF
document.getElementById('cpf').addEventListener('input', function() { // pega o id do cpf e add um listener para o evento input assim a funcao e executada sempre que o usuario digitar algo no campo
    let cpf = this.value; //obtem o valor do campo input
    this.value = formatarCPF(cpf); // chama funcao para formatar o cpf e atualiza o valor do campo de input com cpf formatado ("12345678909") > retorna "123.456.789-09" 
    cpf = cpf.replace(/[^\d]+/g, ''); // remove todos os caracteres que não são dígitos para validação
    // verifica se e valido o cpf
    if (validarCPF(cpf)) { 
        document.getElementById('mensagemErro').textContent = ''; // limpa a mensagem de erro
        document.getElementById('cpfValidIcon').style.display = 'inline'; // Exibe ícone de validação do boxicons
    } else {
        document.getElementById('mensagemErro').textContent = 'CPF inválido'; // mostra msensagem de erro
        document.getElementById('mensagemErro').style.color = 'red'; // define a cor para vermelho
        document.getElementById('cpfValidIcon').style.display = 'none'; // esconde o icone validacao
    }
});

// Evento de submit no formulario para validar CPF e senhas
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;
    const mensagemErro = document.getElementById('mensagemErro');
    const cpf = document.getElementById('cpf').value.replace(/[^\d]+/g, ''); // remove os caracteres nao digitos
// valida se o cpf e valido
    if (!validarCPF(cpf)) {
        mensagemErro.textContent = 'CPF inválido'; // exibe a mensagem de erro
        mensagemErro.style.color = 'red'; // altera para cor vermelha
        document.getElementById('cpfValidIcon').style.display = 'none'; // esconde o icone de validacao
    } else if (senha !== confirmarSenha) { // verifica se as senhas sao iguais
        mensagemErro.textContent = 'As senhas não coincidem!'; // se nao for iguais a mensagem de erro e exibida
        mensagemErro.style.color = 'red'; // altera para cor vermelha
    } else {
        mensagemErro.textContent = 'Registrado com sucesso!'; // se for igual exibe mensagem de sucesso
        mensagemErro.style.color = 'green'; // altera para cor verde
    }
});
