function verificar() {
    var ano = Number(prompt(`Qual é o ano que você quer verificar?`))
    var res = document.getElementById('res')
    res.innerHTML = `<strong>Analisando o ano de ${ano}...</strong>`
    var res2 = document.getElementById('res2')
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0){
        var resul = `<b id = 'green'><strong>É BISSEXTO</strong></b> \u{2705}`
    } else {
        resul = `<b id = 'red'><strong>NÃO É BISSEXTO</strong></b> \u{274C}`
    }
    res2.innerHTML = `O ano de ${ano} ${resul}`
}