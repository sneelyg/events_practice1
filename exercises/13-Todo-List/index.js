
var lista = document.querySelector('ul');
var texto = document.querySelector('#addToDo');


texto.addEventListener('change', function (e) {

    if (e.key == 'enter') { //esto es para agregar las tareas
        let nuevoli = document.createElement('li');
        let nuevospan = document.createElement('span');
   
        let nuevoicon = document.createElement('i');
        nuevoicon.className = "fa fa-trash";
        nuevospan.appendChild(nuevoicon);
        nuevoli.appendChild(nuevospan);
        
        nuevoli.append(e.target.value);
        nuevospan.addEventListener('click', eliminar(nuevoli));
        lista.appendChild(nuevoli);
}});


let LIs = document.querySelectorAll('li');
for (let i = 0; i < LIs.length; i++) {
    LIs[i].children[0].addEventListener('click', () => {
        eliminar(LIs[i]);

    });
}


function eliminar(elemento) {
    elemento.remove(); //remueve el elemento que recibe, que es el 'LI'.
}