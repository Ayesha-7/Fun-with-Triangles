const sideInput = document.querySelectorAll(".side-input");
const calculateAreaButton = document.querySelector("#calculate-area-btn");
const message = document.querySelectorAll(".msg");
const output = document.querySelector("#output");
const smallmsg = document.querySelector("#small");


output.style.display = "none";
smallmsg.style.display = "none";

for(var i = 0; i < message.length; i++){
    message[i].style.display = "none";
}

calculateAreaButton.addEventListener("click", function validateInput(){
    output.style.display = "none";
    smallmsg.style.display = "none";

    for(var i = 0; i < message.length; i++){
        message[i].style.display = "none";
    }

    var flag = 0;

    for(var i = 0; i < sideInput.length; i++){
        if(Number(sideInput[i].value) <= 0 )
           showMessage("Side value should be greater than 0", i);
        else{
            flag = flag + 1;
        }
    }

    if(flag == 3)
    calculateArea();
    
})


function calculateArea(){
    var a = Number(sideInput[0].value);
    var b = Number(sideInput[1].value);
    var c = Number(sideInput[2].value);
    var s = (a + b + c) / 2;
    var temp = s * (s-a) * (s-b) * (s-c);
    var area = Math.pow(temp,0.5);
    area = Math.round(area*1000) / 1000;

    output.style.display = "block";
    output.innerText = "The area of Triangle is " + area + " unit²";
    if(area*area != Math.round(area*area))
    smallmsg.style.display = "block";
}


function showMessage(msg,i){
    message[i].style.display = "block";
    message[i].innerText = msg;
}