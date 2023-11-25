function logar(){
    var login = document.getElementById('ilogin').value;
    var senha = document.getElementById('isenha').value;

    if(login == "Girassol" && senha == "Azul"){
        location.href = "home.html"
    } else {
        alert('Usuário ou senha inexatos')
    }
}