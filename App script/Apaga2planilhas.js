//Este código verifica na planilha 1 se os itens de 2 colunas especificas são iguais ao da planilha 2, caso sim, eles serão apagados da planilha 2, ele tbm percorre as pastas do google procurando as planilha pelo ID


function excluirLinhasDuplicadas() {
    // IDs das planilhas
    var idPlanilhaControle = "1vhopAtbc_2CtZ4brOuycWSjcTprv7YUMpCEsUduNOR8";
    var idPlanilhaEstoque = "16aUnX5JGL5iXxgvqVeCS9cWgdlHfHT_N754NucAzm2o";

    // Nomes das abas
    var nomeAbaControle = "Controle de material";
    var nomeAbaEstoque = "Equipamentos Pay";

    // Abrir as planilhas diretamente pelos IDs
    var planilhaControle = SpreadsheetApp.openById(idPlanilhaControle);
    var planilhaEstoque = SpreadsheetApp.openById(idPlanilhaEstoque);

    // Verificar se as planilhas foram abertas corretamente
    if (!planilhaControle || !planilhaEstoque) {
        Logger.log("Erro ao abrir as planilhas. Verifique os IDs das planilhas.");
        return;
    }

    // Obter as abas específicas nas planilhas
    var abaControle = planilhaControle.getSheetByName(nomeAbaControle);
    var abaEstoque = planilhaEstoque.getSheetByName(nomeAbaEstoque);

    // Verificar se as abas foram encontradas
    if (!abaControle || !abaEstoque) {
        Logger.log("Erro ao encontrar as abas nas planilhas. Verifique se as abas existem.");
        return;
    }

    Logger.log("Planilhas e abas encontradas com sucesso.");

    // Obter os dados das colunas F e G da planilha de Controle
    var dadosControle = abaControle.getRange("F:G").getValues();

    // Obter os dados das colunas A e B da planilha de Estoque
    var dadosEstoque = abaEstoque.getRange("A:B").getValues();

    // Coletar índices das linhas que precisam ser excluídas
    var indicesParaExcluir = [];

    // Iterar sobre os dados da planilha de Controle
    for (var i = dadosControle.length - 1; i >= 0; i--) {
        // Verificar se os dados da coluna F e G existem na planilha de Estoque
        var indiceEstoque = dadosEstoque.findIndex(function (row) {
            return row[0] === dadosControle[i][0] && row[1] === dadosControle[i][1];
        });

        // Se existirem, adicionar o índice à lista para exclusão posterior
        if (indiceEstoque !== -1) {
            indicesParaExcluir.push(indiceEstoque + 1); // Adicionar 1 porque os índices começam em 1 no Google Sheets
        }
    }

    // Excluir as linhas na planilha de Estoque usando o método clear
    for (var j = 0; j < indicesParaExcluir.length; j++) {
        abaEstoque.getRange(indicesParaExcluir[j], 1, 1, abaEstoque.getLastColumn()).clear();
    }

    Logger.log("Operações concluídas com sucesso.");
}
