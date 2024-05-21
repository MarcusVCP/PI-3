//-----------------------------------------------------------------------------------------------------------
// Função: validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto)
// Verifica se foram informados o nome e o código do produto
// Parâmetros:
// - idNomeProduto: id do campo que contém o nome do produto
// - idCodProduto: id do campo que contém o código do produto
// - idQtidadeProduto: id do campo que contém a quantidade do produto
// OBS: Se faltar alguma informação (nome ou código do produto) aparecerá uma mensagem de erro. Em caso de 
// sucesso (todas as informações preenchidas), chama a função cadastrarProduto(...)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;
    location.reload();

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, codigo, parseInt(qtidade));
}
//-----------------------------------------------------------------------------------------------------------
// Função: cadastrarProduto(produto, codig, qtidade)
// Cadastra um novo produto (nome, código e quantidade) no estoque
// Parâmetros:
// - produto: nome do produto a ser cadastrado no estoque (Ex: arroz)
// - codig: código do produto a ser cadastrado no estoque (Ex: a01)
// - qtidade: quantidade do produto a ser cadastrado no estoque (Ex: 7)
// OBS: Apos cadastrar o novo produto no estoque, atualiza a quantidade de itens no carrinho, ou seja, chama 
// a função atualizarTotalEstoque()
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function cadastrarProduto(produto, codig, qtidade) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" pizza(s) de "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
// Função: atualizarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrado no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}
//-----------------------------------------------------------------------------------------------------------
// Função: carregarTotalEstoque(idCampo)
// Incrementa a quantidade de itens cadastrado no estoque (carrinho localizado no canto superior da tela)
// Parâmetros:
// - idCampo: identificador do campo que contem a quantidade de itens no estoque
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

//-----------------------------------------------------------------------------------------------------------
// Exibe todos os itens do estoque (nome, código e quantidade)
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");

        document.write("<style>");
        document.write("h1 { font-family: 'Arial'}");
        document.write("</style>");

        document.write("<h1>Controle de Venda:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não foi vendida nenhuma Pizza</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                // ESTILIZANDO
                document.write("<style>");
                document.write("ul { list-style-type: none; padding: 0; margin-bottom: 15px ; width: 30%;}");
                document.write("li { margin-bottom: 5px; border: 1px solid #ddd; padding: 5px; font-family: 'Arial';}");
                document.write("button { background-color: #ff4d4d; color: #fff; padding: 10px 15px; border: none;}");
                document.write("</style>");

                document.write("<ul>");
                document.write("<li >Nome da pizza: "+produto.nome+"</li>");
                document.write("<li >Quantidade vendida: "+produto.quantidade+"</li>");
                document.write("<li >Preço Total: "+produto.codigo*produto.quantidade+"</li>");
                var codigoProduto = produto.nome;
                document.write("<button onclick='excluirProdutoPorNome(\"" + codigoProduto + "\")'>DELETAR</button>");

                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}

// --------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------
// Função: excluirProdutoPorNome(nomeProduto)
// Exclui um produto do estoque com base no nome do produto
// Parâmetros:
// - nomeProduto: nome do produto a ser excluído do estoque
// OBS: A função atualiza o armazenamento local e recarrega a página após a exclusão
// Retorno: nenhum
//-----------------------------------------------------------------------------------------------------------
function excluirProdutoPorNome(nomeProduto) {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos != null) {
            produtos = JSON.parse(produtos);

            // Encontrar o índice do produto com o nome fornecido
            let index = -1;
            for (let i = 0; i < produtos.length; i++) {
                if (produtos[i].nome === nomeProduto) {
                    index = i;
                    break;
                }
            }

            // Remover o produto se encontrado
            if (index !== -1) {
                produtos.splice(index, 1);
                localStorage.setItem("produtos", JSON.stringify(produtos));
                alert("Pizza(s) de " + nomeProduto + " excluído com sucesso!");
                location.reload()

                // Atualizar a quantidade total
                atualizarTotalEstoque("totalEstoque");

                // Atualizar a visualização sem recarregar a página
                console.log("Antes de listarEstoque");
                listarEstoque();
                console.log("Depois de listarEstoque");
            } else {
                alert("Produto '" + nomeProduto + "' não encontrado no estoque.");
            }
        } else {
            alert("Nenhum produto cadastrado ainda.");
        }
    } else {
        alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
    }
}