const music = new Audio("./assets/Stuck In the Sound - Let's Go.mp3");

// Chamando variáveis
const progressBar = document.querySelector("#progressBar");
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const buttonVoltar = document.querySelector('#voltar');
const buttonAvançar = document.querySelector('#avancar');
const tempoAtual = document.querySelector("#tempoAtual");
const tempoTotal = document.querySelector("#tempoTotal");

// Método de áudio
let interval;

// Funções
function formatarTempo(segundos) {
  const min = Math.floor(segundos / 60);
  const seg = Math.floor(segundos % 60);
  return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}

function updateMusicTime() {
  const progresso = (music.currentTime / music.duration) * 100;
  progressBar.value = progresso;
  tempoAtual.textContent = formatarTempo(music.currentTime);
}

music.addEventListener('loadedmetadata', function () {
  tempoTotal.textContent = formatarTempo(music.duration);
});

function play() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.play();
    interval = setInterval(updateMusicTime, 1000);
  }
  
  function pause() {
    buttonPlay.classList.toggle('hide');
    buttonPause.classList.toggle('hide');
    music.pause();
    clearInterval(interval);
  }

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);

// Adicionando redirecionamento para página de música ao clicar em "avançar"
buttonAvançar.addEventListener('click', () => {
  window.location.href = 'indexR.html';
});

// Adicionando redirecionamento para página de música ao clicar em "voltar"
buttonVoltar.addEventListener('click', () => {
  window.location.href = 'indexS.html';
});