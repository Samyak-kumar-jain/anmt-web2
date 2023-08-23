

let clip = document.querySelectorAll(".left-vdo")
 
for(let i =0;i<clip.length;i++){


  

clip[i].addEventListener("mouseover", function (e) {
    clip[i].play();
    clip[i].scale(0.5);
})


clip[i].addEventListener("mouseout", function (e) {
    clip[i].pause();
    clip[i].currentTime = 0;
})
}
