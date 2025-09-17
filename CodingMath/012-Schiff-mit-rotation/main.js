window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width / 2, height / 2, 0, 0),
        angle = 0 /* Winkel */
        thrust = vector.create(0, 0); /* Schub */

    update();

    document.body.addEventListener("keydown", function(event) {
        switch (event["keyCode"]) {
            case 38: /* Up */
                thrust.setLength(0.1);
                thrust.setAngle(angle);
                break;
            case 37: /* Left */
                angle -= 0.25;
                break;
            case 39: /* Right */
                angle += 0.25;
                break;
            case 40: /* Down */
                thrust.setLength(0.1);
                thrust.setAngle(angle + Math.PI);
                break;
        }
    });

    document.body.addEventListener("keyup", function(event) {
        switch (event["keyCode"]) {
            case 38: /* Up */
                thrust.setLength(0);
                break;
            case 40: /* Down */
                thrust.setLength(0);
                break;
        }
    });

    function update() {
        context.clearRect(0, 0, width, height);

        ship.accelerate(thrust);
        ship.update();

        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);

        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 0);

        if (thrust.getLength() > 0) {
            context.lineTo(-20, 0);
            context.lineTo(-10, 0);
        }

        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        context.lineTo(10, 0);
        context.stroke();

        context.restore();

        if (ship.position.getX() > width) {
            ship.position.setX(0);
        } else if (ship.position.getX() < 0) {
            ship.position.setX(width);
        }

        if (ship.position.getY() > height) {
            ship.position.setY(0);
        } else if (ship.position.getY() < 0) {
            ship.position.setY(height);
        }

        requestAnimationFrame(update);
    }
};
