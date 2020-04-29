window.addEventListener("load", () => {
    var sounds = document.querySelectorAll(".sound");
    var pads = document.querySelectorAll(".pads div");
    var visual = document.querySelector(".visual");
    var color = [
        "rgb(45, 182, 201)",
        "rgb(224, 36, 36)",
        "rgb(54, 214, 206)",
        "rgb(149, 89, 226)",
        "rgb(204, 54, 218)",
        "rgb(213, 231, 50)"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    var createBubble = index =>{
    var bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = color[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
        visual.removeChild(this);
    });
  };
});
