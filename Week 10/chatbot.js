////questions function/////
 
(3) [{...},{...},{...}]
0:{ input: 'Hello', output: array(3)};
1:{ input: 'what your favourite color?', output: array(3)};
2:{ input: 'How are you?', output: array(3)};
length:3
___proto___:array(0)
(3) [{...},{...},{...}]
0:
input: 'Hello'
output:(3)["Hi","Hey","Greeting"]
___proto___:object
1:
input: 'What is your favourite color'
output:(3)["I'm not sure","I've got no idea","There are too many to choose from"]
___proto___:object
2:
input: 'How are you?'
output:(3)["Fine","Greet","So-So"]
___proto___:array(0)

/// reply function/////
var question = { input: 'Hi', output: 'Hello'};
var randomNumber{
document.getElementById("random").innerHTML = Math.random(0,1,2)};
filterType:(value==null)
function reply() {
//// conditional statement/////
let question = document.getElementById('input').value;
	if(question === conv.input){
		document.getElementById('output').value = conv.output;
	}
	else{
		document.getElementById('output').value = "I don't understand that command. Please enter another.";
	}
}
document.getElementById('submit').onclick = function(event){
	reply();
}
