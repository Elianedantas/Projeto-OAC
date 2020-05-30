function descontar() {
    var produto = prompt('Qual é o produto que você está comprando?')
    var preco = Number.parseFloat(prompt(`Qual é o preço de ${produto}?`))
    var res = document.getElementById('res')
    res.innerHTML = `<strong>Calculando desconto de 10% para ${produto}</strong>`
    var res2 = document.getElementById('res2')
    var p = preco.toFixed(2).replace('.', ',')
    var desconto = (10 * preco) / 100
    var tot = (90 * preco) / 100
    var d = desconto.toFixed(2).replace('.',',')
    var total = tot.toFixed(2).replace('.',',')
    res2.innerHTML += `O preço original era R$ ${p}.<br>`
    res2.innerHTML += `<br>Você acaba de ganhar R$ ${d} de desconto (-10%).<br>`
    res2.innerHTML += `<br>No fim, você vai pagar R$ ${total} no produto ${produto}.`
}