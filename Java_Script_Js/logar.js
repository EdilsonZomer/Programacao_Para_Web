function logar(form){

/*chegar nome e senha*/ 

form.nome.value = form.nome.value.toLowerCase()
form.senha.value = form.senha.value.toLowerCase()

if(form.nome.value == "chris" && form.senha.value == "123"){
    console.log("chegou?");

location ="logado.html"
}
else{
   
    alert("Dados incorretos")
}
}