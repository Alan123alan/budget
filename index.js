//TO DO: use rest parameters to accept any amount of children for a created element
window.addEventListener("load", render);

function render(){
    const root = document.getElementById("root");
    console.log(root);
    // const newPAttrs = new Map();
    // newPAttrs.set("id", "my-p")
    const newP = p("some text");
    console.log(newP.attr("id", "my-p"));
    // const newInputAttrs = new Map();
    // newInputAttrs.set("name", "first-input")
    // newInputAttrs.set("type", "email")
    const newInput = input();
    newInput.attr("name", "my-input")
    newInput.attr("type", "password")
    root.appendChild(newP);
    root.appendChild(newInput);
}

function element(name){
    let element = document.createElement(name);
    element.attr = function(name, value){
        this.setAttribute(name, value);
        return this;
    }
    return element;
}

function p(text){
    const p = element("p");
    if(text){
        p.appendChild(document.createTextNode(text));
        
    }
    return p;
}

function input(){
    const input = element("input");
    return input;
}