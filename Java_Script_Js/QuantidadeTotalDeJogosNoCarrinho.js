function quantidadeTotalDeJogosNoCarrinho(){
    var quantidadeTotal = 0;
    for(var i in carrinho){
        quantidadeTotal += carrinho[i].quantidade;
    }
    return quantidadeTotal;
}