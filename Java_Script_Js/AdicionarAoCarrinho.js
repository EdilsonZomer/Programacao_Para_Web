function adicionarAoCarrinho(nome, preco, quantidade) {
    for( var i in carrinho){
        if(carrinho[i].nome === nome){
            carrinho[i].quantidade += quantidade;
            return;
    }
}

    var joguinho = new Jogo(nome, preco, quantidade)
    carrinho.push(joguinho)
}
