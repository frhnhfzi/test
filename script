
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("pointerenter", moveButton);
noBtn.addEventListener("touchstart", function(event) {
    event.preventDefault();
    moveButton();
});

yesBtn.addEventListener("click", function() {
    document.querySelector(".love-card").innerHTML = `
        <div style="font-size:60px;">💖</div>
        <h1>YAYYYY! ❤️</h1>
        <p>You just made me the happiest person!</p>
        <p>I Love You! 🌹</p>
    `;
});
