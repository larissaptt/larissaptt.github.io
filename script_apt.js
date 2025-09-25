let dinheiro = 0;

const moneySpan = document.getElementById("money");
const btnAdd = document.getElementById("addMoney");

// Botões de compra/aluguel
const btnBonito      = document.getElementById("buy_bonito");      // 50
const btnSombria     = document.getElementById("buy_sombria");     // 10
const btnPrivacidade = document.getElementById("buy_privacidade"); // 20
const btnTorres      = document.getElementById("buy_torres");      // 300

// Ganha +1
btnAdd.addEventListener("click", () => {
  dinheiro++;
  atualizar();
});

// Função genérica para "comprar/alugar"
function comprar(botao, preco, mensagem) {
  if (dinheiro >= preco) {
    dinheiro -= preco;
    botao.outerHTML = `<p><strong>${mensagem}</strong></p>`; // substitui o botão
    atualizar();
  }
}

// Eventos de clique
btnBonito.addEventListener("click", () => {
  comprar(btnBonito, 50, "Você alugou o Apartamento Bonito!");
});

btnSombria.addEventListener("click", () => {
  comprar(btnSombria, 10, "Você alugou a Casa Sombria!");
});

btnPrivacidade.addEventListener("click", () => {
  comprar(btnPrivacidade, 20, "Você comprou o Apto Sem Privacidade!");
});

btnTorres.addEventListener("click", () => {
  comprar(btnTorres, 300, "Você comprou as Torres Gêmeas!");
});

// Atualiza status dos botões
function atualizar() {
  moneySpan.textContent = dinheiro;

  if (btnBonito) {
    btnBonito.disabled = dinheiro < 50;
    btnBonito.classList.toggle("locked", dinheiro < 50);
  }
  if (btnSombria) {
    btnSombria.disabled = dinheiro < 10;
    btnSombria.classList.toggle("locked", dinheiro < 10);
  }
  if (btnPrivacidade) {
    btnPrivacidade.disabled = dinheiro < 20;
    btnPrivacidade.classList.toggle("locked", dinheiro < 20);
  }
  if (btnTorres) {
    btnTorres.disabled = dinheiro < 300;
    btnTorres.classList.toggle("locked", dinheiro < 300);
  }
}
