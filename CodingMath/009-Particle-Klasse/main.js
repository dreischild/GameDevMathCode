window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var p = particle.create(100, 100, 3, Math.PI / 6);
    var paricles = [],
        numberOfParticles = 100;

    for (var i = 0; i < numberOfParticles; i++) {
        paricles.push(particle.create(width / 2, height / 2, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for (var i = 0; i < paricles.length; i++) {
            var p = paricles[i];

            p.update();

            /** Kreis zeichnen */
            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
            context.fillStyle = "rgba(0, 0, 0, 0.5)";
            context.fill();
            context.closePath();
        }

        requestAnimationFrame(update);
    }
};
