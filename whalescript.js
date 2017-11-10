window.onload = function() {
    var debug = true;

    var randomNumber = function() {
        var number = Math.round(Math.random() * 50);
        return number;
    };

    var swimmingWhaleRight = function() {
        var debugText = document.getElementById("debug");
        var debugOutput = "";
        if (debug) {
            debugOutput = debugOutput + "function: swimmingWhaleRight()<br>";
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        var elem = document.getElementById("animate");
        elem.innerHTML = '<img src="whale-r.png" id="whale">';
        var pos = 0;
        var interval = setInterval(frame, 30);
        var sineCalc = 0;
        var x = 0;
        var y = 0;

        var img = document.getElementById("whale");
        var imgWidth = img.clientWidth;
        var imgHeight = img.clientHeight;
        var offset = randomNumber();
        console.log(offset);

        function frame() {
            if (debug) {
                debugOutput = debugOutput + "x: " + x + "px, ";
                debugText.innerHTML = debugOutput;
            }
            if (x + imgWidth >= w) {
                clearInterval(interval);
                // Whale starts swimming from the other side
                swimmingWhaleLeft();
            } else {
                pos++;
                sineCalc = Math.sin(pos * 0.08);
                x = pos * 5;
                y = sineCalc * offset + 100;
                elem.style.top = y + "px";
                elem.style.left = x + "px";
            }
        }
    };

    var swimmingWhaleLeft = function() {
        var debugText = document.getElementById("debug");
        var debugOutput = "";
        if (debug) {
            debugOutput = debugOutput + "function: swimmingWhaleLeft()<br>";
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        var elem = document.getElementById("animate");
        elem.innerHTML = '<img src="whale-l.png" id="whale">';
        var pos = 0;
        var interval = setInterval(frame, 30);
        var sineCalc = 0;
        var x = w;
        var y = 0;

        var img = document.getElementById("whale");
        var imgWidth = img.clientWidth;
        var imgHeight = img.clientHeight;
        var offset = randomNumber();
        console.log(offset);

        function frame() {
            if (debug) {
                debugOutput = debugOutput + "x: " + x + "px, ";
                debugText.innerHTML = debugOutput;
            }
            if (x <= imgWidth) {
                clearInterval(interval);
                // Whale starts swimming from the other side
                swimmingWhaleRight();
            } else {
                pos++;
                //elem.style.top = pos + 'px';
                sineCalc = Math.sin(pos * 0.08);
                x = w - pos * 5;
                y = sineCalc * offset + 100;
                elem.style.top = y + "px";
                elem.style.left = x + "px";
            }
        }
    };

    swimmingWhaleRight();
};
