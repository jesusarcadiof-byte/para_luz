function si(){
document.getElementById("mensaje").innerHTML="❤️ ¡Me hiciste muy feliz! ❤️";
}

function mover(){
let x=Math.random()*500;
let y=Math.random()*300;

let b=document.getElementById("no");
b.style.left=x+"px";
b.style.top=y+"px";
}
