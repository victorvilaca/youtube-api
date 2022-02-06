const VideoDetails = props => {
  const { image, title, channel, views, date } = props;

  return (
    <div id="videoDetails">
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
        {views} views - {date} ago
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
  viewsAndDate: {}
};

export default VideoDetails;
