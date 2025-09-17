window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width / 2, height / 2, 0, 0),
        angle = 0, /* Winkel */
        thrust = vector.create(0, 0); /* Schub */

    update();

    document.body.addEventListener("keydown", function(event) {
        switch (event["keyCode"]) {
            case 40: /* Up */
                thrust.setY(0.1);
                break;
            case 37: /* Left */
                thrust.setX(-0.1);
                break;
            case 39: /* Right */
                thrust.setX(0.1);
                break;
            case 38: /* Down */
                thrust.setY(-0.1);
                break;
        }
    });

    document.body.addEventListener("keyup", function(event) {
        switch (event["keyCode"]) {
            case 40: /* Up */
                thrust.setY(0);
                break;
            case 37: /* Left */
                thrust.setX(0);
                break;
            case 39: /* Right */
                thrust.setX(0);
                break;
            case 38: /* Down */
                thrust.setY(0);
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
        context.lineTo(-10, 7);
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
