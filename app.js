console.log('Welocome to spotify');
let audioElement = new Audio('songs/1.mp3');
let songIndex = 0;
// audioElement.play();

const songs = [
 {
  songName: 'Let Me Love You',
  songUrl: 'songs/1.mp3',
  coverUrl: 'covers/1.jpg'
 },
 {
  songName: 'Night Changes',
  songUrl: 'songs/2.mp3',
  coverUrl: 'covers/2.jpg'
 },
 {
  songName: 'Enemy',
  songUrl: 'songs/3.jpg',
  coverUrl: 'covers/3.jpg'
 },
 {
  songName: 'Perfect',
  songUrl: 'songs/4.mp3',
  coverUrl: 'covers/4.jpg'
 },
 {
  songName: 'Ignite',
  songUrl: 'songs/5.mp3',
  coverUrl: 'covers/5.jpg'
 },
 {
  songName: 'Alone Pt. 2',
  songUrl: 'songs/6.mp3',
  coverUrl: 'covers/6.jpg'
 },
 {
  songName: 'Sunflower',
  songUrl: 'songs/7.mp3',
  coverUrl: 'covers/7.jpg'
 },
 {
  songName: 'Peaches',
  songUrl: 'songs/8.mp3',
  coverUrl: 'covers/8.jpg'
 },
 {
  songName: 'Stay',
  songUrl: 'songs/9.mp3',
  coverUrl: 'covers/9.jpg'
 },
 {
  songName: 'Industry Baby',
  songUrl: 'songs/10.mp3',
  coverUrl: 'covers/10.jpg'
 }
];
//Taking Elements.....
const playBtn = document.getElementById('playBtn');

const myProgressBar = document.getElementById('myProgressBar');

const playingGIf = document.getElementById('playingGif');

const songItems = Array.from(document.getElementsByClassName('songItem'));

const masterSongName = document.getElementById('masterSongName');

let songIndexHandler = [];

let e;

const makeAllPlays = ()=>{
 Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
  element.classList.remove('fa-circle-pause');
  element.classList.add('fa-circle-play')
 })
}

// songItems.forEach((el, i) => {
//  // console.log(el, i);
//  const imageTag = el.firstElementChild;
//  imageTag[0] = songs[i].coverUrl;
//  // console.log(imageTag);
//  // const tagName = el.lastElementChild;
//  // tagName[0].innerText = songs[i].songName;
// })

// Play Button Handler.....
playBtn.addEventListener('click', () => {

 // Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
 //  element.className.remove('fa-circle-play');
 //  element.className.add('fa-circle-pause');
 // })

 if(audioElement<=0){
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  playBtn.classList.remove('fa-circle-play');
  playBtn.classList.add('fa-circle-pause');

  playingGIf.style.opacity = 1;
 }

 if(audioElement.paused){
  audioElement.play();
  masterSongName.innerText = songs[songIndex].songName;
  playBtn.classList.remove('fa-circle-play');
  playBtn.classList.add('fa-circle-pause');

  playingGIf.style.opacity = 1;
 }
 else{
  audioElement.pause();
  masterSongName.innerText = songs[songIndex].songName;
  playBtn.classList.remove('fa-circle-pause');
  playBtn.classList.add('fa-circle-play');

  playingGIf.style.opacity = 0;
 }
});


// Handling ProgressBar
audioElement.addEventListener('timeupdate', ()=>{
 let progress = ((audioElement.currentTime/audioElement.duration)*100);
 myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
 audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})







Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
 element.addEventListener('click', (e) => {

  songIndex = parseInt(e.target.id);
  songIndexHandler.push(songIndex);

  if(audioElement<=0){
   makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
    playingGIf.style.opacity = 1;
  }
   
  

  if((audioElement.paused)){
   if(songIndexHandler[songIndexHandler.length-1]===songIndexHandler[songIndexHandler.length-2]){
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.play();
    let progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    masterSongName.innerText = songs[songIndex].songName;
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
    playingGIf.style.opacity = 1;
   }
   else{
    makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    let progress = ((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    masterSongName.innerText = songs[songIndex].songName;
    playBtn.classList.remove('fa-circle-play');
    playBtn.classList.add('fa-circle-pause');
    playingGIf.style.opacity = 1;
   }
  } 
  else{
    if(songIndexHandler[songIndexHandler.length-1]===songIndexHandler[songIndexHandler.length-2]){
     makeAllPlays();
     e.target.classList.remove('fa-circle-pause');
     e.target.classList.add('fa-circle-play');
     audioElement.pause();
     let progress = ((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
     masterSongName.innerText = songs[songIndex].songName;
     playBtn.classList.remove('fa-circle-pause');
     playBtn.classList.add('fa-circle-play');
     playingGIf.style.opacity = 0;
    }
    else{
     makeAllPlays();
     e.target.classList.remove('fa-circle-play');
     e.target.classList.add('fa-circle-pause');
     audioElement.src = `songs/${songIndex + 1}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     let progress = ((audioElement.currentTime/audioElement.duration)*100);
     myProgressBar.value = progress;
     masterSongName.innerText = songs[songIndex].songName;
     playBtn.classList.remove('fa-circle-play');
     playBtn.classList.add('fa-circle-pause');
     playingGIf.style.opacity = 1;
    }

  }
   // makeAllPlays();
   // e.target.classList.remove('fa-circle-play');
   // e.target.classList.add('fa-circle-pause');
   // songIndex = parseInt(e.target.id);
   // masterSongName.innerText = songs[songIndex].songName;
   // audioElement.src = `songs/${songIndex + 1}.mp3`;
   // audioElement.currentTime = 0;
   // audioElement.play();
   // playBtn.classList.remove('fa-circle-play');
   // playBtn.classList.add('fa-circle-pause');
   // playingGIf.style.opacity = 1;
   
 })

 
})

document.getElementById('forward').addEventListener('click', ()=>{
 if(songIndex>=9){
  songIndex = 0;
 }
 else{
  songIndex += 1;
 }
 audioElement.src = `songs/${songIndex + 1}.mp3`;
 audioElement.currentTime = 0;
 playBtn.classList.remove('fa-circle-play');
 playBtn.classList.add('fa-circle-pause');
 audioElement.play();
 Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
  makeAllPlays();
  element.classList.remove('fa-circle-play');
  element.classList.add('fa-circle-pause');
 })
 masterSongName.innerText = songs[songIndex].songName;
 playingGIf.style.opacity = 1;
})
document.getElementById('backward').addEventListener('click', ()=>{
 if(songIndex<=0){
  songIndex = 9;
 }
 else{
  songIndex -= 1;
 }
 audioElement.src = `songs/${songIndex+1}.mp3`;
 audioElement.currentTime = 0;
 playBtn.classList.remove('fa-circle-play');
 playBtn.classList.add('fa-circle-pause');
 audioElement.play();
 Array.from(document.getElementsByClassName('songPlayItem')).forEach((element)=>{
  makeAllPlays();
  element.classList.remove('fa-circle-play');
  element.classList.add('fa-circle-pause');
 })
 masterSongName.innerText = songs[songIndex].songName;
 playingGIf.style.opacity = 1;
})