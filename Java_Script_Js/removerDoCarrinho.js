function removerDoCarrinho(nome){
    for( var i in carrinho){
        if(carrinho[i].nome === nome){
            carrinho[i].quantidade --;
            if(carrinho[i].quantidade === 0){
                carrinho.splice(i, 1);
            
            }
            break;
    }
}
}
