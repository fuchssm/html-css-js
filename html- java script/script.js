
function mudarConteudo(){
    document.getElementById('titulo').innerHTML = "Conteúdo alterado";
}

function voltarConteudo(){
    document.getElementById('titulo').innerHTML = "Texto inicial";
}

function mudarEstilo(){
    document.getElementById('paragrafo').style.color = "blue";
    document.getElementById('paragrafo').style.fontSize = "40px";
}
let contador = 3;
function adicionarItem(){
    let li = document.createElement('li');
    li.textContent = "Item" + contador;
    li.id ="item" + contador;
    document.getElementById('lista').appendChild(li);
    contador++;
}

function removerItem(){
   let item = document.getElementById('item1');
   document.getElementById("lista").removeChild(item);
}

function validarFormulario(){
    let nome = document.getElementById('nome').value;
    
    if(nome == ""){
        alert("O campo não pode estar vazio.");
    }else{
        alert("O nome digitao foi: " + nome);
    }
}

function trocarImagem(){
    let imagem = document.getElementById('imagem').src = 'https://blog.colombo.com.br/wp-content/uploads/2023/03/ROCK-CAPA-OK-810x540.jpg'
}