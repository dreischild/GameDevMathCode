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
        /** Radius der Kreisbahn */
        radius = 200,
        /** Startwinkel */
        angle = 0;

    document.getElementById("startBtn").onclick = function () {
        render();
    }

    function render() {
        /**
         * Berechnung der y-Position und x-Position des Kreises für den aktuellen Winkel
         * centerY und centerX setzen den Kreis in die Mitte des Bildschirms
         */
        var y = centerY + Math.sin(angle) * radius,
            x = centerX + Math.cos(angle) * radius;

        /** Alte Zeichnung löschen */
        context.clearRect(0, 0, width, height);

        /**
         * 20 px großen Kreis zeichnen
         * - startAngle: 0 und endAngle: Math.PI * 2 definieren das an der x|y ein kleiner Kreis gezeichnet wird.
         *      es hat somit nichts mit der Berechnung zu tun!
         */
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI * 2, false);
        context.fill();

        angle += speed;

        /** Ruft die render-Funktion für den nächsten Frame erneut auf. */
        requestAnimationFrame(render);
    }
};