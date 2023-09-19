function carregar(){
    var img = document.getElementById ('div#imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora >= 5 && hora < 12){
        img.background.url = '../images/principal-manha.jpg'
    } else if (hora >= 12 && hora < 18 ){
        document.body.style.background.url = '(../images/van.jpg)'
        
    } else  {
        img.src = '../images/principal-noite.jpg'
    }
}