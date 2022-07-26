let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	lista = document.querySelector('#myList');
	var nuevo= document.createElement('li');
	nuevo.innerHTML = "Fourth Element";
	lista.appendChild(nuevo);

});
