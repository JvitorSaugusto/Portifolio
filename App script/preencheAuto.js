// Essa verifica o valor inserido em uma coluna caso esse valor não seja notebook ele preenche as outras colunas com valores especificos

function onEdit(e) {
    // Verifica se a edição foi na coluna F (coluna 6)
    if (e && e.range && e.range.getColumn() == 6) {
        var valorSelecionado = e.value;
        var planilha = e.range.getSheet();

        // Se o valor não for um notebook, preenche as células nas colunas de N a S (colunas 14 a 19) com "não se aplica"
        if (valorSelecionado.toLowerCase() !== 'notebook') {
            for (var coluna = 14; coluna <= 19; coluna++) {
                planilha.getRange(e.range.getRow(), coluna).setValue('Não se aplica');
            }
        }
    }
}
