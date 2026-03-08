function revealSurprise() {
    document.getElementById("surprise").classList.remove("hidden");
    document.getElementById("song").play();
}

// Floating hearts generator
setInterval(createHeart, 500);

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("hearts");
    heart.innerHTML = "✨";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Show message when Photo is clicked
function showMessage() {
    alert("your eyes and smile are the best part of my life 💖");
}function showMessage(){

let text = "You are truly someone special, and I just wanted to do something small to make you smile today. I hope this year brings you happiness and everything your heart wishes for 💖 keep smiling 👀";

let i = 0;

function typing(){

if(i < text.length){
document.getElementById("messageText").innerHTML += text.charAt(i);
i++;
setTimeout(typing,40);
}

}

typing();

}
