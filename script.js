let num = "5";
console.log(num.padStart(2, "0"));  // Saída: "05"

let minutos = "4";
let segundos = "9";
console.log(`${minutos.padStart(2, "0")}:${segundos.padStart(2, "0")}`);  // Saída: "04:09"

Math.floor(3.95);

// elementos
const escolhaTema = document.querySelectorAll('header button');
const temaButton1 = escolhaTema[0];
const temaButton2 = escolhaTema[1];
const player = document.querySelector('#temas');
const buttonPlay = document.querySelector('#play');
const buttonPause = document.querySelector('#pause');
const progressBar = document.getElementById('progressBar');
const tempoAtual = document.getElementById("tempoAtual");
const tempoTotal = document.getElementById("tempoTotal");
const descMusicaTitle = document.querySelector('.desc-musica p');
const descMusicaArtista = document.querySelector('.desc-musica span');
const descMusicaImg = document.querySelector('.conteudo-musica img');

const musicData = [
    {
      "title": "Action(Teku)",
      "artist": "SoundTrack",
      "imageUrl": "assets/action teku.png.jpg",
      "audioUrl": "assets/Action (Teku).mp3"
    },
    {
      "title": "Campeões (pokemon)",
      "artist": "Chrono",
      "imageUrl": "assets/campinho da vitoria - Chorno.png",
      "audioUrl": "assets/Campeões (Pokémon) - CAMINHO DA VITÓRIA _ Chrono.mp3"
    },
    {
      "title": "Let's Go",
      "artist": "Stuck In the Sound",
      "imageUrl": "assets/Stuck In the Sound - Let's Go.png",
      "audioUrl": "assets/Stuck In the Sound - Let's Go.mp3"
    }
  ];
  const music = new Audio();
let currentTrack = 0;
let interval;
//funções
function loadTrack(trackIndex) {
  const track = musicData[trackIndex];
  descMusicaTitle.textContent = track.title;
  descMusicaArtista.textContent = track.artist;
  descMusicaImg.src = track.imageUrl;
  music.src = track.audioUrl;
  music.load();
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % musicData.length;
  loadTrack(currentTrack);
  play();
}
function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
  }
  

function updateMusicTime() {
    const tempoAtual = document.getElementById('tempoAtual');
    const progressBar = document.getElementById('progressBar');
    const progresso = (music.currentTime / music.duration) * 100;
    progressBar.value = progresso;
    tempoAtual.textContent = formatarTempo(music.currentTime);
    tempoTotal.textContent = formatarTempo(music.duration);
  }

music.addEventListener('loadedmetadata', function () {
    const tempoTotal = document.getElementById('tempoTotal');
    tempoTotal.textContent = formatarTempo(music.duration);
});



function play() {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  music.play();
  interval = setInterval(updateMusicTime, 1000); 
}

function pause() {
  buttonPlay.classList.remove('hide');
  buttonPause.classList.add('hide');
  music.pause();
  clearInterval(interval); 
}

buttonPlay.addEventListener('click', play);
buttonPause.addEventListener('click', pause);


progressBar.addEventListener('input', function () {
  const valor = progressBar.value;
  music.currentTime = (valor / 100) * music.duration;
});

