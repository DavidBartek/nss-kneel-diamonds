import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

renderAllHTML()

// listens for custom event, type="stateChanged" (this will be dispatched in database.js).
// When dispatched by the database module, the main module will generate all the HTML again and display it.

document.addEventListener("stateChanged", event => { // "listens" for "stageChanged" (custom) event; then passes a function, defined below
    console.log("State of data has changed. Regenerating HTML...") // logs this string to console
    renderAllHTML() // calls renderAllHTML() again.
})