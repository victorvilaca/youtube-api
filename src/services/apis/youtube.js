import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API,
  params: {
    part: "snippet",
    maxResults: 50,
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
});
