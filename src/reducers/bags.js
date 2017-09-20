export default(state= [], payload) => {
    
    console.log(state);

    switch(payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'del':                     
            return state;           
        default:
            return state;
    }
};