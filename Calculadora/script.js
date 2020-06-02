var oper = ''
var gvisor = ''
var gvalor = ''
var goper = ''
var valor1 = ''
var valor2 = ''
function calcnum(num) {
    if (typeof gvisor == 'undefined') {
        document.getElementById('visor').value = '';
    }
    document.getElementById('visor').value = document.getElementById('visor').value + num;
    gvisor = 1;
}
function calcLimpar() {
    document.getElementById('visor').value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
}
function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (oper == "subtrair") {
            var valor = valor1 - valor2;
        } else {
            if (oper == "multiplicar") {
                var valor = valor1 * valor2;
            } else {
                var valor = valor1 / valor2;
            }
        }
    }
    return(valor);
}