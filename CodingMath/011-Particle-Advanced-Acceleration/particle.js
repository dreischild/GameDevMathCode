var particle = {
    /** Unit Vector mit der Länge (Betrag) 1 --> (1,0) */
    position: null,
    velocity: null,

    create: function (x, y, speed, direction) {
        var obj = Object.create(this);

        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);

        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);

        return obj;
    },

    update: function () {
        this.position.addTo(this.velocity);
    }
}
