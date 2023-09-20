//TO DO: use rest parameters to accept any amount of children for a created element
window.addEventListener("load", render);

function render(){
    const root = document.getElementById("root");
    const newP = p("some text");
    newP.attr("id", "my-p");
    const newInput = input();
    newInput.attr("name", "my-input")
    newInput.attr("type", "password")
    const newButton = button("Add Income Record");
    root.appendChild(newP);
    root.appendChild(newInput);
    root.appendChild(newButton);
}

function element(name){
    let element = document.createElement(name);
    element.attr = function(name, value){
        this.setAttribute(name, value);
        return this;
    }
    return element;
}

function div(){
    const div = element("div");
    return div;
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

function button(text){
    const button = element("button");
    if(text){
        button.appendChild(document.createTextNode(text));
    }
    return button;
}