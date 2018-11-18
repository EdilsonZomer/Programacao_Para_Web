function logar(form) {

    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()



    if (form.nome.value == (JSON.parse(localStorage.getItem(1)).nome),
     form.senha.value  == (JSON.parse(localStorage.getItem(1)).senha)) {

        alert("LOGADO! \n Bem vindo " + form.nome.value);
    }
    else {

        alert("Dados incorretos");


    }
}
