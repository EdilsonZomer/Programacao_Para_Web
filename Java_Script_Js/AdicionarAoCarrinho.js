var carrinho = "carrinho"
function AdicionarAoCarrinho(jogo){


    let jogoAdicionado = JSON.stringify(jogo);

    localStorage.setItem(carrinho, jogoAdicionado);


}