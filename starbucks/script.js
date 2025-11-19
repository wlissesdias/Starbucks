let imagem = document.querySelector(".imagem-copo");
let circulo = document.querySelector(".circulo");

function trocarCopoECor(enderecoImagem, cor) {
   imagem.src = enderecoImagem;
   circulo.style.backgroundColor = cor;
}
