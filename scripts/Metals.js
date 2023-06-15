import { getMetals, setMetal, getTempOrderState } from "./database.js"

const metals = getMetals()

// user modifies the temporary state of the "metal" property in the orderBuilder object
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// // below is the old way of converting objects to <li> elements; using a for loop.
// export const Metals = () => {
//     let html = "<ul>"

//     // This is how you have been converting objects to <li> elements
//     for (const metal of metals) {
//         html += `<li>
//             <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
//         </li>`
//     }

//     html += "</ul>"
//     return html
// }


// below is the new way: using the .map() array method.
export const Metals = () => {
    const tempState = getTempOrderState()
    let html = "<ul>"

    const listItems = metals.map(metal => { // creates a new array, "listItems"; iterates through each object, passed in as an argument ("metal")...
        if (tempState.metalId === metal.id) {
            return `<li>
            <input type="radio" id="metalChoice${metal.id}" name="metal" value="${metal.id}" checked /><label for="metalChoice${metal.id}">${metal.metal}</label>
        </li>`    
        // adds "checked" attribute if the current orderBuilder obj has a matching metal Id. 
        // Now, when HTML regenerates upon radio button click, the button will remain selected.
        } else {
            return `<li>
            <input type="radio" id="metalChoice${metal.id}" name="metal" value="${metal.id}" /><label for="metalChoice${metal.id}">${metal.metal}</label>
        </li>` //...returns this string literal for each value in the new array.
        }
    })

    html += listItems.join("") // .join() method joins all array values in listItems with (in this case) no characters into a single string.

    html += "</ul>"
    return html
}