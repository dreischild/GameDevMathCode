var particle = {
    /** Unit Vector mit der Länge (Betrag) 1 --> (1,0) */
    position: null,
    velocity: null,
    gravity: null,

    create: function (x, y, speed, direction, gravity) {
        var obj = Object.create(this);

        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.gravity = vector.create(0, gravity || 0);

        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);

        return obj;
    },

    accelerate: function (acceleration) {
        this.velocity.addTo(acceleration);
    },

    update: function () {
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }
}
