function carregar() {
    var data = new Date()
    var dia = data.getDay()

    if (dia == 0) {
        subtitulo.innerHTML = `<h2>Amor</h2> <br>`
        texto.innerHTML = `<p>é o resumo do infinito. é o laço entre dois corações. é um sorriso frouxo demais. é quando a gente escuta o mundo inteiro no silêncio de alguém. é o ópio do coração. é um cafuné bem feito, é encontrar um lar em outro peito.

        <br>
        <br>
        
        às vezes tem quatro patas e um focinho. às vezes tem nome, e quando vai embora....</p> `
    } else if (dia == 1) {
        subtitulo.innerHTML = `<h2>Inefável</h2> <br>`
        texto.innerHTML = `<p>é encontrar alguém disposto a se entregar no meio desse mundo de pessoas desinteressadas e com medo de se apaixonar. é aquela viagem de fim de ano com a pessoa certa que a gente esperou tanto para poder fazer. é como se chamam dias bons demais para serem descritos.
        
        <br>
        <br>

        é aquilo que narra por suspiros e sorrisos.</p>`
    } else if (dia == 2) {
        subtitulo.innerHTML = `<h2>Intensidade</h2> <br>`
        texto.innerHTML = `<p>é aquela coisinha que faz um minuto parecer uma vida. é aquela voz ao pé do ouvido que sussurra mandando a gente gritar. é uma forma de viver a vida. é o que faz a gente tirar o máximo das situações que a gente vive (mas fica o aviso: nem todo mundo está preparado).
        
        <br>
        <br>

        é o que me faz quebrar a cara ao me entregar demais pra quem quer coisa de menos.</p>`
    } else if (dia == 3) {
        subtitulo.innerHTML = `<h2>Girassol</h2> <br>`
        texto.innerHTML = `<p>era a flor preferida dela, que não gostava de rosas. é o amarelo mais bonito do seu jardim. é pai de semente famosa. é o tom preferido de amarelo do Van Gogh. é o filho do sol com a natureza. é flor que sabe sorrir. é quem sabe achar o sol em dias nublados demais, é saber que dias bons não somem nem se perdem, só se escondem vez ou outra.

        <br>
        <br>
        
        eu, líri(c)o; ela, girassol.</p>`
    } else if (dia == 4) {
        subtitulo.innerHTML = `<h2>Eudaimonia</h2> <br>`
        texto.innerHTML = `<p>é como se chama a sensação de ser tomado por um sentimento bom sem explicação. é aquela vontade de viver que surge quando menos se espera e mais se precisa. é o universo nos dando um abraço de esperança. é sentir que somos o melhor de nós.
 
        <br>
        <br>
        
        é aquela sensação de ano-novo de que tudo pode ser melhor. e é.</p>`
    } else if (dia == 5) {
        subtitulo.innerHTML = `<h2>Ciúme</h2> <br>`
        texto.innerHTML = `<p>é uma mensagem não respondida. é a para- noia que me condena e desatina. é quando sua mão foge da minha sem razão aparente. é te ver preferir dar mais atenção até pra parede. é aquilo que se não cuidar, mata uma relação. é delação desnecessária. às vezes é tempestade em copo d'água.

        <br>
        <br>
        
        é meu coração com medo de perder a única coisa pela qual ele quer bater</p>`
    } else {
        subtitulo.innerHTML = `<h2>Olhos Oceânicos</h2> <br>`
        texto.innerHTML = `<p>é um par de olhos tão profundos que carregam mais histórias do que um livro pode contar. é a cor própria de quem carrega no rosto mais do que janelas para alma, carrega duas embarcações inteiras e pesadas que zarpam em direção ao infinito. é a força bruta, bonita e afetuosa da ressaca do mar que puxa meus olhos diretamente para os seus;

        <br>
        <br>
        
        eu não consigo desviar o meu olhar.</p>`
    }
}