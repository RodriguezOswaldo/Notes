
// Adds functions 
function addThoughtsItem(){
    let ul = document.getElementById('thoughts-list');
    let thoughts = document.getElementById('thoughts');
    let li = document.createElement('li');
    li.setAttribute('id', thoughts.value);
    li.appendChild(document.createTextNode(thoughts.value));
    ul.appendChild(li);
}
function addBlessingsItem(){
    let ul = document.getElementById('blessings-list');
    let blessings = document.getElementById('blessings');
    let li = document.createElement('li');
    li.setAttribute('id', blessings.value);
    li.appendChild(document.createTextNode(blessings.value));
    ul.appendChild(li);
}
function addWarningsItem(){
    let ul = document.getElementById('warnings-list');
    let warnings = document.getElementById('warnings');
    let li = document.createElement('li');
    li.setAttribute('id', warnings.value);
    li.appendChild(document.createTextNode(warnings.value));
    ul.appendChild(li);
}

warnings
//delete functions 

function deleteThoughtsItem(){
    let ul = document.getElementById('thoughts-list');
    let thoughts = document.getElementById('thoughts');
    let item = document.getElementById(thoughts.value);
    ul.removeChild(item);
}

function deleteBlessingsItem(){
    let ul = document.getElementById('blessings-list');
    let blessings = document.getElementById('blessings');
    let item = document.getElementById(blessings.value);
    ul.removeChild(item);
}

function deleteWarningsItem(){
    let ul = document.getElementById('warnings-list');
    let blessings = document.getElementById('warnings');
    let item = document.getElementById(warnings.value);
    ul.removeChild(item);
}
function callAddItem(){
    addThoughtsItem();
}