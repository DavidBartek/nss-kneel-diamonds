// ***

import { getOrders, getMetals, getSizes, getStyles, getShapes } from "./database.js"

const buildOrderListItem = (order) => {
    // assign arrays from database to variables
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()
    const shapes = getShapes()

    // the function you pass to find() must return true/false

    // find price of selected metal
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    const foundShape = shapes.find(
        (shape) => {
            return shape.id === order.shapeId
        }
    )

    // add found prices, assign to totalCost
    const totalCost = ((foundMetal.price + foundSize.price + foundStyle.price) * foundShape.multiplier)

    // interpolates the found metal price into the HTML string. toLocaleString() method formats to spec
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    // nope!

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}