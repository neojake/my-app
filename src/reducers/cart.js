export default(state= [], payload) => {
 
    switch(payload.type) {
        case 'add':
            return [...state, payload.item];
        case 'del':            
            return state;
        default:
            return state;
    }
};