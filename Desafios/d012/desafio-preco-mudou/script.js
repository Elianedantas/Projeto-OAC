function verificar() {
    var p_antes = Number(prompt(`Qual era o preço anterior do produto?`))
    var p_dps = Number(prompt(`Qual é o preço atual do produto?`))
    var res = document.getElementById('res')
    res.innerHTML = `<strong>Analisando os valores informados</strong>`
    var res2 = document.getElementById('res2')
    var antes = p_antes.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    var depois = p_dps.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    res2.innerHTML += `O produto custava ${antes} e agora custa ${depois}.</br>`
    if (p_antes > p_dps) {
        var mais = 'barato'
        var caiu_subiu = 'caiu'
        var cimaoubaixo = 'baixo'
        var dif = p_antes - p_dps
        var varia = (dif * 100) / p_dps
        var d = dif.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})

    } else {
        mais = 'caro'
        caiu_subiu = 'subiu'
        cimaoubaixo = 'cima'
        dif = p_dps - p_antes
        varia = (dif * 100) / p_antes
        d = dif.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    }
    res2.innerHTML += `<br>Hoje o produto está mais ${mais}.<br/>`
    res2.innerHTML += `<br>O preço ${caiu_subiu} ${d} em relação ao preço anterior.<br/>`
    varia = varia.toFixed(2).replace('.', ',')
    res2.innerHTML += `<br>Uma variação de ${varia}% pra ${cimaoubaixo}.`
}