import moment from "moment";

const VideoDetails = props => {
  const { image, title, channel, views, date, id, setSelectedVideo } = props;
  const dateFormatted = moment(date, "YYYYMMDD").fromNow();

  return (
    <div id="videoDetails" style={styles.card} onClick={() => setSelectedVideo(id)}>
      <div id="image">
        <img src={image} alt="thumb do vídeo" style={styles.image} />
      </div>
      <div id="titleContainer" style={styles.title}>
        <span id="title">{title}</span>
      </div>

      <div id="channelContainer" style={styles.channel}>
        <span id="channel">{channel}</span>
      </div>
      <div id="viewsAndDateContainer" style={styles.viewsAndDate}>
        <span id="viewsAndDate">
          {views} views • {dateFormatted}
        </span>
      </div>
    </div>
  );
};

const styles = {
  image: {
    width: "300px"
  },
  title: {
    paddingTop: "15px",
    fontWeight: "bold",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2
  },
  channel: {
    fontSize: "12px",
    textAlign: "left",
    paddingTop: "15px"
  },
  viewsAndDate: {
    fontSize: "12px",
    textAlign: "left",
    paddingTop: "5px"
  },
  card: {
    objectFit: "cover",
    marginTop: "40px",
    cursor: "pointer",
    width: "300px"
  }
};

export default VideoDetails;
