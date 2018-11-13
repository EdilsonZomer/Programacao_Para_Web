function logar(form){

  
    /*chegar nome e senha*/ 
    
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()
    
    if(localStorage.getItem(nome.value) == "chris" && localStorage.getItem(senha.value) == "slifer"){
       
        alert("LOGADO! \n Bem vindo " + form.nome.value);
    }
    else{
       
        alert("Dados incorretos");
}
}