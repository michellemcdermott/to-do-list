//listItem.appendChild(checkBox);

// Create a "close" button and append it to each list item
var myNodeList = document.getElementsByTagName("LI")
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", remove);
}

function remove(e) {
    var li = e.target;
    var listItems = li.parentElement.parentElement;

    var clone = li.parentElement.cloneNode(true);
    console.log(clone);
    document.getElementById("completedList").appendChild(clone);

    listItems.removeChild(li.parentElement);
    return false;

}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

//add a new item
function newItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("title").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        li.addEventListener("click", remove);

    document.getElementById("uncompletedList").appendChild(li);
    }
    document.getElementById("title").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var checkBox = document.createElement("input");

    //checkBox.type = "checkbox";

    



    function finishedTasks() {
        var myNewNodeList = document.getElementsByTagName("li")
        var i;
        for (var i = 0; i < myNewNodeList.children.length; i++) {
            finishedTask.appendChild(li);
        }

        var finishedTask = document.getElementById("completedList");
        var unfinishedTask = document.getElementById("uncompletedList");

    }
}
