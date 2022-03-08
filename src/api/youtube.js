
import axios from "axios";

const KEY = 'AIzaSyBBwbmaZGC5iEb4Nt4Yz58ssggLPdysP5Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 20,
      key: KEY
  }
});