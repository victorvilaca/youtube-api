import moment from "moment";

const VideoDetails = props => {
  const { image, title, channel, views, date, id, setSelectedVideo } = props;
  const dateFormatted = moment(date, "YYYYMMDD").fromNow();

  return (
    <div id="videoDetails" style={styles.card} onClick={() => setSelectedVideo(id)}>
      <div id="image" style={styles.image}>
        <img src={image} alt="thumb do vídeo"></img>
      </div>
      <div id="title" style={styles.title}>
        {title}
      </div>
      <div id="channel" style={styles.channel}>
        {channel}
      </div>
      <div id="viewsAndDate" style={styles.viewsAndDate}>
        {views} views - {dateFormatted}
      </div>
    </div>
  );
};

const styles = {
  image: {
    marginTop: "10px"
  },
  title: {},
  channel: {},
  viewsAndDate: {},
  card: {
    height: "200px",
    width: "100%",
    objectFit: "cover"
  }
};

export default VideoDetails;
