'use strict'
window.addEventListener('load', () => {
    const music=document.getElementById('music');
    var audio = new Audio("./canterbury-silent.mp3");
    audio.play();
    music.addEventListener('click',()=>{
        if (audio.paused){
            audio.play();
            document.querySelector('i').classList.remove('fa-volume-mute')
            document.querySelector('i').classList.add('fa-volume-up')
          }else{
            audio.pause();
            document.querySelector('i').classList.remove('fa-volume-up')
            document.querySelector('i').classList.add('fa-volume-mute')
          }

    })
    setInterval(createSnow, 50);
    function createSnow() {
        const snow = document.createElement('p');
        snow.classList.add('snow');
        snow.style.left = Math.random() * window.innerWidth + 'px';
        snow.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
        snow.style.opacity = Math.random();
        let nn=Math.random() * 5 + 5 + 'px';
        snow.style.width=nn;
        snow.style.height=nn;
        document.body.appendChild(snow);
        
        setTimeout(() => {
            snow.remove();
        }, 5000)
    }

   
})