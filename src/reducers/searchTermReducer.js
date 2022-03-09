
export default (searchTerm = null, action) => {
    switch(action.type){
        case 'STORE_SEARCH_TERM':
            return action.payload;
        default:
            return searchTerm;
    }
}