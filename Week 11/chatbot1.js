let arr1 = [
	{
		input: [ 'hello', 'hi', 'greetings' ],
		output: [ 'hello', 'hey', 'greetings' ]
	},
	{
		input: [ 'what is your favourite colour?', 'who is your favourite HYF instructor?', 'who is your role model?' ],
		output: [ 'I am not sure', 'there are too many to choose from', 'I like everyone' ]
	},
	{
		input: [ 'how are you?', 'how is the weather today?', 'how is Canada doing in the Olympics?' ],
		output: [ 'fine', 'great', 'not so good' ]
	}
];

function reply() {
	document.getElementById('myImage').src = '';

	//user values
	let question = document.getElementById('input').value;
	let rando = document.getElementById('random').checked;
	let shortest = document.getElementById('shortest').checked;
	let longest = document.getElementById('longest').checked;

	let outputArray = [];

	for (let one of arr1) {
		if (one.input.includes(question)) {
			outputArray = one.output;
		}
	}
  //// API linkline//////
function loadDoc() {
  var http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	var obj = JSON.parse(this.responseText);
      document.getElementById("demo").innerHTML = "<img src=" + obj.file + ">";
    }
  };
  http.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  http.send();
}
//////alarm timer///////
<button onclick="setTimeout(delayedAlert, 300);">alarm</button>

<script>
function delayedAlert() {
    alert('Did you forget about me? It’s your friend, the Alarm!');
}
