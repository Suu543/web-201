// step 1: grab the div element and the button
let content = document.getElementById('content');
let button = document.getElementById('show-more');

// step 2: adding our event listener and handler via the inline property approach
button.onclick = () => {
    if (content.className == "") {
        // expand the box
        content.className = "open";
        button.innerHTML = "Collapse now";
    } else {
        // collapse the box
        content.className = "";
        button.innerHTML = "Expand";
    }
}