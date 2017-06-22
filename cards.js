// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button,
// create a new card element in the DOM that includes it's own delete button. 
// You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, 
// should then be removed from the DOM.
//  Not just made invisible, actually removed from the DOM.



var create = document.getElementById("createBtn");

create.addEventListener("click", function() {
	var text = document.getElementById("textInput").value;
	var body = document.getElementById("main");
	main += finishedCard.innerHTML;
});

	
	


var finishedCard = function buildCard(text) {
	let card = `<div class="Card">
					<h3>${text}</h3>
					<button id="delete">Delete</button>
					</div>`
	return card
};
