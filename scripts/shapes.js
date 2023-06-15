import { getShapes, setShape } from "./database.js";

const shapes = getShapes();

// HTML-export function
// creates radio buttons for each jewelry shape
// each will contain a value utilizing pk id to be referenced by click event

export const Shapes = () => {
    let html = "<div>"
    const shapeList = shapes.map(shape => {
        return `<input type="radio" name="shape" value="${shape.id}" /> ${shape.shape}`
    })
    html += shapeList.join("")
    html += "</div>"
    return html
}

// change event
// when radio button is clicked, setShapes setter function will be invoked to modify temp state

document.addEventListener("change", e => {
    if (e.target.name === "shape") {
        setShape(parseInt(e.target.value))
    }
})