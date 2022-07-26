let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
var lista = document.querySelector('#mySelect');
for (let i=0; i<countries.length; i++){

    //<option value="-1">Select your country</option>
    var seleccion= document.createElement('option');
    seleccion.value = i;
    seleccion.innerHTML=countries[i];
    lista.appendChild(seleccion);


}

lista.addEventListener('change', function(){
    

    var elegido = lista.value;
    alert(countries[elegido]);

});