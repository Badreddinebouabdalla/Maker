
const leftScroll= document.querySelector(".fa-arrow-left");
const rightScroll = document.querySelector(".fa-arrow-right");
const slideContainer = document.querySelector(".slide-container");
const testSlideContainer = document.querySelector(".slider");

var slideShapes = document.querySelectorAll(".slide-shape");

var n =Number(document.querySelector("[data-slider]").getAttribute("data-slider"));
var m =Number(document.querySelector("[data-slider-2]").getAttribute("data-slider-2"));



check();



function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
    
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

setInterval(()=>{
    if(n<3){
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n+1));
        n++;
    }else if(n==3){
        n=1;
       document.querySelector("[data-slider]").setAttribute("data-slider",String(n)); 
    }

},3000)

slideShapes.forEach((slideShape,i)=>{
    slideShape.addEventListener("click",()=>{
        m=i+1;
        document.querySelector("[data-slider-2]").setAttribute("data-slider-2",String(m));
        check();
    });
});


leftScroll.addEventListener("click",()=>{
    if(n>1){
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n-1));
        n--;
    }else if(n==1){
        n=3;
       document.querySelector("[data-slider]").setAttribute("data-slider",String(n)); 
    }
});

rightScroll.addEventListener("click",()=>{
    if(n<3){
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n+1));
        n++;
    }else if(n==3){
        n=1;
       document.querySelector("[data-slider]").setAttribute("data-slider",String(n)); 
    }
});



function check(){
    for(let i=0; i<3;i++){
        if(i==(m-1)){
            slideShapes[i].classList.add("focus");
        }else{
            slideShapes[i].classList.remove("focus");
        }
    }
}