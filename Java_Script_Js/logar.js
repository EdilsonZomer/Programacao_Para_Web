function acesso(form){

/*chegar nome e senha*/ 


form.nome.value = form.name.value
form.senha.value = form.senha.value

if(form.name.value == "chris" && form.senha.value == "123"){
location ="acesso.html"
}
else{
    form.nome.value=""
    form.senha.value=""
    alert("Dados incorretos")
}
}