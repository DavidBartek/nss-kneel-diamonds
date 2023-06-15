import { getSizes, setSize, getTempOrderState } from "./dataAccess.js"

const sizes = getSizes()

// user modifies the temporary state of the "size" property in the orderBuilder object
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    const tempState = getTempOrderState()
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        if (tempState.sizeId === size.id) {
            return `<li>
            <input type="radio" id="sizeChoice${size.id}" name="size" value="${size.id}" checked /><label for="sizeChoice${size.id}">${size.carets}</label>
        </li>`    
        } else {
            return `<li>
            <input type="radio" id="sizeChoice${size.id}" name="size" value="${size.id}" /><label for="sizeChoice${size.id}">${size.carets}</label>
        </li>`
        }
    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html

}

