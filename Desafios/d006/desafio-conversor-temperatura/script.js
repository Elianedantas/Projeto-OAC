function converter() {
    var cels = Number.parseFloat(prompt('Digite uma temperatura em °C [Celsius]'))
    var cel = cels.toFixed(1).replace('.', ',')
    var res = document.getElementById('res')
    res.innerHTML = `<strong>A temperatura de ${cel}°C, corresponde a...</strong>`
    var kelvin = cels + 273.15
    var k = kelvin.toFixed(2).replace('.',',')
    var res2 = document.getElementById('res2')
    res2.innerHTML += `<strong>${k}°K (Kelvin)</strong><br>`
    var fahr = cels * 1.8 + 32
    var f = fahr.toFixed(2).replace('.',',')
    res2.innerHTML += `<br><strong>${f}°F (Fahrenheit)</strong>`
}