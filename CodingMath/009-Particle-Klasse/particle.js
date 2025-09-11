var particle = {
    _position: null,
    _velocity: null,

    create: function (x, y, speed, direction) {
        this._position = vector.create(x, y);
        this._velocity = vector.create(0, 0);
        this._velocity.setLength(speed);
        this._velocity.setAngle(direction);

        return obj;
    },

    update: function () {
        this._position.addTo(this._velocity);
    }
}