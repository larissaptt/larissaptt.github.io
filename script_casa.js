let dinheiro = 0;

const moneySpan = document.getElementById("money");
const btnAdd = document.getElementById("addMoney");

// Botões já existentes
const casa_amarela = document.getElementById("buy_casa_amarela"); // 100
const asteroide    = document.getElementById("buy_asteroide");    // 400

// Novos botões
const casa_rico   = document.getElementById("buy_casa_rico");   // 50
const how_mother  = document.getElementById("buy_how_mother");  // 30
const castelo     = document.getElementById("buy_castelo");     // 200
const coraline    = document.getElementById("buy_coraline");    // 75

// Ganha +1
btnAdd.addEventListener("click", () => {
  dinheiro++;
  atualizar();
});

// Função genérica para comprar/alugar
function comprar(botao, preco, mensagem) {
  if (dinheiro >= preco) {
    dinheiro -= preco;
    botao.outerHTML = `<p><strong>${mensagem}</strong></p>`;
    atualizar();
  }
}

// Eventos de clique
casa_amarela.addEventListener("click", () => {
  comprar(casa_amarela, 100, "Você comprou a Casa Amarela!");
});

asteroide.addEventListener("click", () => {
  comprar(asteroide, 400, "Você comprou o Asteroide!");
});

casa_rico.addEventListener("click", () => {
  comprar(casa_rico, 50, "Você comprou a Casa do Rico!");
});

how_mother.addEventListener("click", () => {
  comprar(how_mother, 30, "Você comprou a casa de How I Met Your Mother!");
});

castelo.addEventListener("click", () => {
  comprar(castelo, 200, "Você comprou um Castelo!");
});

coraline.addEventListener("click", () => {
  comprar(coraline, 75, "Você comprou a Casa da Coraline!");
});

// Atualiza status dos botões
function atualizar() {
  moneySpan.textContent = dinheiro;

  if (casa_amarela) {
    casa_amarela.disabled = dinheiro < 100;
    casa_amarela.classList.toggle("locked", dinheiro < 100);
  }
  if (asteroide) {
    asteroide.disabled = dinheiro < 400;
    asteroide.classList.toggle("locked", dinheiro < 400);
  }
  if (casa_rico) {
    casa_rico.disabled = dinheiro < 50;
    casa_rico.classList.toggle("locked", dinheiro < 50);
  }
  if (how_mother) {
    how_mother.disabled = dinheiro < 30;
    how_mother.classList.toggle("locked", dinheiro < 30);
  }
  if (castelo) {
    castelo.disabled = dinheiro < 200;
    castelo.classList.toggle("locked", dinheiro < 200);
  }
  if (coraline) {
    coraline.disabled = dinheiro < 75;
    coraline.classList.toggle("locked", dinheiro < 75);
  }
}
