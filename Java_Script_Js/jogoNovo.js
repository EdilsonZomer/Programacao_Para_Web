function jogoNovo(form) { 
    
     /*os valores em branco viram variaveis*/
    var jogo = {

    nome: form.nomeJogo.value,
    valor: form.valorJogo.value,
    desc: form.descJogo.value

    }

    let jogoSerializado = JSON.stringify(jogo);

    localStorage.setItem(2, jogoSerializado);
    
   

}
console.log(JSON.parse(localStorage.getItem(2)))


