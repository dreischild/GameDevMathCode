window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    /** Die Mitte des Bildschirms bestimmen */
    var centerX = width * .5,
        centerY = height * .5,
        /** wie weit die Figur nach oben/unten schwingt */
        offset = height * .5,
        /** Wie schnell sich der Winkel verändert (bestimmt die Animationsgeschwindigkeit) */
        speed = 0.05,
        /** Startwinkel */
        angle = 0;

    document.getElementById("startBtn").onclick = function () {
        render();
    }

    function render() {
        /**
         * Bestimmen der Y-Position:
         * - Math.sin(angle) ergibt einen Wert von -1 bis 1
         * - Multipliziert mit dem Offset ergibt sich so ein Wert zwischen -offset und offset
         *      - bspw. -200 und 200, wenn offset = 200
         *
         *  Für eine runde Bewegung könnte man noch den x-Wert über:
         *      x = centerY + Math.cos(angle) * offset
         *  berechnen, da cosinus gegenläufig ist.
         */
        var y = centerY + Math.sin(angle) * offset;

        /** Alte Zeichnung löschen */
        context.clearRect(0, 0, width, height);

        /**
         * 50 px großen Kreis zeichnen
         * - endAngle = Math.PI wäre ein halber Kreis, der hoch und runter gehen würde.
         */
        context.beginPath();
        context.arc(centerX, y, 50, 0, Math.PI * 2, false);
        context.fill();

        if (angle > Math.PI * 2)
            return;

        angle += speed;

        /** Ruft die render-Funktion für den nächsten Frame erneut auf. */
        requestAnimationFrame(render);
    }
};