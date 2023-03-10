let Celsius = document.getElementById("celsius");
let Fahrenheit= document.getElementById(Fahrenheit);
if (document.getElementById("opt").value="Celsius to Fahrenheit") {
    document.getElementById("submit").onclick=function()
    {
    var textEntered = "";
    textEntered=document.getElementById("in").value;
    document.getElementById("out").innerHTML = textEntered*1.8 +32 + " Fahrenheit";
    }
}

    else if (document.getElementById("opt").value="Fahrenheit to Celsius") {
        document.getElementById("submit").onclick=function()
    {
    var textEntered = "";
    textEntered=document.getElementById("in").value;
    document.getElementById("out").innerHTML = (textEntered-32)*0.5556;
    }
}
        
