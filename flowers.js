function createFlower() {
    let body = document.querySelector("body");
    let flower = document.createElement("div");

    // Random position within viewport
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    flower.style.left = x + "px";
    flower.style.top = y + "px";
    
    // Random size for a natural effect
    let size = Math.random() * 40 + 20; // Between 20px and 60px
    flower.style.width = size + "px";
    flower.style.height = size + "px";

    // Random rotation
    flower.style.transform = `rotate(${Math.random() * 360}deg)`;

    body.appendChild(flower);

    // Automatically remove flower after 10s to prevent memory overload
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

// Generate flowers every 300ms
setInterval(createFlower, 300);
