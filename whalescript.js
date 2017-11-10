window.onload = function() {
    function swimmingWhale() {
        var w = window.innerWidth;
        var h = window.innerHeight;

        var elem = document.getElementById("animate");
        var pos = 0;
        var interval = setInterval(frame, 30);
        var sineCalc = 0;
        var x = 0;
        var y = 0;

        var img = document.getElementById("whale");
        var imgWidth = img.clientWidth;
        var imgHeight = img.clientHeight;

        function frame() {
            if (x + imgWidth >= w) {
                clearInterval(interval);
                elem.innerHTML = "";
            } else {
                pos++;
                //elem.style.top = pos + 'px';
                sineCalc = Math.sin(pos * 0.08);
                x = pos * 5;
                y = sineCalc * 20 + 100;
                elem.style.top = y + "px";
                elem.style.left = x + "px";
            }
        }
    }
    swimmingWhale();
};
