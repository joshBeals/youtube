
export default (state = {}, action) => {
    switch(action.type){
        case 'SELECT_VIDEO':
            return action.payload;
        default:
            return state;
    }
}