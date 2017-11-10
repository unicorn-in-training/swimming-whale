window.onload = function() {
    var debug = false;

    var randomNumber = function() {
        var number = Math.round(Math.random() * 50);
        return number;
    };

    var iterationCounter = 0;
    var img = document.getElementById("whale");
    var imgWidth = img.width;
    var imgHeight = img.height;

    var swimmingWhale = function(direction) {
        direction = direction || "R";
        var elem = document.getElementById("animate");
        var debugText = document.getElementById("debug");
        var debugOutput = "";
        if (debug) {
            debugOutput = debugOutput + "function: swimmingWhale(" + direction + ")<br>";
        }
        var w = window.innerWidth;
        var h = window.innerHeight;
        var pos = 0;
        var interval = setInterval(frame, 30);
        var sineCalc = 0;
        var x = 0;
        var y = 0;
        var switchDirection = 0;
        var offset = randomNumber();

        if (direction == "R") {
            elem.innerHTML = '<img src="whale-r.png" id="whale">';
        } else if (direction == "L") {
            elem.innerHTML = '<img src="whale-l.png" id="whale">';
            x = w - imgWidth;
        }

        function frame() {
            if (debug) {
                debugOutput = debugOutput + "x: " + x + "px, ";
                debugText.innerHTML = debugOutput;
            }
            if (direction == "R") {
                switchDirection = x + imgWidth >= w;
            } else if (direction == "L") {
                switchDirection = x <= 0;
            }

            if (switchDirection) {
                clearInterval(interval);
                // Whale starts swimming from the other side
                if (direction == "R") {
                    newDirection = "L";
                } else if (direction == "L") {
                    newDirection = "R";
                }
                iterationCounter++;
                swimmingWhale(newDirection);
            } else {
                pos++;
                sineCalc = Math.sin(pos * 0.08);
                if (direction == "R") {
                    x = pos * 5;
                } else if (direction == "L") {
                    x = w - imgWidth - pos * 5;
                }
                console.log(x);
                y = sineCalc * offset + 100;
                elem.style.top = y + "px";
                elem.style.left = x + "px";
            }
        }
    };
    swimmingWhale();
};
