const angleInput = document.querySelectorAll(".angle-input");
const isTriangleButton = document.querySelector("#is-triangle-btn");
const message = document.querySelectorAll(".msg");
const output = document.querySelector("#output");

output.style.display = "none";
for(var i = 0; i < message.length; i++){
    message[i].style.display = "none";
}

isTriangleButton.addEventListener("click", function validateInput(){
    output.style.display = "none";
    for(var i = 0; i < message.length; i++){
        message[i].style.display = "none";
    }

    var flag = 0;

    for(var i = 0; i < angleInput.length; i++){
        if(Number(angleInput[i].value) <= 0 )
           showMessage("Angle value should be greater than 0", i);
        else{
            flag = flag + 1;
        }
    }

    if(flag == 3)
    checkTriangle();
    
})


function checkTriangle(){
    var sum = 0;
    for(var i = 0; i < angleInput.length; i++)
      sum = sum + Number(angleInput[i].value);
    
    if(sum == 180){
        output.style.display = "block";
        output.innerText = "Yay, the angles form a triangle! ✔️";
    }
    else{
        output.style.display = "block";
        output.innerText = "Nope, the angles don't form a triangle ❌";
    }
}


function showMessage(msg,i){
    message[i].style.display = "block";
    message[i].innerText = msg;
}