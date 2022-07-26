
var lista=document.querySelector("#parentLi");
var childs= lista.childNodes;

console.log(childs);
lista.removeChild(childs[3]);
