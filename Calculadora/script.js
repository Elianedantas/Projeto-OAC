var resultado = 0
function preencher(num) {
    document.getElementById('visor').value += num
}
function limpar() {
    document.getElementById('visor').value = ''
}
function calcular() {
    resultado = document.getElementById('visor').value
    document.getElementById('visor').value = ''
    document.getElementById('visor').value = eval(resultado)
}
function raiz(simb) {
    document.getElementById('visor').value += simb
    resultado += Math.sqrt()
    document.getElementById('visor').value = eval(resultado)
}