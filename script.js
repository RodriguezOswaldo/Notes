
// Adds functions 
function addThoughtsItem(){
    let ul = document.getElementById('thoughts-list');
    let thoughts = document.getElementById('thoughts');
    let li = document.createElement('li');
    li.setAttribute('id', thoughts.value);
    li.appendChild(document.createTextNode(thoughts.value));
    ul.appendChild(li);
}
function addThoughtsItem(){
    let ul = document.getElementById('thoughts-list');
    let thoughts = document.getElementById('thoughts');
    let li = document.createElement('li');
    li.setAttribute('id', thoughts.value);
    li.appendChild(document.createTextNode(thoughts.value));
    ul.appendChild(li);
}

//delete functions 
function deleteThoughtsItem(){
    let ul = document.getElementById('thoughts-list');
    let thoughts = document.getElementById('thoughts');
    let item = document.getElementById(thoughts.value);
    ul.removeChild(item);
}

function callAddItem(){
    addItem();
}