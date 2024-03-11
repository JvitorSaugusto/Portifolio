function moverRespostas() {
    var planilha = SpreadsheetApp.getActiveSpreadsheet();
    var guiaRespostas = planilha.getSheetByName("Solicitações de placas de premiação");
    var guiaDestinoVEGA = planilha.getSheetByName("VEGA"); // Nova aba de destino
    var guiaDestinoMONETIZZE = planilha.getSheetByName("MONETIZZE"); // Nova aba de destino
    var range = guiaRespostas.getDataRange();
    var values = range.getValues();
  
    guiaDestinoVEGA.clear(); // Limpa os dados na guia de destino
    guiaDestinoVEGA.getRange(1, 1, values.length, values[0].length).setValues(values); // Copia os dados para a guia de destino
  
    guiaDestinoMONETIZZE.clear(); // Limpa os dados na guia de destino
    guiaDestinoMONETIZZE.getRange(1, 1, values.length, values[0].length).setValues(values); // Copia os dados para a guia de destino
  }
  