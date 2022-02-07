import VideoService from "../../services/VideoService";

class VideoManager {
  async listVideosByTerm(term) {
    const responseVideos = await VideoService.searchVideos(term);
    const videos = responseVideos && responseVideos.data && responseVideos.data.items;
    const videosIds = [];

    if (videos) {
      videos.forEach(
        video => video && video.id && video.id.videoId && videosIds.push(video.id.videoId)
      );

      const responseStatistics = await VideoService.getVideoStatisticById(videosIds.toString());

      const statistics =
        responseStatistics && responseStatistics.data && responseStatistics.data.items;

      videos.forEach(video => {
        const statistic = statistics.find(element => element.id === video.id.videoId);
        video.statistic = statistic || null;
      });
    }

    return videos;
  }
}

export default new VideoManager();
