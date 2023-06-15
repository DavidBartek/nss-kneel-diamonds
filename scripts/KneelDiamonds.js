// ***

import { Metals } from "./Metals.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Shapes } from "./shapes.js"
import { Orders } from "./Orders.js"
import { addCustomOrder } from "./dataAccess.js"

// event listener for Create Custom Order button.
// listens for click;
// event object passed in to function
// assigns the target parameter of the click object to const var, clickedItem
// if the id of the clickedItem element is "orderButton",
// addCustomOrder() from database.js is called
// this will change the permanent state of the application, adding to the HTML

// ** does this event listener HAVE to be located here?

document.addEventListener(
    "click",
    (event) => {
        const clickedItem = event.target
        if (clickedItem.id === "orderButton") {
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>
        <div class="shapeChoices">
        ${Shapes()}
        </div>
        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}

