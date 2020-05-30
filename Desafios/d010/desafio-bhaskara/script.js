function calcular() {
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c = Number(prompt('Qual é o valor de c?'))
    var res = document.getElementById('res')
    res.innerHTML = '<strong>Resolvendo Bhaskara</strong>'
    var res2 = document.getElementById('res2')
    res2.innerHTML = `A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong><br>`
    res2.innerHTML += `<br>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong><br>`
    var resul = b ** 2 - (4 * a * c)
    res2.innerHTML += `<br/>O valor calculado foi <b id = "delta">&Delta; = ${resul}</b>`
}