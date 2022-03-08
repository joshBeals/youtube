import youtube from "../api/youtube";

export const fetchAllVideos = () => async dispatch => {
    const response = await youtube.get('/search', {
        params: { q: 'nba' }
    });
    dispatch({
        type: 'FETCH_ALL_VIDEOS',
        payload: response.data.items
    });
};