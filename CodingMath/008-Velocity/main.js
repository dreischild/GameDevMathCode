

window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var gameObject = vector.create(100, 100),
        velocity = vector.create(0, 1);

    /* Setze die Geschwindigkeit auf 3 */
    velocity.setLength(3);
    velocity.setAngle(Math.PI / 6);
    console.log(velocity.getX(), velocity.getY());

    //document.getElementById("startBtn").onclick = function () {
        //this.style.display = "none";
    //}

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        gameObject.addTo(velocity);

        /** Kreis zeichnen */
        context.beginPath();
        context.arc(gameObject.getX(), gameObject.getY(), 10, 0, Math.PI * 2, false);
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fill();
        context.closePath();

        requestAnimationFrame(update);
    }
};