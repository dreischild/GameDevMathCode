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
        radius = 200



    document.getElementById("startBtn").onclick = function () {
        /**
         * Math.PI entspricht 180 Grad
         */
        for (var angle = 0; angle < Math.PI; angle += 0.1) {
            var y = centerY + Math.sin(angle) * radius,
                x = centerX + Math.cos(angle) * radius;

            context.beginPath();
            context.arc(x, y, 5, 0, Math.PI * 2, false);
            context.fill();
        }
    }
};