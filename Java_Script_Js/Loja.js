var removerDoCarrinho = document.getElementsByClassName("btn-danger")
console.log(removerDoCarrinho)
for(var i = 0; i <removerDoCarrinho.length; i++){
    var botao = removerDoCarrinho[i]
    botao.addEventListener("click", function(event){
        var botaoClicado = event.target
        botaoClicado.parentElement.parentElement.remove()
        atualizarTotalDoCarrinho() /*vai remover o valor total do carrinho quando tirar um intem*/
    })
}

function atualizarTotalDoCarrinho(){
    var itemDentroDoCarrinho = document.getElementsByClassName("itemCarrinho")[0] /*variavel recebe a div item do carrinho? e o zero eh pra pegar soh o primeiro item da lista do carrinho*/
    var fluxoCarrinho = itemDentroDoCarrinho.getElementsByClassName("fluxoCarrinho")
    var total = 0
    for(var i = 0; i < fluxoCarrinho.length; i++){
        var fluxoCarrinho = fluxoCarrinho[i]
        var precoDoElemento = fluxoCarrinho.getElementsByClassName("preco")[0] /*chama o preco*/
        var quantidadeDoElemento = fluxoCarrinho.getElementsByClassName("cart-quantity-input")[0] /*onde ta isso?*/
        var preco = parseFloat(precoDoElemento.innerText.replace("R$", ""))/*innertext.replace tirar o simbolo do real) e o parseFloat convert String digitanda em um Float*/ 
        var quantidade = quantidadeDoElemento.value
        total = total + preco * quantidade
}
document.getElementsByClassName("totalCarrinhoPreco")[0].innerText = "R$" + total
}