let contas = 'contas';
let listaDeCadastros = JSON.parse(localStorage.getItem(contas)) || [];

function cadastrar(form){

   let cliente = { 

    nome: form.nome.value,
    senha: form.senha.value

    }

    let clienteSerializado = JSON.stringify(cliente);

    localStorage.setItem(1, clienteSerializado);

        /*listaDeCadastros.push(cliente);
        localStorage.setItem(contas, JSON.stringify(listaDeCadastros) );*/
    

  
    
   
   
   /* alert(JSON.parse(localStorage.getItem(1)).nome + "    " + JSON.parse(localStorage.getItem(1)).senha); LER O LOGIN */
   
} 
