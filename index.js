window.addEventListener("load", render);

function render(){
    const root = document.getElementById("root");
    console.log(root);
    const newP = p();
    const newInput = input();
    root.appendChild(newP);
    root.appendChild(newInput);
}

function tag(name){
    return document.createElement(name);
}

function p(){
    const p = tag("p");
    return p;
}

function input(){
    const input = tag("input");
    return input;
}