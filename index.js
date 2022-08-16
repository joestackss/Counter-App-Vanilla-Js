let counters = document.getElementById("counter")
let incrementBtn = document.getElementById("increment-btn")
let saver = document.getElementById("save-btn")
let saveText = document.getElementById("saveText")

let count = 0

function increment() {
    count = count + 1
    counters.textContent = count
}


function save() {
    saveText.textContent += " - " + count
    counters
    console.log("You clicked Saver")
    counters.textContent = 0
    count = 0
}