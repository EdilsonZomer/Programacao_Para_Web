
var carrinhoDeCompras = (function () {

    var carrinho = [];
   

    function Jogo(nome, preco, quantidade){
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    
   function salvarCarrinho() {
        localStorage.setItem("compras", JSON.stringify(carrinho));
    }

    function carregarCarrinho() {
        carrinho = JSON.parse(localStorage.getItem("compras"));

    }

    carregarCarrinho();
    


    var obj = {};

    obj.adicionarAoCarrinho = function (nome, preco, quantidade){
        for (var i in carrinho) {
            if (carrinho[i].nome === nome) {
                carrinho[i].quantidade += quantidade;
                salvarCarrinho()
                return;
            }
        }

        console.log("adicionarAoCarrinho:", nome, preco, quantidade);

        var jogo = new Jogo(nome, preco, quantidade);
        carrinho.push(jogo)
        salvarCarrinho();
    };

    obj.removerDoCarrinho = function (nome) {
        for (var i in carrinho) {
            if (carrinho[i].nome === nome) {
                carrinho[i].quantidade--;
                if (carrinho[i].quantidade === 0) {
                    carrinho.splice(i, 1);

                }
                break;
            }
        }
        salvarCarrinho()
    }

    obj.removerTodosDoCarrinho = function (nome) {
        for (var i in carrinho) {
            if (carrinho[i].nome === nome) {
                carrinho.splice(i, 1);
                break;
            }
        }
        salvarCarrinho()
    };

    obj.limparCarrinho = function () {
        carrinho = []
        salvarCarrinho()
    };

    obj.quantidadeTotalDeJogosNoCarrinho = function () {
        var quantidadeTotal = 0;
        for (var i in carrinho) {
            quantidadeTotal += carrinho[i].quantidade;
        }
        return quantidadeTotal;
    };

    obj.valorTotalDaCompra = function () {
        var totalDaCompra = 0;
        for (var i in carrinho) {
            totalDaCompra += carrinho[i].preco * carrinho[i].quantidade;
        }
        return totalDaCompra.toFixed(2); /*limitar para dois numeros depois do ponto*/
    };

    obj.listaDeCompras = function () {
        var copiaDoCarrinho = [];
        for (var i in carrinho) {
            var jogo = carrinho[i];
            var copiaDoJogo = {};
            for (var p in jogo) {
                copiaDoJogo[p] = jogo[p];
            }
            copiaDoJogo.total = jogo.preco * jogo.quantidade;
            copiaDoCarrinho.push(copiaDoJogo);
        }
        return copiaDoCarrinho;
    };
       
    
    return obj;
    
})();

