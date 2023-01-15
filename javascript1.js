var playbtn = document.getElementById('play'),
resetbtn = document.getElementById('reset'),
hearbeat = document.getElementById('heartbeat')
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    heartbeat.pause();
    heartbeat.currentTime = 0;
}, false);

resetbtn.addEventListener('mouseover',function(){
    heartbeat.play();
}, false);

resetbtn.addEventListener('mouseleave',function(){
    heartbeat.pause();
    heartbeat.currentTime = 0;
},false);


var playbtn = document.getElementById('img'),
resetbtn = document.getElementById('reset'),
hearbeat = document.getElementById('heartbeat')
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    heartbeat.pause();
    heartbeat.currentTime = 0;
}, false);

resetbtn.addEventListener('mouseover',function(){
    heartbeat.play();
}, false);

resetbtn.addEventListener('mouseleave',function(){
    heartbeat.pause();
    heartbeat.currentTime = 0;
},false);