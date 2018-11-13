var idCadastro = "id"
var listaDeCadastrados = JSON.parse(localStorage.getItem(idCadastro)) || [];

function cadastrar(cadastrando){

    var cadastros = document.forms[0];

    var cadastrado = {
        
        nome: cadastros.nome.value,
        senha: cadastros.senha.value 
    }
        
    function addProfissional(cadastrado) {
        listaDeCadastrados.push(cadastrado);
        localStorage.setItem(idCadastro , JSON.stringify(listaDeCadastrados));


}
    addProfissional(cadastrado);
}