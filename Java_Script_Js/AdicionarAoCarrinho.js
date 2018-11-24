function AdicionarAoCarrinho(nome, preco, quantidade) {
    for( var i in carrinho){
        if(carrinho[i].nome === nome){
            carrinho[i].quantidade ++;
            return;
    }
}

    var joguinho = new Jogo(nome, preco, quantidade)
    carrinho.push(joguinho)
    }
