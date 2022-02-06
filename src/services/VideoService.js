import youtube from "./apis/youtube";
import youtubeStatistics from "./apis/youtubeStatistics";

class VideoService {
  async searchVideos(parameter) {
    return await youtube.get("/search", {
      params: {
        q: parameter
      }
    });
  }

  async getVideoStatisticById(parameter) {
    return await youtubeStatistics.get("/videos", {
      params: {
        id: parameter
      }
    });
  }
}

export default new VideoService();
