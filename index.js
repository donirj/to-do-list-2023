const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    // if value equals to 0, alert
    
    if(inputBox.value === ''){
        alert("you must write something");
    } else {
        // creates li element
        let li = document.createElement("li")
        // adds inputBox value to innerHTML added to li
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        // cross item
        span.innerHTML = "\u00d7"
        // append cross to li item
        li.appendChild(span);
    }
    // after the last todo is created, input becomes empty again
    inputBox.value = ""
}

// click in listContainer
listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }

}, false)


// function to save listContainer.innerHTML in localStorage as with setItem
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// function to save listContainer innerHTML 
function showTask() {

    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()