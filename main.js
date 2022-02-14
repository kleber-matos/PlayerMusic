let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.fim');

duracaoMusica.textContent =segundosMinuto(Math.floor(musica.duration)); 

//Eventos
document.querySelector('.botao-play').addEventListener('click' , tocaMusica);

document.querySelector('.botao-pause').addEventListener('click' , pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

//Funções
function tocaMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor ((musica.currentTime / musica.duration) * 100 )+ '%';
    let tempoMusica = document.querySelector('.inicio');
    tempoMusica.textContent = segundosMinuto(Math.floor(musica.currentTime));
}

function segundosMinuto (segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinuto + ':' + campoSegundos
}