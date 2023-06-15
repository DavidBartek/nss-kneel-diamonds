import { getShapes, setShape, getTempOrderState } from "./database.js";

const shapes = getShapes();

// HTML-export function
// creates radio buttons for each jewelry shape
// each will contain a value utilizing pk id to be referenced by click event

export const Shapes = () => {
    const tempState = getTempOrderState()
    let html = "<div>"
    const shapeList = shapes.map(shape => {
        if (tempState.shapeId === shape.id) {
            return `<input type="radio" id="shapeChoice${shape.id}" name="shape" value="${shape.id}" checked /><label for="shapeChoice${shape.id}">${shape.shape}</label>`
        } else {
            return `<input type="radio" id="shapeChoice${shape.id}" name="shape" value="${shape.id}" /><label for="shapeChoice${shape.id}">${shape.shape}</label>`
        }
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