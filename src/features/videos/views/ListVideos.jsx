import { useState, useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../layout/views/Layout";
import VideoManager from "../VideoManager";
import VideoDetails from "./VideoDetails";
import PlayerVideo from "./PlayerVideo";
import Loading from "../../../shared/components/Loading";

const ListVideos = props => {
  const { location } = props;

  const [redirect, setRedirect] = useState(null);
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cartola fc");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  const user = location && location.state && location.state.user;

  const searchVideos = async searchTerm => {
    setLoading(true);
    const response = await VideoManager.listVideosByTerm(searchTerm);
    setVideos(response);
    setLoading(false);
  };

  const searchTermRef = useRef(searchTerm);

  useEffect(() => {
    searchTermRef.current = searchTerm;
  });

  useEffect(() => {
    if (!user) {
      setRedirect(<Redirect to="/login" />);
    }
  }, [user]);

  useEffect(() => {
    searchVideos(searchTermRef.current);
  }, []);

  return (
    <Layout
      showHeader
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
      searchVideos={searchVideos}
    >
      <div style={styles.content}>
        {loading ? (
          <Loading />
        ) : (
          videos &&
          videos.map(video => {
            const id = video && video.id && video.id.videoId;
            const image =
              video &&
              video.snippet &&
              video.snippet.thumbnails &&
              video.snippet.thumbnails.high &&
              video.snippet.thumbnails.high.url;
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
                  id={id}
                  key={id}
                  setSelectedVideo={setSelectedVideo}
                />
              )
            );
          })
        )}
      </div>

      <PlayerVideo videoId={selectedVideo} handleClose={() => setSelectedVideo(null)} />

      {redirect}
    </Layout>
  );
};

const styles = {
  content: {
    marginLeft: "50px",
    marginRight: "50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gridGap: "70px"
  }
};

export default ListVideos;
