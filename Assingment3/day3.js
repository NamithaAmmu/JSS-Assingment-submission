function doSomething(){
    var input=document.getElementById("text-in").value;
    console.log(input);
    document.getElementById("head").innerHTML="Hello"+input;
}
var btn=document.getElementById("btn");
btn.addEventListener("click",doSomething);