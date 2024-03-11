function moverRespostas() {
  var planilha = SpreadsheetApp.getActiveSpreadsheet();
  var guiaRespostas = planilha.getSheetByName("Solicitações de placas de premiação");
  var guiaDestinoVEGA = planilha.getSheetByName("VEGA"); // Nova aba de destino
  var guiaDestinoMONETIZZE = planilha.getSheetByName("MONETIZZE"); // Nova aba de destino
  
  // Obter a última linha preenchida nas guias de destino
  var lastRowVEGA = guiaDestinoVEGA.getLastRow() + 1; // Última linha + 1 para começar a partir da próxima linha vazia
  var lastRowMONETIZZE = guiaDestinoMONETIZZE.getLastRow() + 1; // Última linha + 1 para começar a partir da próxima linha vazia
  
  // Obter todas as respostas do formulário
  var range = guiaRespostas.getDataRange();
  var values = range.getValues();
  
  // Verificar se há novas respostas para VEGA
  if (values.length > lastRowVEGA) {
    var newValuesVEGA = values.slice(lastRowVEGA - 1); // Obter apenas as novas respostas
    guiaDestinoVEGA.getRange(lastRowVEGA, 1, newValuesVEGA.length, newValuesVEGA[0].length).setValues(newValuesVEGA); // Preencher as novas respostas
  }
  
  // Verificar se há novas respostas para MONETIZZE
  if (values.length > lastRowMONETIZZE) {
    var newValuesMONETIZZE = values.slice(lastRowMONETIZZE - 1); // Obter apenas as novas respostas
    guiaDestinoMONETIZZE.getRange(lastRowMONETIZZE, 1, newValuesMONETIZZE.length, newValuesMONETIZZE[0].length).setValues(newValuesMONETIZZE); // Preencher as novas respostas
  }
}
