function listaDeCompras(){
    var copiaDoCarrinho = [];
    for (var i in carrinho){
        var jogo = carrinho[i];
        var copiaDoJogo = {};
        for (var p in jogo){
            copiaDoJogo[p] = jogo[p];
        }
        copiaDoCarrinho.push(copiaDoJogo);
    }
    return copiaDoCarrinho;
}