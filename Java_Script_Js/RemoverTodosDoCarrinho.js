function removerTodosDoCarrinho(nome) {
    for (var i in carrinho) {
        if (carrinho[i].nome === nome) {
                carrinho.splice(i, 1);
                break;
            }

        }
    salvarCarrinho()
    }
