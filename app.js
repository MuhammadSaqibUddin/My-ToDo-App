var list = document.getElementById("list");

function addToDo(){
    var todo = document.getElementById("todo-item");
    // create li tag with txt node
    var li = document.createElement('li');
    var liTxt = document.createTextNode(todo.value);
    li.appendChild(liTxt);
    

    var deleteBtn = document.createElement("button");
    var deleteTxt = document.createTextNode("Delete");
    deleteBtn.setAttribute("class","delbtn");
    deleteBtn.setAttribute("onclick","deleteItem(this)");
    deleteBtn.appendChild(deleteTxt);

    li.appendChild(deleteBtn);
    

    //create edit btn
    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("Edit");
    editBtn.setAttribute("class","editbtn");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editTxt);

    li.appendChild(editBtn);

    list.appendChild(li);
    todo.value = "";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter edit value",val);
    e.parentNode.firstChild.nodeValue = editValue;
}

function deleteItem(e){
    e.parentNode.remove();
}
function deleteAll(){
    list.innerHTML = "";
}




