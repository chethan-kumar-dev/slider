const slider = document.getElementById('slider-container');
const goBack =document.getElementById('go-back');
const goFront =document.getElementById('go-front');

goBack.onclick=function(){
   slider.scrollLeft+=125;
}

goFront.onclick=function(){
   slider.scrollLeft-=125;
}

let play = setInterval(autoplay,100)

function autoplay(){
   slider.scrollLeft+=5;
   let scrollAmountInPer = (slider.scrollLeft/(slider.scrollWidth - slider.clientWidth))*100
   if(scrollAmountInPer > 99){
      slider.scrollLeft=0
      clearTimeout(play);
      play = setInterval(autoplay,100)
   }
}

for(var i=0;i<slider.children.length;i++){
   slider.children[i].addEventListener('mouseover', ()=>{
      clearInterval(play)
   })
   slider.children[i].addEventListener('mouseout', ()=>{
      play=setInterval(autoplay,100)
   })
}