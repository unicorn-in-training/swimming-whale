window.onload = function() {
    var debug = false;

    var randomNumber = function() {
        var number = Math.round(Math.random() * 50);
        return number;
    };

    var swimmingWhale = function(direction) {
        direction = direction || "R";
        var debugText = document.getElementById("debug");
        var debugOutput = "";
        if (debug) {
            debugOutput = debugOutput + "function: swimmingWhale(" + direction + ")<br>";
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        var elem = document.getElementById("animate");
        var pos = 0;
        var interval = setInterval(frame, 30);
        var sineCalc = 0;
        var x = 0;
        var y = 0;
        var switchDirection = 0;
        if (direction == "R") {
            elem.innerHTML = '<img src="whale-r.png" id="whale">';
        } else if (direction == "L") {
            elem.innerHTML = '<img src="whale-l.png" id="whale">';
            x = w;
        }

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
            if (direction == "R") {
                switchDirection = x + imgWidth >= w;
            } else if (direction == "L") {
                switchDirection = x <= imgWidth;
            }

            if (switchDirection) {
                clearInterval(interval);
                // Whale starts swimming from the other side
                if (direction == "R") {
                    newDirection = "L";
                } else if (direction == "L") {
                    newDirection = "R";
                }
                swimmingWhale(newDirection);
            } else {
                pos++;
                sineCalc = Math.sin(pos * 0.08);
                if (direction == "R") {
                    x = pos * 5;
                } else if (direction == "L") {
                    x = w - pos * 5;
                }
                y = sineCalc * offset + 100;
                elem.style.top = y + "px";
                elem.style.left = x + "px";
            }
        }
    };

    swimmingWhale();
};
