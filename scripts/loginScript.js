//validando login
// add um submit ao formuiario com id loginform("loginForm") que esta presente no login.html
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();//previne envio padrao, assim a pagina nao recarrega

    // pega os valores do campo usuario e senha
    var usuario = document.getElementById("usuario").value; 
    var senha = document.getElementById("senha").value;

    //condicao do usuario e senha
    if (usuario === "login@login.com" && senha === "123") {
        var mensagemErro = document.getElementById("mensagemErro"); // elemento para exibir mensagem de erro ou sucesso
        mensagemErro.textContent = "Login feito com sucesso!";
        mensagemErro.style.color = "green";
    } else {
        // obtem o elemento que vai exibir a mensagem de erro em amarelo
        var mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.textContent = "Usuário ou senha incorretos. Por favor, tente novamente.";
        mensagemErro.style.color = "yellow";
    }
});
