function pintarDuplicatas() {
    var planilha = SpreadsheetApp.openById("1vhopAtbc_2CtZ4brOuycWSjcTprv7YUMpCEsUduNOR8");

    // Abas a serem verificadas
    var abas = ["Controle de material", "IMEI"];

    abas.forEach(function (nomeAba) {
        var aba = planilha.getSheetByName(nomeAba);

        // Verifica se a aba existe
        if (aba) {
            // Obtém os valores na coluna G
            var rangeColunaG = aba.getRange("G3:G" + aba.getLastRow());
            var valoresColunaG = rangeColunaG.getValues();

            // Limpa a formatação anterior na coluna G
            rangeColunaG.setBackground(null);

            // Percorre os valores e verifica se há duplicatas
            for (var i = 0; i < valoresColunaG.length; i++) {
                var valorCelulaG = valoresColunaG[i][0];
                if (valorCelulaG !== "" && valorCelulaG !== "-") {
                    for (var j = i + 1; j < valoresColunaG.length; j++) {
                        var duplicata = valoresColunaG[j][0];
                        if (duplicata !== "" && duplicata !== "-" && duplicata === valorCelulaG) {
                            // Pinta as células duplicadas com a cor #fd6161
                            rangeColunaG.getCell(i + 1, 1).setBackground("#fd6161");
                            rangeColunaG.getCell(j + 1, 1).setBackground("#fd6161");
                        }
                    }
                }
            }
        }
    });
}
