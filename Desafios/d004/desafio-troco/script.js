function comprar() {
    var produto = prompt('Que produto você está comprando?')
    var preco = Number(prompt(`Quanto custa ${produto} que você está comprando?`))
    var valor = Number(prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
    var p = preco.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
    var v = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var troco = valor - preco
    var t = troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    alert(`Você comprou ${produto} que custou ${p}. \nDeu ${v} em dinheiro e vai receber ${t} de troco. \nVolte Sempre!`)
}