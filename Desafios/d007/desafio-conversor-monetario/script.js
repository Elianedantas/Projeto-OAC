var dolar = Number.parseFloat(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
function converter() {
    var valor = Number.parseFloat(prompt('Quanto R$ você tem na carteira?'))
    var total = valor / dolar
    var t = total.toFixed(2).replace('.',',')
    var v = valor.toFixed(2).replace('.',',')
    var d = dolar.toFixed(2).replace('.',',')
    var res = document.getElementById('res')
    res.innerHTML = `Você vai conseguir comprar US$${t} com os R$${v} que tem na carteira, considerando a cotação informada ${d}.`
}