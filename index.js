function makenoise(key)
{
    switch(key)
    {
        case "w":
            var tomw=new Audio("sounds/tom-1.mp3");
            tomw.play();
            break;
        case "a":
            var toma=new Audio("sounds/tom-2.mp3");
            toma.play();
            break;
        case "s":
            var toms=new Audio("sounds/tom-3.mp3");
            toms.play();
            break;
        case "d":
            var tomd=new Audio("sounds/tom-4.mp3");
            tomd.play();
            break;
        case "j":
            var kickj=new Audio("sounds/kick-bass.mp3");
            kickj.play();
            break;
        case "k":
            var crashk =new Audio("sounds/crash.mp3");
            crashk.play();
            break;
        case "l":
            var snarel =new Audio("sounds/snare.mp3");
            snarel.play();
            break;
        default:
            break;
    }
}
function animation(pressedkey){
 var activateanimation=document.querySelector("."+pressedkey);
 activateanimation.classList.add("pressed");
 setTimeout(function(){
    activateanimation.classList.remove("pressed");
 },100);
}
function press() 
{
    var buttons=this.innerHTML;
    makenoise(buttons);
    animation(buttons);
    
}
for(var i=0 ;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",press);
    
    }
document.addEventListener("keydown",function(event){
    makenoise(event.key);
    animation(event.key);
});


