var vector = {
    /** Unit Vector mit der Länge (Betrag) 1 --> (1,0) */
    _x: 1,
    _y: 0,

    create: function (x, y) {
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);

        return obj;
    },

    setX: function (x) {
        this._x = x;
    },

    getX: function () {
        return this._x;
    },

    setY: function (y) {
        this._y = y;
    },

    getY: function () {
        return this._y;
    },

    setAngle: function (angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getAngle: function () {
        return Math.atan2(this._y, this._x);
    },

    setLength: function (length) {
        var angle = this.getAngle();

        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getLength: function () {
        return this._y / Math.sin(this.getAngle());
        //return this._x / Math.cos(this.getAngle());
        //return Math.sqrt(this._x * this._x + this._y * this._y);
    },

    add: function (v2) {
        return vector.create(this.getX() + v2.getX(), this.getY() + v2.getY());
    },

    subtract: function (v2) {
        return vector.create(this.getX() - v2.getX(), this.getY() - v2.getY());
    },

    multiply: function (value) {
        return vector.create(this.getX() * value, this.getY() * value);
    },

    divide: function (value) {
        return vector.create(this.getX() / value, this.getY() / value);
    },

    addTo: function (v2) {
        this.setX(this.getX() + v2.getX());
        this.setY(this.getY() + v2.getY());
    },

    subtractFrom: function (v2) {
        this.setX(this.getX() - v2.getX());
        this.setY(this.getY() - v2.getY());
    },

    multiplyBy: function (value) {
        this.setX(this.getX() * value);
        this.setY(this.getY() * value);
    },

    divideBy: function (value) {
        this.setX(this.getX() / value);
        this.setY(this.getY() / value);
    }
}