function reveal(){
    var reveals= document.querySelectorAll(".head");
    for(var i=0;i<reveals.length;i++){
        var windows=window.innerHeight;
        var element = reveals[i].getBoundingClientRect().top;
        var elementvisible=150;
        if(element < windows - elementvisible){
            reveals[i].classList.add("active");

        }else{
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll",reveal);


var playbtn = document.getElementById('b1'),
hearbeat = document.getElementById('heartbeat'),
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    [].forEach.call(audios,function(heartbeat){
        heartbeat.pause();
        heartbeat.currentTime = 0;
    })
   
}, false);

var playbtn = document.getElementById('b2'),
hearbeat = document.getElementById('heartbeat'),
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    [].forEach.call(audios,function(heartbeat){
        heartbeat.pause();
        heartbeat.currentTime = 0;
    })
   
}, false);


var playbtn = document.getElementById('b3'),
hearbeat = document.getElementById('heartbeat'),
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    [].forEach.call(audios,function(heartbeat){
        heartbeat.pause();
        heartbeat.currentTime = 0;
    })
   
}, false);


var playbtn = document.getElementById('b4'),
hearbeat = document.getElementById('heartbeat'),
audios = document.querySelectorAll('audio');
console.log(audios);

playbtn.addEventListener('mouseover',function(){
    [].forEach.call(audios,function(audio){
        audio.play();
    });
}, false);

playbtn.addEventListener('mouseleave',function(){
    [].forEach.call(audios,function(heartbeat){
        heartbeat.pause();
        heartbeat.currentTime = 0;
    })
   
}, false);

var date = document.getElementById("date").innerHTML = Date();

