function compute()
{
    validate();
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <span style='background-color: #FFFF00'>" + principal + "</span>,\<br\>at an interest rate of <span style='background-color: #FFFF00'>"+rate+"</span> %\<br\>You will receive an amount of <span style='background-color: #FFFF00'> "+interest+"</span>,\<br\>in the year <span style='background-color: #FFFF00'>"+year+" </span> \<br\>"
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function validate(){
    var value = document.getElementById("principal").value;
    if (value < 1){
        alert("Enter a positive number");
        value.focus();
        return false;
    }
}


        