function jogoNovo(form) { 
    console.log("foi")
    var jogo = {

    nome: form.nomeJogo.value,
    valor: form.valorJogo.value,
    Desc: form.descJogo.value

    }

    let jogoSerializado = JSON.stringify(jogo);

    localStorage.setItem(1, jogoSerializado);
    
   

}
console.log(JSON.parse(localStorage.getItem(1,localStorage)))


