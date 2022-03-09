
export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_SEARCH_VIDEOS':
            return action.payload;
        default:
            return state;
    }
}