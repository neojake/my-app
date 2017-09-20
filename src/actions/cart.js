export const addToCart = (item) => {
    //console.log("adding item" , item);
    return {
        type: 'add', 
        item
    };
}

export const delToBags = (key) => {
    return {
        type: 'del',
        key
    }
}