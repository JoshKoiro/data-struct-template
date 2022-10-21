//This is a utility function to be able to call on any object
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