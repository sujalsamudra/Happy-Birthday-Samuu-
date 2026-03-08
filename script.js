function showMessage(){

document.getElementById("surprise").style.display="block";

document.getElementById("song").play();

let text="You are truly sweet, and I just wanted to do something small to make you smile today. I hope this year brings you happiness and everything your heart wishes for 💗 have a good day 🙂";

let i=0;

function typing(){

if(i<text.length){

document.getElementById("messageText").innerHTML+=text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}

/* Floating hearts */

setInterval(createHeart,500);

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("hearts");

heart.innerHTML="✨";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}