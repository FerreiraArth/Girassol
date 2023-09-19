function carregar(){
    var img = document.getElementById ('div#imagem')
    var data = new Date()
    var hora = data.getHours()

    const imag = document.querySelector('.background')

    const bodyElement = document.body

    if (hora >= 5 && hora < 12){
        imag.classList.add('morning')
        bodyElement.classList.add('bodymorning');

    } else if (hora >= 12 && hora < 18 ){
        imag.classList.add('afternoon')  
        bodyElement.classList.add('bodyafternoon');      
    } else  {
        imag.classList.add('night')   
        bodyElement.classList.add('bodynight');
    }
}