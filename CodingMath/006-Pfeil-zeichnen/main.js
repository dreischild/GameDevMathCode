window.onload = function() {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        arrowX = width / 2,
        arrowY = height / 2,
        dx, dy,
        angle = 0;

    //document.getElementById("startBtn").onclick = function () {
    render();
    //}

    function render() {
        /** Alte Zeichnung löschen */
        context.clearRect(0, 0, width, height);

        /** Speichert den aktuellen Zeichenkontext (damit die Transformationen später wieder rückgängig gemacht werden können) */
        context.save();
        /** Verschiebt den Ursprung (0,0) des Koordinatensystems in die Mitte des Canvas. */
        context.translate(arrowX, arrowY);
        /** Dreht das Koordinatensystem um den Wert */
        context.rotate(angle);

        context.beginPath();
        context.moveTo(20, 0);
        context.lineTo(-20, 0);
        context.moveTo(20, 0);
        context.lineTo(10, -10);
        context.moveTo(20, 0);
        context.lineTo(10, 10);
        context.stroke();

        /** Setzt das Koordinatensystem wieder zurück, damit sich die Transformationen nicht aufs nächste Bild übertragen. */
        context.restore();

        /** sorgt dafür, dass render() bei jedem Bildschirm-Refresh (~60 FPS) neu aufgerufen wird → Animation. */
        requestAnimationFrame(render);
    }

    document.body.addEventListener("mousemove", function(event) {
        /** Differenz in X- und Y-Richtung zwischen Pfeil und Mauszeiger */
        dx = event.clientX - arrowX;
        dy = event.clientY - arrowY;

        /** Arctan der Gegenkathete (dy) durch Ankathete (dx) */
        /** JavaScript rechnet hier automatisch in Bogenmaß */
        angle = Math.atan2(dy,  dx);
    });
};