'use strict'

//------------------Declaring variables----------------------------

const volume = document.querySelector('.volume');
const volumeLine = document.querySelector('.volume-line');
const title = document.querySelector('.title');
const preBtn = document.querySelector('.pre');
const playPauseBtn = document.querySelector('.play-pause');
const pauseBtn = document.querySelector('.pause');
const nextBtn = document.querySelector('.next');
const audio = document.querySelector('audio');
const durationLine = document.querySelector('.duration-line');

//----------------------Tracklist---------------------------------

const musicList = [
    {
        path: './assets/music/Imagine_Dragons_-_Enemy.mp3',
        musicName: 'Imagine Dragons - Enemy',
        bg: './assets/img/bg/bgE.jpg',
        poster: './assets/img/enemy.jpg'
    },
    {
        path: './assets/music/Guano_Apes_-_Big_In_Japan.mp3',
        musicName: 'Guano Apes - Big In Japan',
        bg: './assets/img/bg/bgGA.jpg',
        poster: './assets/img/guano_apes.jpg'
    },
    {
        path: './assets/music/Nirvana_-_Where_Did_You_Sleep_Last_Night.mp3',
        musicName: 'Nirvana - Where Did You Sleep Last Night',
        bg: './assets/img/bg/bgN.jpg',
        poster: './assets/img/nirvana.jpg'
    },
    {
        path: './assets/music/Poets_Of_The_Fall_-_Sleep.mp3',
        musicName: 'Poets Of The Fall - Sleep',
        bg: './assets/img/bg/bgS.jpg',
        poster: './assets/img/sleep.jpg'
    }

];

//--------------------Play/Pause function---------------------------

let musicPlaying = false;

function playMusic() {
    musicPlaying = true;
    audio.play();
    playPauseBtn.classList.add('active');
    playPauseBtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    
}

function pauseMusic() {
    musicPlaying = false;
    audio.pause();
    playPauseBtn.classList.remove('active');
    playPauseBtn.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

playPauseBtn.addEventListener('click', () => (musicPlaying ? pauseMusic() : playMusic()));


//------------------------Curently Track--------------------------

function loadMusic(musicList) {
    title.textContent = musicList.musicName;
    audio.src = musicList.path;
}

let i = 0;
loadMusic(musicList[i])


//------------------------Change background--------------------------------------

let bgImg = document.querySelector('.bg')

function changeBg(musicList) {
    bgImg.src = musicList.bg;
}

//------------------------Change poster------------------------------------------

let posterImg = document.querySelector('.enemy');

function changePicture(musicList) {
    posterImg.src = musicList.poster;
}


//-----------------------Turn on another track and background--------------------

function getBack() {
    i--;
    if (i < 0) {
        i = musicList.length - 1;
    }
    loadMusic(musicList[i]);
    playMusic();
    changeBg(musicList[i]);
    changePicture(musicList[i]);
}
preBtn.addEventListener('click', getBack);

function getNext() {
    i++;
    if (i > musicList.length - 1) {
        i = 0;
    }
    loadMusic(musicList[i]);
    playMusic();
    changeBg(musicList[i]);
    changePicture(musicList[i]);
}
nextBtn.addEventListener('click', getNext);



//--------------------------Volume setting-------------------------


function toggleVolume() {
    volumeLine.classList.toggle('open')
}

volume.addEventListener('click', toggleVolume)

function volumeChange() {
    audio.volume = volumeLine.value / 100;
}

volumeLine.addEventListener('input', function() {
    volumeLine.style.background = `linear-gradient(to right, black 0%, black ${volumeLine.value}%, white ${volumeLine.value}%, white 100%)`;

})


audio.addEventListener('timeupdate', function() {
    let position = audio.currentTime / audio.duration;
    durationLine.style.width = position * 100 + '%';
})


