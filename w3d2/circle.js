$(function() {
    const minPosition = 10,
        maxPosition = 90;
    let width = 0,
        amount = 0,
        rate = 0,
        numberOfCircle = 0;
    let interval;


    let container = $("#main-container");
    let startBtn = $("#start");

    startBtn.click(function() {
        width = $("#width").val();
        amount = $("#amount").val();
        rate = $("#rate").val()
        numberOfCircle = $("#number_of_circle").val();

        container.empty();
        clearInterval(interval);
        drawCircles();
        animateCircles();
    });

    let randomNo = (min, max) => Math.floor(Math.random() * (max - min) + min);

    let randomBackgroundColor = () => Math.floor(Math.random() * 16777215).toString(16);

    function drawCircles() {
        for (let i = 0; i < numberOfCircle; i++) {
            let top = randomNo(minPosition, maxPosition) + "%",
                left = randomNo(minPosition, maxPosition) + "%",
                color = '#' + randomBackgroundColor();

            container.append($("<div>", {
                "id": "circle-" + i,
                "class": "circle",
                "css": {
                    "top": top,
                    "left": left,
                    "width": width + "px",
                    "height": width + "px",
                    "border-radius": "50%",
                    "background-color": color,
                    "cursor": "pointer"
                },
                "click": function() {
                    $(this).hide();
                }
            }));
        }
    }

    function animateCircles() {
        interval = setInterval(() => {
            $('.circle')
                .css({
                    "height": (index, old) => (parseInt(old) + parseInt(amount)) + "px",
                    "width": (index, old) => (parseInt(old) + parseInt(amount)) + "px",
                    "border-radius": (index, old) => (parseInt(old) + parseInt(amount)) + "px"
                });
        }, rate);
    }

});