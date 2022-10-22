class Main {
    /**
     * Main Template Class
     * @param {String} objectName 
     */
    constructor(objectName){
        this.objectName = objectName
    }

    /**
     * Example of a public method
     * @returns {Main} Main Object
     */
    publicMethod = () => {
        return this
    }

    /**
     * Example of a private method
     * @returns {Main} Main Object
     */
    privateMethod(){
        return this
    }
}