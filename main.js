const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      if (abas[j]) abas[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    if (abas[i]) abas[i].classList.add("ativo");
  });
}