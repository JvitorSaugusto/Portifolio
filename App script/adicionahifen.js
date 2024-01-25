function preencherEspacosVaziosAutomatico() {
    var planilha = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var ultimaLinha = planilha.getLastRow();
    
    // Preencher espaços vazios nas colunas G, K e L com "-"
    preencherColunaComValor(planilha, ultimaLinha, 7, '-');
    preencherColunaComValor(planilha, ultimaLinha, 11, '-');
    preencherColunaComValor(planilha, ultimaLinha, 12, '-');
  }
  
  function preencherColunaComValor(planilha, ultimaLinha, numeroColuna, valor) {
    var coluna = planilha.getRange(1, numeroColuna, ultimaLinha, 1).getValues();
    
    for (var i = 0; i < ultimaLinha; i++) {
      if (coluna[i][0] === "") {
        coluna[i][0] = valor;
      }
    }
  
    planilha.getRange(1, numeroColuna, ultimaLinha, 1).setValues(coluna);
  }
  
  // Criar um trigger para executar a função automaticamente a cada hora
  function criarTrigger() {
    ScriptApp.newTrigger('preencherEspacosVaziosAutomatico')
        .timeBased()
        .everyHours(1)
        .create();
  }
  