import { getSizes, setSize } from "./database.js"

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
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html

}

