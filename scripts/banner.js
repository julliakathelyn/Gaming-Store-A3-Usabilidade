//declara slideindex como 1
let slideIndex = 1;
// chama funcao shoslides() para exibir o slide inicialmente
showSlides(slideIndex);

// funcao para avancar e voltar os slides
function avancarSlides(n) {
    // atualiza o banner para o proximo ou anterior banner
    exibirSlides(slideIndex += n);
}

// funcao para definir o banner atual
function slideAtual(n) {
    // define o slideIndex para o slide especificado
    exibirSlides(slideIndex = n);
}

// funcao para mostrar os slides
function exibirSlides(n) {
    let i;
    // obtem todos os elementos com a classe ~slide~ que tem na loja.html
    let slides = document.getElementsByClassName("slide");
    //obtem todos os elementos com a classe ~dot~ (pontos do banner)
    let dots = document.getElementsByClassName("dot");

    // se o indice do slide for maior que o numero total de slides, ele retorna para o primeiro slide
    if (n > slides.length) {
        slideIndex = 1}
    
    // se o indice do slide for menor que 1 ele retorna para o ultimo slide
    if (n < 1) {
        slideIndex = slides.length}
    
    // esconde os slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // remove a classe "active" de todos os pontos indicadores antes de destacar visualmente o ponto indicador correspondente ao slide atual 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //active presente no css
    }

    // exibe slide atual e marca o ponto corresponde como ativo
    slides[slideIndex-1].style.display = "block";
    // exibe o slide atual e marca visualmente o ponto indicador correspondente como ativo
    dots[slideIndex-1].className += " active";
}