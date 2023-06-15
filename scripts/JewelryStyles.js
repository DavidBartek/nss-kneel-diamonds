import { getStyles, setStyle, getTempOrderState } from "./dataAccess.js"

const styles = getStyles()

// user modifies the temporary state of the "style" property in the orderBuilder object
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    const tempState = getTempOrderState()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItemsArray = styles.map(style => {
        if (tempState.styleId === style.id) {
            return `<li>
            <input type="radio" id="JewelryStyle${style.id}" name="style" value="${style.id}" checked /><label for="JewelryStyle${style.id}">${style.style}</label>
        </li>`
        } else {
            return `<li>
            <input type="radio" id="JewelryStyle${style.id}" name="style" value="${style.id}" /><label for="JewelryStyle${style.id}">${style.style}</label>
        </li>`
        }
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

