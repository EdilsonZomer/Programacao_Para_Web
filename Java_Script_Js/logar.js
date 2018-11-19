
alert('ss')
function logar(form) {

    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()



    if (form.nome.value == (JSON.parse(localStorage.getItem(listaDeCadastros[0]))),
     form.senha.value  == (JSON.parse(localStorage.getItem(listaDeCadastros[0])))) {

        alert("LOGADO! \n Bem vindo " + form.nome.value);
    }
    else {

        alert("Dados incorretos");


    }

}
