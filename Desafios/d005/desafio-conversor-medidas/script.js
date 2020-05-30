function converter() {
    var metro = Number(prompt('Digite uma distância em metros (m)'))
    var res = document.getElementById('res')
    var m = metro.toFixed(2).replace('.', ',')
    res.innerHTML = `<strong>A distância de ${m} metros, corresponde a...</strong>`
    var res2 = document.getElementById('res2')
    var km = metro / 1000
    res2.innerHTML = `${km} quilômetros (Km)`
    var hm = metro / 100
    res2.innerHTML += `<br>${hm} hectômetros (Hm)`
    var dam = metro / 10
    res2.innerHTML += `<br>${dam} decâmetros (Dam)`
    var dm = metro * 10
    res2.innerHTML += `<br>${dm} decímetros (dm)`
    var cm = metro * 100
    res2.innerHTML += `<br>${cm} centímetros (cm)`
    var mm = metro * 1000
    res2.innerHTML += `<br>${mm} milímetros (mm)`
}