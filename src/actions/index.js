import youtube from "../api/youtube";

export const fetchAllVideos = () => async dispatch => {
    const response = await youtube.get('/search', {
        params: { q: 'tech' }
    });
    dispatch({
        type: 'FETCH_ALL_VIDEOS',
        payload: response.data.items
    });
};

export const storeSearchTerm = (term) => {
    return {
        type: 'STORE_SEARCH_TERM',
        payload: term
    };
}