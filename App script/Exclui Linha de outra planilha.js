
//O objetivo geral é excluir linhas na aba "Equipamentos Pay" que possuem dados duplicados nas colunas A e B em relação à aba "Controle de material".Não afetando os itens que ja estavam presentes na planilha na criação do codigo. A função pode ser acionada manualmente ou automaticamente através de triggers (acionadores) configurados no Google Apps Script.

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
  var itensProcessados = []; // Armazenar os itens já processados da planilha de Controle

  // Iterar sobre os dados da planilha de Estoque
  for (var i = dadosEstoque.length - 1; i >= 0; i--) {
    // Verificar se os dados da coluna A e B existem na planilha de Controle
    var indiceControle = dadosControle.findIndex(function (row) {
      return row[0] === dadosEstoque[i][0] && row[1] === dadosEstoque[i][1];
    });

    // Se existirem, adicionar o índice à lista para exclusão posterior
    if (indiceControle !== -1 && !itensProcessados.includes(indiceControle)) {
      indicesParaExcluir.push(i + 1); // Adicionar 1 porque os índices começam em 1 no Google Sheets
      itensProcessados.push(indiceControle); // Adicionar o índice à lista de itens processados
    }
  }

  // Excluir as linhas específicas na planilha de Estoque
  for (var j = 0; j < indicesParaExcluir.length; j++) {
    abaEstoque.deleteRow(indicesParaExcluir[j]);
  }

  Logger.log("Operações concluídas com sucesso.");
}
