window.onload = function() {
    tratar_eventos();
    tocar_audio('abertura');
    ativar_background();
}

function ativar_background()
{
    const radio_inputs = document.getElementsByTagName("input");

    for(let i=0; i < radio_inputs.length; i++ )
    {
        if(radio_inputs[i].getAttribute("type") == "radio")
        {
            radio_inputs[i].onchange = function()
            {
                this.parentElement.style.background = 'red'
            }

            //console.log(radio_inputs[i]);
        }
        
    }
}

function tratar_eventos() {
    /**
     * Jogador clicou no botão começar/reiniciar jogo.
     */

    document.getElementById("btn-comecar").onclick = function() {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
    }





    /**
     * Analisar resposta da pergunta de R$1000
     */

    document.getElementById("form-pergunta1000").onsubmit = function() {
        var opcao_correta = "3";
        var opcao_selecionada = this.pergunta1000.value;

        if(opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta2000');
            document.getElementById("pergunta1000").style.display = "none";
            document.getElementById("pergunta2000").style.display = "block";
        } else {
            document.getElementById("pergunta1000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        return false;
    }

    /**
     *  Analisar resposta da pergunta de R$2000
     */

    document.getElementById("form-pergunta2000").onsubmit = function() {
        var opcao_correta = "4";
        var opcao_selecionada = this.pergunta2000.value;

        if(opcao_selecionada == opcao_correta){
            tocar_audio('pergunta-3000');
        } else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou');
            reinicia_jogo();
        }
        
        return false;
    }
}

/** 
 * Função caso o jogador perca.
 */

function reinicia_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}

/**
 * Função para executar a voz do silvio santos, em cada uma das ocasiões.
 */

function tocar_audio(qual_tocar) {
    
    var audio = document.getElementById("silvio-santos");

    switch(qual_tocar){
        case 'abertura':
            audio.src = "audio/abertura-show-do-milhao.mp3";
        break;

        case 'comecar':
            audio.src="audio/1000.wav";
        break;

        case 'acertou':
            audio.src="audio/parabens.wav";
        break;

        case 'ganhou':
            audio.src="audio/ganhou.wav"

        case 'errou':
            audio.src="audio/errou.wav";
        break;

        case 'pergunta-2000':
            audio.src="audio/2000.wav;"
        break;

        case 'pergunta-3000':
            audio.src="audio/3000.wav";
        break;
    }
    
    audio.play();
}