function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')

    } else {
        var fsex = document.getElementsByName('redsex')
        var idade = ano - fano.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
    } if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            //criança
           img.setAttribute('src', 'crianca-m.png')
        } else if ( idade < 21) {
            //jovem 
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 55) {
            //adulto
            img.setAttribute('src', 'adulto-m.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idoso-m.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'crianca-f.png')
        } else if ( idade < 21) {
            //jovem 
            img.setAttribute('src', 'jovem-f.png')
        } else if (idade < 55) {
            //adulto
            img.setAttribute('src', 'adulto-f.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idoso-f.png')
        }
    }


    //Saudades 
    res.innerHTML = `Detectamos: ${genero} com 
    ${idade} anos.`
    res.appendChild(img)
}
