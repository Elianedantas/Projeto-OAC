function reajustar() {
    var nome = prompt('Qual é o nome do funcionário?')
    var salario = Number.parseFloat(prompt(`Qual é o salário de ${nome}?`))
    var sal = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var aumento = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var tot = salario * aumento / 100
    var total = salario + tot
    total = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    tot = tot.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var res = document.getElementById('res')
    res.innerHTML = `${nome} recebeu um aumento salarial!`
    var res2 = document.getElementById('res2')
    res2.innerHTML += `O salário atual era ${sal}.<br>`
    res2.innerHTML += `<br>Com um aumento de ${aumento}%, o salário vai aumentar ${tot} no próximo mês.<br>`
    res2.innerHTML += `<br>E a partir daí, ${nome} vai passar a ganhar ${total}.`
}