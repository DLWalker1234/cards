// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM that includes it's own delete button. 
// You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, 
// should then be removed from the DOM.
//  Not just made invisible, actually removed from the DOM.
console.log("hello")


//A variable to hold text in the future
var input;
//Variable for the text area that will get the input from the DOM
var inText = document.getElementById("textArea");
//A variable that will make a create button
var createButton = document.getElementById("create");
//variable holding the outp for the DOM
var output = document.getElementById("output");
//A future delete button variable (not sure if this is actually needed)
var deleteButton;

//Event listner that on click of the create button will create a card and delete button
createButton.addEventListener("click", function(event) {
	input = document.getElementById("textArea").value
	output.innerHTML = `<article id="card"> ` + input +`<button type="button" id='delete' class="btn btn-danger">Delete</button>` + `</article>`;
	inText = ""
})
//Event listener that will delete the parent node on a click, in this case it would be a div.
output.addEventListener("click", function(event) {
	if (event.target.id === "delete") {
		deleteButton = event.target.parentNode;
		output.removeChild(deleteButton);
	}
})



//Old Stuff I tried to put into functions, It appeared to get to out of hand

// var NodeChgArea;

// function initAll() {
// 	document.getElementById("theForm").addEventListener("submit", nodeChanger, false);
// 	nodeChgArea = document.getElementById("modifiable");
// 	console.log("initAll")
// 	var createButton = document.getElementById("create")
// 	createButton.addEventListener("click", function() {
// 		addNode();
// 	})
// }

// function addNode() {
// 	var inText = document.getElementById("textArea").value;
// 	var newText = document.createTextNode(inText);

// 	var newGraf = document.createElement("p");
// 	newGraf.appendChild(newText);

// 	nodeChgArea.appendChild(newGraf);
// }

// function delNode() {
// 	var grafChoice = document.getElementById("graffCount").selectedIndex;
// 	var allGrafs = nodeChgArea.getElementsByTagName("p");
// 	var oldGraf = allGrafs.item(grafChoice);

// 	nodeChgeArea.removeChild(oldGraf);
// }
