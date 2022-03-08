import { combineReducers } from "redux";
import allVideosReducer from "./allVideosReducer";

export default combineReducers({
    allVideos: allVideosReducer
});