import VideoManager from "../VideoManager";
import VideoService from "../../../services/VideoService";

const managerReturnMock = [
  {
    etag: "GyG0GfqRbqUHlB7Rxev717UBFzc",
    id: { kind: "youtube#video", videoId: "id-do-teste-1" },
    kind: "youtube#searchResult",
    snippet: {
      channelId: "channelId",
      channelTitle: "CANAL DE TESTE",
      description: "DESCRIÇÃO DE TESTE 1",
      liveBroadcastContent: "none",
      publishTime: "2021-12-03T19:31:16Z",
      publishedAt: "2021-12-03T19:31:16Z",
      thumbnails: {
        default: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/default.jpg", width: 120, height: 90 },
        high: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/hqdefault.jpg", width: 480, height: 360 },
        medium: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/mqdefault.jpg", width: 320, height: 180 }
      },
      title: "VIDEO TESTE 1"
    },
    statistic: {
      id: "id-do-teste-1",
      kind: "youtube#video",
      statistics: { viewCount: "92", likeCount: "13", favoriteCount: "15", commentCount: "9" }
    }
  },
  {
    etag: "GyG0GfqRbqUHlB7Rxev717UBFzc",
    id: { kind: "youtube#video", videoId: "id-do-teste-2" },
    kind: "youtube#searchResult",
    snippet: {
      channelId: "channelId",
      channelTitle: "CANAL DE TESTE",
      description: "DESCRIÇÃO DE TESTE 2",
      liveBroadcastContent: "none",
      publishTime: "2021-12-03T19:31:16Z",
      publishedAt: "2021-12-03T19:31:16Z",
      thumbnails: {
        default: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/default.jpg", width: 120, height: 90 },
        high: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/hqdefault.jpg", width: 480, height: 360 },
        medium: { url: "https://i.ytimg.com/vi/qTeydrK6cFQ/mqdefault.jpg", width: 320, height: 180 }
      },
      title: "VIDEO TESTE 2"
    },
    statistic: {
      id: "id-do-teste-2",
      kind: "youtube#video",
      statistics: { viewCount: "113", likeCount: "20", favoriteCount: "16", commentCount: "30" }
    }
  }
];

const serviceSearchVideosMock = {
  data: {
    items: [
      {
        etag: "GyG0GfqRbqUHlB7Rxev717UBFzc",
        id: { kind: "youtube#video", videoId: "id-do-teste-1" },
        kind: "youtube#searchResult",
        snippet: {
          channelId: "channelId",
          channelTitle: "CANAL DE TESTE",
          description: "DESCRIÇÃO DE TESTE 1",
          liveBroadcastContent: "none",
          publishTime: "2021-12-03T19:31:16Z",
          publishedAt: "2021-12-03T19:31:16Z",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/default.jpg",
              width: 120,
              height: 90
            },
            high: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/hqdefault.jpg",
              width: 480,
              height: 360
            },
            medium: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/mqdefault.jpg",
              width: 320,
              height: 180
            }
          },
          title: "VIDEO TESTE 1"
        }
      },
      {
        etag: "GyG0GfqRbqUHlB7Rxev717UBFzc",
        id: { kind: "youtube#video", videoId: "id-do-teste-2" },
        kind: "youtube#searchResult",
        snippet: {
          channelId: "channelId",
          channelTitle: "CANAL DE TESTE",
          description: "DESCRIÇÃO DE TESTE 2",
          liveBroadcastContent: "none",
          publishTime: "2021-12-03T19:31:16Z",
          publishedAt: "2021-12-03T19:31:16Z",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/default.jpg",
              width: 120,
              height: 90
            },
            high: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/hqdefault.jpg",
              width: 480,
              height: 360
            },
            medium: {
              url: "https://i.ytimg.com/vi/qTeydrK6cFQ/mqdefault.jpg",
              width: 320,
              height: 180
            }
          },
          title: "VIDEO TESTE 2"
        }
      }
    ]
  }
};

const serviceStatisticsMock = [
  {
    id: "id-do-teste-1",
    kind: "youtube#video",
    statistics: { viewCount: "92", likeCount: "13", favoriteCount: "15", commentCount: "9" }
  },
  {
    id: "id-do-teste-2",
    kind: "youtube#video",
    statistics: { viewCount: "113", likeCount: "20", favoriteCount: "16", commentCount: "30" }
  }
];

const mockTermo = "cartola fc";
const mockTermoSemResultado = "teste sem resultado";

describe("Test video manager", () => {
  it("List videos by term with valid return", async () => {
    VideoService.searchVideos = jest.fn(() => serviceSearchVideosMock);
    VideoService.getVideoStatisticById = jest.fn(
      async () => await { data: { items: serviceStatisticsMock } }
    );

    const result = await VideoManager.listVideosByTerm(mockTermo);

    const ids = [];
    serviceSearchVideosMock.data.items.forEach(el => ids.push(el.id.videoId));

    expect(result).toMatchObject(managerReturnMock);
    expect(VideoService.searchVideos).toHaveBeenCalledTimes(1);
    expect(VideoService.searchVideos).toHaveBeenCalledWith(mockTermo);
    expect(VideoService.getVideoStatisticById).toHaveBeenCalledTimes(1);
    expect(VideoService.getVideoStatisticById).toHaveBeenCalledWith(ids.toString());
  });

  it("List videos by term without return", async () => {
    VideoService.searchVideos = jest.fn(async () => await { data: null });
    VideoService.getVideoStatisticById = jest.fn(async () => await { data: null });

    const result = await VideoManager.listVideosByTerm(mockTermoSemResultado);

    expect(result).toBeNull();
    expect(VideoService.searchVideos).toHaveBeenCalledTimes(1);
    expect(VideoService.searchVideos).toHaveBeenCalledWith(mockTermoSemResultado);
    expect(VideoService.getVideoStatisticById).toHaveBeenCalledTimes(0);
  });
});
