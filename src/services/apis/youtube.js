import axios from "axios";

const API_KEY = "AIzaSyBwjYWccazHiQ36SNS0Petvb31uYJr3v9U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY
  }
});
