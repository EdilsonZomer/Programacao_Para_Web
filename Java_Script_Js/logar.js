function logar(evento) {
    evento.stopPropagation();
    evento.preventDefault();

    var form = document.getElementsByTagName("form")[0];
    var usuario = form.usuario.value;
    var senha = form.senha.value;

    var cadastrados = JSON.parse(localStorage.getItem("contas"))
    var usuario = cadastrados.find(function(cadastro) {
        return usuario == cadastro.usuario && senha == cadastro.senha;
    });

    if(usuario) {
        alert("Usuario autenticado!");
        window.location.href = "logado.html"

    } else {
        alert("Usuario não encontrado");
    }
}

/*for(i = 0; i < cadastrados.length; i++){
        if(form.nome.value == cadastrados[i].nome && form.senha.value == cadastrados[i].senha){
            alert("logado")
            break
        }
        else{
        alert("login incorreto")}*/      

   /* if (form.nome.value == (JSON.parse(localStorage.getItem("contas", listaDeCadastros[0]))),
     form.senha.value  == (JSON.parse(localStorage.getItem("contas", listaDeCadastros[0])))) {

        alert("LOGADO! \n Bem vindo " + form.nome.value);
    }
    else {

    alert("Dados incorretos");*/
