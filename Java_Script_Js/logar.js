function logar2(form){

  
    /*chegar nome e senha*/ 
    
    form.nome.value = form.nome.value.toLowerCase()
    form.senha.value = form.senha.value.toLowerCase()
    
    if(form.nome.value == "chris" && form.senha.value == "slifer"){
       
        alert("LOGADO! \n Bem vindo " + form.nome.value);
    }
    else{
       
        alert("Dados incorretos");
}
}