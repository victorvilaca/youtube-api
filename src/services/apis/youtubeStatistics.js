import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_API,
  params: {
    part: "statistics",
    key: process.env.REACT_APP_YOUTUBE_KEY
  }
});
