// adiciona um evento de clique no icone do menu
document.getElementById('navMenuIcon').addEventListener('click', function () {
    //quando o icone e clicado a funcao e executada
    //altera a visibilidade quando o icone do menu e clicado
    document.getElementById('navLinks').classList.toggle('active');
});