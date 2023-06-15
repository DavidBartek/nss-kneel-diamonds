// Data access layer separating raw data in database.js from all other modules

import { getDatabase } from "./database.js"

const database = getDatabase()

// GETTER functions - these functions return **copies** of the current state. These functions will be invoked to **get** state.

export const getStyles = () => {
    return database.styles.map(style => ({ ...style }))
}

export const getSizes = () => {
    return database.sizes.map(size => ({ ...size }))
}

export const getMetals = () => {
    return database.metals.map(metal => ({ ...metal }))
}

export const getShapes = () => {
    return database.shapes.map(shape => ({...shape }))
}

export const getTempOrderState = () => {
    return database.orderBuilder // exports a copy of the orderBuilder object (all others are exporting a copy of arrays)
}

export const getOrders = () => {
    return database.customOrders.map(order => ({ ...order }))
}

// SETTER functions - these functions will be invoked to **change**/**set** temporary state in the database.
// takes one parameter: id (of the metal, size, or style)

export const setMetal = (id) => {
    database.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged")) // dispatches HTML-regeneration function in main.js
}

export const setSize = (id) => {
    database.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged")) // dispatches HTML-regeneration function in main.js
}

export const setStyle = (id) => {
    database.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged")) // dispatches HTML-regeneration function in main.js
}

export const setShape = (id) => {
    database.orderBuilder.shapeId = id
    document.dispatchEvent(new CustomEvent("stateChanged")) // dispatches HTML-regeneration function in main.js
}

// Setter function - this function will be invoked to change/set the permanent state of customOrders in the database.

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = { ...database.orderBuilder } // creates new object, newOrder, and assigns the current state of orderBuilder in database.

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1 // creates new variable, lastIndex, and assigns the current length of the customOrders array, minus 1.
    // ^ this will be used to provide the index value below.
    newOrder.id = database.customOrders[lastIndex].id + 1 // finds the object at the lastIndex position, accesses id property plus 1, assigns to id property of newOrder

    // Add a timestamp to the order
    newOrder.timestamp = Date.now() // adds timestamp property and assigns a value accordingly

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Sends (dispatches) a new custom event, stateChanged, to the document; synchronously invokes the affected event listener.
    // this is the final step to "firing" an event; created and initialized using Event() constructor in main.js
    document.dispatchEvent(new CustomEvent("stateChanged"))
}