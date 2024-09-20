function carregar() {
    var data = 3
    var dia = data.getDay()

    if (dia == 0) {
        subtitulo.innerHTML = `<h2>Amor</h2> <br>`
        texto.innerHTML = `<p>É o resumo do infinito. É o laço entre dois corações. É um sorriso frouxo demais. É quando a gente escuta o mundo inteiro no silêncio de alguém. É o ópio do coração. É um cafuné bem feito, é encontrar um lar em outro peito.

        <br>
        <br>
        
        às vezes tem quatro patas e um focinho. Às vezes tem nome, e quando vai embora....</p> `
    } else if (dia == 1) {
        subtitulo.innerHTML = `<h2>Inefável</h2> <br>`
        texto.innerHTML = `<p>É encontrar alguém disposto a se entregar no meio desse mundo de pessoas desinteressadas e com medo de se apaixonar. É aquela viagem de fim de ano com a pessoa certa que a gente esperou tanto para poder fazer. É como se chamam dias bons demais para serem descritos.
        
        <br>
        <br>

        é aquilo que narra por suspiros e sorrisos.</p>`
    } else if (dia == 2) {
        subtitulo.innerHTML = `<h2>Intensidade</h2> <br>`
        texto.innerHTML = `<p>É aquela coisinha que faz um minuto parecer uma vida. É aquela voz ao pé do ouvido que sussurra mandando a gente gritar. É uma forma de viver a vida. É o que faz a gente tirar o máximo das situações que a gente vive (mas fica o aviso: nem todo mundo está preparado).
        
        <br>
        <br>

        é o que me faz quebrar a cara ao me entregar demais pra quem quer coisa de menos.</p>`
    } else if (dia == 3) {
        subtitulo.innerHTML = `<h2>Girassol</h2> <br>`
        texto.innerHTML = `<p>Era a flor preferida dela, que não gostava de rosas. É o amarelo mais bonito do seu jardim. É pai de semente famosa. É o tom preferido de amarelo do Van Gogh. É o filho do sol com a natureza. É flor que sabe sorrir. É quem sabe achar o sol em dias nublados demais, é saber que dias bons não somem nem se perdem, só se escondem vez ou outra.

        <br>
        <br>
        
        eu, líri(c)o; ela, girassol.</p>`
    } else if (dia == 4) {
        subtitulo.innerHTML = `<h2>Eudaimonia</h2> <br>`
        texto.innerHTML = `<p>É como se chama a sensação de ser tomado por um sentimento bom sem explicação. É aquela vontade de viver que surge quando menos se espera e mais se precisa. É o universo nos dando um abraço de esperança. É sentir que somos o melhor de nós.
 
        <br>
        <br>
        
        é aquela sensação de ano-novo de que tudo pode ser melhor. e é.</p>`
    } else if (dia == 5) {
        subtitulo.innerHTML = `<h2>Ciúme</h2> <br>`
        texto.innerHTML = `<p>É uma mensagem não respondida. É a para- noia que me condena e desatina. É quando sua mão foge da minha sem razão aparente. É te ver preferir dar mais atenção até pra parede. é aquilo que se não cuidar, mata uma relação. É delação desnecessária. Às vezes é tempestade em copo d'água.

        <br>
        <br>
        
        É meu coração com medo de perder a única coisa pela qual ele quer bater</p>`
    } else {
        subtitulo.innerHTML = `<h2>Olhos Oceânicos</h2> <br>`
        texto.innerHTML = `<p>É um par de olhos tão profundos que carregam mais histórias do que um livro pode contar. É a cor própria de quem carrega no rosto mais do que janelas para alma, carrega duas embarcações inteiras e pesadas que zarpam em direção ao infinito. É a força bruta, bonita e afetuosa da ressaca do mar que puxa meus olhos diretamente para os seus;

        <br>
        <br>
        
        Eu não consigo desviar o meu olhar.</p>`
    }
}