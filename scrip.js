console.log("hello");
let Audioelement=new Audio("songs/1.mp3");
// Audioelement.play();
let songindex=0;

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "DEAF KEV - Invincible-320k", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Different Heaven & EH!DE ", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "cover/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "cover/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "cover/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "cover/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "cover/10.jpg"},
];

let playbutton=document.getElementById('playbutton');
let progressbar=document.getElementById('progressbar');
let masterSongName=document.getElementById('mastersongname');
let gifimage=document.getElementById('gif');
let songitems=Array.from(document.getElementsByClassName('songitem'));


songitems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songName;

});

//function

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}



Array.from(document.getElementsByClassName('songplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songindex = parseInt(e.target.id)
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        
        Audioelement.src=`songs/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songName;
        Audioelement.currentTime=0;
        Audioelement.play()
        gif.style.opacity = 1;
        playbutton.classList.remove("fa-circle-play");
        playbutton.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=9){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    Audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    Audioelement.currentTime = 0;
    Audioelement.play();
    playbutton.classList.remove('fa-play-circle');
    playbutton.classList.add('fa-pause-circle');

})

document.getElementById('privious').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
   Audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songName;
    Audioelement.currentTime = 0;
   Audioelement.play();
    playbutton.classList.remove('fa-play-circle');
    playbutton.classList.add('fa-pause-circle');
})




// handle play button
playbutton.addEventListener('click',()=>{
    if(Audioelement.paused || Audioelement.currentTime<=0){
        Audioelement.play();
        playbutton.classList.remove("fa-circle-play");
        playbutton.classList.add("fa-circle-pause");
        gifimage.style.opacity=1;
    }
    else{
        Audioelement.pause();
        playbutton.classList.remove("fa-circle-pause");
        playbutton.classList.add("fa-circle-play");
        gifimage.style.opacity=0;
    }
    
});

Audioelement.addEventListener('timeupdate',()=>{
    progress=parseInt((Audioelement.currentTime/Audioelement.duration)*100);
    console.log(progress);
    progressbar.value=progress;
});

progressbar.addEventListener('change',()=>{
    Audioelement.currentTime=progressbar.value*Audioelement.duration/100;
})