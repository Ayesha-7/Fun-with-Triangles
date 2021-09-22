const sideInput = document.querySelectorAll(".side-input");
const calculateAreaButton = document.querySelector("#calculate-area-btn");
const message = document.querySelectorAll(".msg");
const output = document.querySelector("#output");
const smallmsg = document.querySelector("#small");


output.style.display = "none";
smallmsg.style.display = "none";

for (var i = 0; i < message.length; i++) {
    message[i].style.display = "none";
}

calculateAreaButton.addEventListener("click", function validateInput() {
    output.style.display = "none";
    smallmsg.style.display = "none";

    for (var i = 0; i < message.length; i++) {
        message[i].style.display = "none";
    }

    var flag = 0;

    for (var i = 0; i < sideInput.length; i++) {
        if (Number(sideInput[i].value) <= 0)
            showMessage("Side value should be greater than 0", i);
        else {
            flag = flag + 1;
        }
    }

    if (flag == 3)
        calculateArea();

})


function calculateArea() {
    let a = Number(sideInput[0].value);
    let b = Number(sideInput[1].value);
    let c = Number(sideInput[2].value); 
    if (validateTriangle(a, b, c)) {
        var s = (a + b + c) / 2;
        var temp = s * (s - a) * (s - b) * (s - c);
        var area = Math.pow(temp, 0.5);
        area = Math.round(area * 1000) / 1000;

        output.style.display = "block";
        output.innerText = "The area of Triangle is " + area + " unit²";
        if (area * area != Math.round(area * area))
            smallmsg.style.display = "block";
    }else{
        output.style.display = "block";
        output.style.color = "red";
        output.innerText = "The triangle is not valid, sum of the lengths of any two sides of a triangle has to be greater than the length of the third side.";
    }

}



function showMessage(msg, i) {
    message[i].style.display = "block";
    message[i].innerText = msg;
}

function validateTriangle(a, b, c) {
    if ( ((a + b) > c) && ((b + c) > a) && ((a + c) > b)){
        return true;
    }
    else
        return false;
}