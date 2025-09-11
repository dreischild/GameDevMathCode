window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var p = particle.create(100, 100, 3, Math.PI / 6);

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        p.update();

        /** Kreis zeichnen */
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fill();
        context.closePath();

        requestAnimationFrame(update);
    }
};
