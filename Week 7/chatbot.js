var question=[
  "Hello",
  "How are you?",
  "What is your favourite colour?"
];
var num=0;
var output = document.querySelector("#demo");
document.querySelector("#demo").innerHTML=input[0];
var inputBox = document.querySelector("#input");

function showResponce() {
  var input = inputBox.value;
} if (num==0) {
output.innerHTML='Hi!'
} else if (num==1) {
  output.innerHTML='Great!'
}else if (num==2) {
    output.innerHTML="I have so many favorites it's hard to choose one"
}
function changeQuestion(){
  inputBox.setAttribute("placeholder");
  output.innerHTML=question[num];
}
