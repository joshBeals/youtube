

export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_VIDEOS':
            return action.payload;
        default: 
            return state;
    }
}