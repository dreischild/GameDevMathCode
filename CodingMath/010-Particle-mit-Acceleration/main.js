window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var paricles = [],
        numberOfParticles = 150;

    for (var i = 0; i < numberOfParticles; i++) {
        paricles.push(particle.create(width / 2, height / 4, Math.random() * 5 + 2, Math.random() * Math.PI * 2, 0.1));
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for (var i = 0; i < paricles.length; i++) {
            var p = paricles[i];

            p.update();

            /** Kreis zeichnen */
            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fill();
            context.closePath();
        }

        requestAnimationFrame(update);
    }
};
