//These are utility functions that can be used in the browser console or in the object class code.


/**
 * This returns a formated table in the console showing properties and public methods of an object
 * @param {Object} object 
 */
let Info = (object) => {
    let listObj = {}
    Object.getOwnPropertyNames(object)
        .filter((item) => typeof object[item] !== 'function')
        .map((e,i) => {
             listObj[e] = {type: 'property'}
        })
    Object.getOwnPropertyNames(Object.getPrototypeOf(object))
    .filter((item) => item !== 'constructor')
    .map((e,i) => {
            listObj[e] = {type: 'method'}
        })
    console.table(listObj)
}

/**
 * Inserts a new HTML tag onto the DOM
 * @param {String} content content to insert into HTML
 * @param {Object} properties object containing attributes of html tag to be applied
 */
let Ins = (content, properties) => {
    if(!properties){
        properties = {}
    }
        properties.id = properties.id || 'id-' + content
        properties.class = properties.class || 'text'
        properties.element = properties.element ||  'p'

    let html = document.createElement(properties.element)
    Object.keys(properties).map((prop) => {
        html.setAttribute(prop,properties[prop])
    })
    let contentNode = document.createTextNode(content)

    html.appendChild(contentNode)
    document.body.appendChild(html)

}

/**
 * Update an existing HTML tag on the DOM
 * @param {String} elementID The id attribute of the item to update
 * @param {String} newContent The new content to write over the existing innerHTML content
 * @param {Object} properties object containing attributes of html tag to be applied
 */
let Update = (elementID,newContent,properties) => {
    let element = document.getElementById(elementID).innerHTML = newContent
    if(properties){
        //update the properties
        Object.keys(properties).map((prop) => {
            element.setAttribute(prop,properties[prop])
        })
    }
}

/**
 * Delete an existing HTML tag on the DOM
 * @param {String} elementID the id attribute of the item to delete
 */
let Del = (elementID) => {
    document.getElementById(elementID).remove()
}