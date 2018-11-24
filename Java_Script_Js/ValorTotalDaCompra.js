function valorTotalDaCompra(){
    var totalDaCompra = 0;
    for(var i in carrinho){
        totalDaCompra += carrinho[i].preco * carrinho[i].quantidade;
    }
    return totalDaCompra;
}