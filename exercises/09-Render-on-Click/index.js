let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var nuevo = document.createElement('div');
	nuevo.innerHTML="<h1>Hello World</h1>";
	nuevo.style.background='yellow';
	document.body.appendChild(nuevo);


	
});