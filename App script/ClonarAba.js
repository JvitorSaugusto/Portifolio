function onEdit(e) {
    // Inicia a função onEdit
    console.log('Iniciando função onEdit');
  
    // Obtém a planilha e a célula que foram editadas
    var sheet = e.source.getActiveSheet();
    var cell = e.range;
  
    // Obtém o nome da aba de destino
    var targetSheetName = 'Cópia de Solicitações de placas de premiação'; // Insira o nome da aba de destino
  
    // Verifica se a edição foi na planilha de origem
    if (sheet.getName() !== 'Solicitações de placas de premiação') {
      console.log('Edição não foi na planilha de origem');
      return;
    }
  
    // Obtém o valor da célula editada
    var value = cell.getValue();
    console.log('Valor da célula editada:', value);
  
    // Obtém a aba de destino
    var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);
  
    // Localiza a célula equivalente na aba de destino
    var targetCell = targetSheet.getRange(cell.getRow(), cell.getColumn());
  
    // Define o valor da célula na aba de destino
    targetCell.setValue(value);
    console.log('Valor copiado para a aba de destino');
  }
  function onEdit(e) {
    // Inicia a função onEdit
    console.log('Iniciando função onEdit');
  
    // Obtém a planilha e a célula que foram editadas
    var sheet = e.source.getActiveSheet();
    var cell = e.range;
  
    // Obtém o nome da aba de destino
    var targetSheetName = 'Cópia de Solicitações de placas de premiação'; // Insira o nome da aba de destino
  
    // Verifica se a edição foi na planilha de origem
    if (sheet.getName() !== 'Solicitações de placas de premiação') {
      console.log('Edição não foi na planilha de origem');
      return;
    }
  
    // Obtém o valor da célula editada
    var value = cell.getValue();
    console.log('Valor da célula editada:', value);
  
    // Obtém a aba de destino
    var targetSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(targetSheetName);
  
    // Localiza a célula equivalente na aba de destino
    var targetCell = targetSheet.getRange(cell.getRow(), cell.getColumn());
  
    // Define o valor da célula na aba de destino
    targetCell.setValue(value);
    console.log('Valor copiado para a aba de destino');
  }
  