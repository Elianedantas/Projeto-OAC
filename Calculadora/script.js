var resultado = 0
var numero = ''
var termo = [undefined, undefined, undefined]
function preencher(num) {
    document.getElementById('visor').value += num
    numero += num
}
function limpar() {
    document.getElementById('visor').value = ''
    numero = ''
}
function operador(op) {
    termo[0] = numero
    termo[1] = op
    document.getElementById('visor').value += op
    numero = ''
}
function calcular() {
    termo[2] = numero
    switch (termo[1]) {
        case '+':
            resultado = Number(termo[0]) + Number(termo[2])
            break
        case '-':
            resultado = Number(termo[0]) - Number(termo[2])
            break
        case '*':
            resultado = Number(termo[0]) * Number(termo[2])
            break
        case '/':
            resultado = Number(termo[0]) / Number(termo[2])
            break
        case '**':
            resultado = Number(termo[0]) ** Number(termo[2])
            break
        case '%':
            resultado = Number(termo[0]) / 100
            break
        case 'raiz':
            alert(resultado)
            resultado = Number(termo[0]) ** 0.5
            break
    }
    document.getElementById('visor').value = resultado
}
