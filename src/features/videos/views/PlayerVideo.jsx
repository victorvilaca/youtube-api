const PlayerVideo = props => {
  const { handleClose, videoId } = props;

  return (
    videoId && (
      <div style={styles.modal}>
        <section style={styles.modalMain}>
          <iframe
            title="player video"
            width="420"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    )
  );
};

const styles = {
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: "block"
  },

  modalMain: {
    position: "fixed",
    background: "white",
    width: "80%",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }
};

export default PlayerVideo;
