class Funcionario {
  constructor(nome, address, salario, type,pagamento,sindicato) {
    this.nome = nome;
    this.address = address;
    this.salario = salario;
    this.type = type;
    this.pagamento = pagamento;
    this.sindicato = sindicato;
  }
}

var funcionarios = [];
var qtde = 0;
function viewFuncionarios()
{
    
    document.getElementById('divView').innerHTML = "";
    for(i=0;i<qtde;i++)
        {
            var x = "adp_" + i;
            var y = "ddp_" + i;
            if(funcionarios[i]!=null)
                { 
                    document.getElementById('divView').innerHTML += 
                 ('<ul>' + '<li id="idp_5" >' + 'NOME: '+funcionarios[i].nome+' </li>'+
                 '<li id="idp_6" value='+funcionarios[i].address+'>' + 'ENDEREÇO: '+funcionarios[i].address+' </li>' +
                 '<li id="idp_7" value='+funcionarios[i].salario+'>' + 'SALARIO: '+funcionarios[i].salario+' </li>' +
                 '<li id="idp_8" value='+funcionarios[i].type+'>' + 'TIPO: '+funcionarios[i].type+' </li>' + 
                  '<li id="idp_8" value='+i+'>' + 'ID: '+i+' </li>' + 
                   '<li id="idp_8" value='+funcionarios[i].pagamento+'>' + 'PAGAMENTO: '+funcionarios[i].pagamento+' </li>' + 
                   '<li id="idp_8" value='+funcionarios[i].sindicato+'>' + 'PERTENCE AO SINDICATO: '+funcionarios[i].sindicato+' </li>' + '</ul>');
                    
                }
        }
}



function remover()
{
    var form = document.getElementById("form_remover");
    var ID = form.ID_REMOVE.value;
    
    funcionarios[ID]=null;
    
    resetFormulario();
}

function panel_display(display){
    var button = [];
    //0 -> ADICIONAR
    //1 -> REMOVER
    //2 -> LISTAR FUNCIONARIOS
    //3 -> EDITAR_ID
    //4 -> EDITAR
    button[0] = document.getElementById("form_adicionar").classList;
    button[1] = document.getElementById("form_remover").classList;
    button[2] = document.getElementById("divView").classList;
    button[3] = document.getElementById("form_editar_id").classList;
    button[4] = document.getElementById("form_editar").classList;
   
    
    for(i=0;i<5;i++)
        {       
            button[i].add("hidden");
        }
    
    if(display == "ADICIONAR")
        button[0].remove("hidden");
    else if(display== "REMOVER")
        button[1].remove("hidden");
    else if(display == "LISTA")
        button[2].remove("hidden");
    else if (display == "EDITAR_ID")
        button[3].remove("hidden");
    else if (display == "EDITAR")
        button[4].remove("hidden");
    
}

var last_id;

function editar_id()
{
    var form = document.getElementById("form_editar_id");
    var ID = form.ID_EDITAR.value;
    
    if(funcionarios[ID] != null)
        last_id = ID;
    else
        {
            alert("Funcionário não existe!");
            return ;
        }
    
    panel_display("EDITAR");
        
}

function editar()
{
  var form = document.getElementById("form_editar");
  var nome = form.NOME_EDITAR.value;
  var address = form.ADDRESS_EDITAR.value;
  var salario = parseInt(form.SALARIO_EDITAR.value);
  var type = form.TIPO_EDITAR.value;
  var pagamento = form.PAGAMENTO_EDITAR.value;
  var sindicato = form.SINDICATO_EDITAR.value;
 
  
    
    
    if(nome != "")    
       funcionarios[last_id].nome=nome;
    
    if(address != "")
       funcionarios[last_id].address=address;
    
    if(salario != "")
       funcionarios[last_id].salario= salario;
    if(type != "Nao mudar")
        funcionarios[last_id].type=type;
    if(pagamento != "Nao mudar")
        funcionarios[last_id].pagamento=pagamento;
    if(sindicato != "Nao mudar")
        funcionarios[last_id].sindicato=sindicato;
    
    alert("Funcionário alterado para:" + 
      "\nNOME: " + funcionarios[last_id].nome + 
      "\nENDEREÇO: " + funcionarios[last_id].address+
      "\nSALÁRIO: " + funcionarios[last_id].salario +
      "\nTIPO: " + funcionarios[last_id].type +
         "\nPAGAMENTO: " + funcionarios[last_id].pagamento +
         "\nPERTENCE AO SINDICATO: " + funcionarios[last_id].sindicato);
    
    last_id = -1;
    panel_display("EIQWEJQW");
    resetFormulario();
    
}

function saveForm()
{
  var form = document.getElementById("form_adicionar");
  var nome = form.NOME_ADICIONAR.value;
  var address = form.ADDRESS_ADICIONAR.value;
  var salario = form.SALARIO_ADICIONAR.value;
  var type = form.TIPO_ADICIONAR.value;
  var pagamento = form.PAGAMENTO_ADICIONAR.value;
   var sindicato = form.SINDICATO_ADICIONAR.value;
    
    
  
    if(nome == "" || address == "" || salario == "" || type == ""){
      alert("Todos os dados devem ser preenchidos!");
      return;
  } 
    
  try{
      funcionarios[qtde] = new Object();
      funcionarios[qtde] = new Funcionario(nome,address,salario,type,pagamento,sindicato);
      
      if(funcionarios[qtde] instanceof Funcionario){
      alert("Funcionário adicionado com os dados:" + 
      "\nNOME: " + funcionarios[qtde].nome + 
      "\nENDEREÇO: " + funcionarios[qtde].address+
      "\nSALÁRIO: " + funcionarios[qtde].salario +
      "\nTIPO: " + funcionarios[qtde].type + "\nID: " + qtde +
        "\nPAGAMENTO: " + funcionarios[qtde].pagamento +
        "\nPERTENCE AO SINDICATO: " + funcionarios[qtde].sindicato);
          
    }
  }
 catch(e)
    {
            
  }
    
    qtde++;
    resetFormulario();
}
function resetFormulario(){
 
  document.getElementById("NOME_ADICIONAR").value = "";
  document.getElementById("ADDRESS_ADICIONAR").value = "";
  document.getElementById("SALARIO_ADICIONAR").value = "";
  document.getElementById("TIPO_ADICIONAR").value = "";
  document.getElementById("PAGAMENTO_ADICIONAR").value = "";
  document.getElementById("SINDICATO_ADICIONAR").value = "";
  document.getElementById("ID_REMOVE").value = "";
  document.getElementById("ID_EDITAR").value = "";
  document.getElementById("NOME_EDITAR").value = "";
  document.getElementById("ADDRESS_EDITAR").value = "";
  document.getElementById("SALARIO_EDITAR").value = "";
  document.getElementById("TIPO_EDITAR").value = "";    
}