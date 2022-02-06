import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../layout/views/Layout";
import VideoManager from "../VideoManager";
import VideoDetails from "./VideoDetails";

const ListVideos = props => {
  const { location } = props;

  const [redirect, setRedirect] = useState(null);
  const [videos, setVideos] = useState([]);

  const user = location && location.state && location.state.user;

  useEffect(() => {
    if (!user) {
      setRedirect(<Redirect to="/login" />);
    }
  }, [user]);

  useEffect(() => {
    const searchVideos = async () => {
      const response = await VideoManager.listVideosByTerm("atletico");
      setVideos(response);
    };

    searchVideos();
  }, []);

  return (
    <Layout showHeader>
      <div style={styles.content}>
        {videos &&
          videos.map(video => {
            const id = video && video.id && video.id.videoId;
            const image =
              video &&
              video.snippet &&
              video.snippet.thumbnails &&
              video.snippet.thumbnails.default &&
              video.snippet.thumbnails.default.url;
            const title = video && video.snippet && video.snippet.title;
            const channel = video && video.snippet && video.snippet.channelTitle;
            const date = video && video.snippet && video.snippet.publishTime;
            const views =
              video &&
              video.statistic &&
              video.statistic.statistics &&
              video.statistic.statistics.viewCount;

            return (
              id && (
                <VideoDetails
                  image={image}
                  title={title}
                  channel={channel}
                  views={views}
                  date={date}
                  key={id}
                />
              )
            );
          })}
      </div>
      {redirect}
    </Layout>
  );
};

const styles = {
  content: {
    marginTop: "10px"
  }
};

export default ListVideos;
