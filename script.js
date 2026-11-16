
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", function() {

    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    noBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});

yesBtn.addEventListener("click", function() {

    document.querySelector(".love-card").innerHTML = `
        <div style="font-size:60px;">💖</div>
        <h1>YAYYYY! ❤️</h1>
        <p>You just made me the happiest person!</p>
        <p>I Love You! 🌹</p>
    `;

});
