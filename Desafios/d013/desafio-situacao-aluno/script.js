function entrar() {
    var nome = prompt(`Qual é o nome do aluno?`)
    var nota1 = Number.parseFloat(prompt(`Primeira nota de ${nome}:`))
    var nota2 = Number.parseFloat(prompt(`Segunda nota de ${nome}:`))
    var soma = nota1 + nota2
    var media = soma / 2
    var res = document.getElementById('res')
    res.innerHTML = `<strong>Analisando a situação de ${nome}</strong>`
    var res2 = document.getElementById('res2')
    res2.innerHTML += `Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong><br/>`
    if (media < 3) {
        res2.innerHTML += `<br>Com média abaixo de 3,0, o alunoo está <b id = 'red'><strong>REPROVADO</strong></b>`
    } else if (media < 6) {
        res2.innerHTML += `<br>Com média entre 3,0 e 6,0, o aluno está em <b id = 'lara'><strong>RECUPERAÇÃO</strong></b>`
    } else {
        res2.innerHTML += `<br>Com média acima de 6,0, o aluno está <b id = 'green'><strong>APROVADO</strong></b>`
    }
}