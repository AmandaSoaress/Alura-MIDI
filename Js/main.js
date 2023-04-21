const ListaDeAudio = document.querySelectorAll("audio");

//som tecla dinâmica..............................................

const ListaDeTeclas = document.querySelectorAll('.tecla');
for (let index = 0; index < ListaDeTeclas.length; index++) {
    const botao = ListaDeTeclas[index];
    botao.addEventListener('click', function (evento) {
        const som = ListaDeAudio[index];
        som.play();
        //console.log(som)

    });
    botao.onkeydown = function (evento) {

        console.log(evento.code == 'NumpadEnter')

        if (evento.code === 'Space'|| evento.code === 'NumpadEnter') {
            botao.classList.add('ativa');
        }

    }
    botao.onkeyup = function ()  {
            botao.classList.remove('ativa');
        }
}