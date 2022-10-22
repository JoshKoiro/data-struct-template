//These are utility functions that can be used in the browser console or in the object class code.


// This is a utility function to be able to call on any object
//it will list all of the properties and methods on a given object
//(excluding private methods)
let Info = (object) => {
    let listObj = {}
    Object.getOwnPropertyNames(object)
        .filter((item) => typeof object[item] !== 'function')
        .map((e,i) => {
             listObj[e] = {type: 'property'}
        })
    Object.getOwnPropertyNames(object)
    .filter((item) => typeof object[item] === 'function')
    .map((e,i) => {
            listObj[e] = {type: 'method'}
        })
    console.table(listObj)
}

//This is a function that can publish data to the html page
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

let Update = (elementID,newContent,properties) => {
    let element = document.getElementById(elementID).innerHTML = newContent
    if(properties){
        //update the properties
        Object.keys(properties).map((prop) => {
            element.setAttribute(prop,properties[prop])
        })
    }
}

let Del = (elementID) => {
    document.getElementById(elementID).remove()
}