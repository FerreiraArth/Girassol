function carregar(){
    var img = document.getElementById ('div#imagem')
    var data = new Date()
    var hora = data.getHours()

    const imag = document.querySelector('.background')

    if (hora >= 5 && hora < 12){
        imag.classList.add('morning')
    } else if (hora >= 12 && hora < 18 ){
        imag.classList.add('afternoon')        
    } else  {
        imag.classList.add('night')   
    }
}