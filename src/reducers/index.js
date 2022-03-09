import { combineReducers } from "redux";
import allVideosReducer from "./allVideosReducer";
import searchTermReducer from "./searchTermReducer";
import searchVideosReducer from "./searchVideosReducer";
import selectVideoReducer from "./selectVideoReducer";

export default combineReducers({
    allVideos: allVideosReducer,
    searchTerm: searchTermReducer,
    searchResult: searchVideosReducer,
    selectedVideo: selectVideoReducer
});