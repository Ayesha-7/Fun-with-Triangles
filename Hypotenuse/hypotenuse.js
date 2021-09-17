const sideInput = document.querySelectorAll(".side-input");
const getHypotenuseButton = document.querySelector("#get-hypotenuse-btn");
const message = document.querySelectorAll(".msg");
const output = document.querySelector("#output");
const smallmsg = document.querySelector("#small");

output.style.display = "none";
smallmsg.style.display = "none";
for(var i = 0; i < message.length; i++){
    message[i].style.display = "none";
}

getHypotenuseButton.addEventListener("click", function validateInput(){
    output.style.display = "none";
    smallmsg.style.display = "none";
    for(var i = 0; i < message.length; i++){
        message[i].style.display = "none";
    }

    var flag = 0;

    for(var i = 0; i < sideInput.length; i++){
        if(Number(sideInput[i].value) <= 0 )
           showMessage("Values should be greater than zero", i);
        else{
            flag = flag + 1;
        }
    }

    if(flag == 2)
    getHypotenuse();
    
})


function getHypotenuse(){

    var base = Number(sideInput[0].value);
    var height = Number(sideInput[1].value);
    var temp = Math.pow(base,2) + Math.pow(height,2);
    var hypo = Math.pow(temp,0.5);
    hypo = Math.round(hypo*1000) / 1000;

    output.style.display = "block";
    output.innerText = "The length of hypotenuse is " + hypo + "unit";
    if(hypo*hypo != Math.round(hypo*hypo))
    smallmsg.style.display = "block";
}


function showMessage(msg,i){
    message[i].style.display = "block";
    message[i].innerText = msg;
}