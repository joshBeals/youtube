
import axios from "axios";

const KEY = 'AIzaSyBawU6y-x3nPou-k1gjzzTkdaoB7EmHwJ0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 15,
      key: KEY
  }
});