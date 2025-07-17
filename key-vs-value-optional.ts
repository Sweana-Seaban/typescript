// key-optional
const shape : {
    name: string,
    /* colour is an optional property here
    so it's not mandatory to pass value for colour property 
    */
    colour? : string,
} = {
    name: 'rectangle',
};

// value-optional
const car : {
    name: string,
    /* colour is key optional
    it means we need to pass it with value undefined
    even though it doesn't have a value
    */
    colour: string | undefined,
} = {
    name: 'Celerio',
    colour: undefined,
}