window.addEventListener("load", render);

function render(){
    const root = document.getElementById("root");
    console.log(root);
    const newPAttrs = new Map();
    newPAttrs.set("id", "my-p")
    const newP = p("some text", newPAttrs);
    const newInputAttrs = new Map();
    newInputAttrs.set("name", "first-input")
    newInputAttrs.set("type", "email")
    const newInput = input(newInputAttrs);
    root.appendChild(newP);
    root.appendChild(newInput);
}

function tag(name){
    return document.createElement(name);
}

function p(text, attributes){
    const p = tag("p");
    if(text){
        p.appendChild(document.createTextNode(text));
        
    }
    for(const [key, value] of attributes){
        p.setAttribute(key, value)
    }
    return p;
}

function input(attributes){
    console.log(attributes);
    const input = tag("input");
    // function attrs(){
    //     this.input.setAttribute("type", "email")
    // }
    for(const [key, value] of attributes){
        input.setAttribute(key, value)
    }
    return input;
}