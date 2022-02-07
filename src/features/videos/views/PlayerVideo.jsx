import { useCallback, useEffect } from "react";

const PlayerVideo = props => {
  const { handleClose, videoId } = props;

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  return (
    videoId && (
      <div style={styles.modal} onClick={() => handleClose()}>
        <iframe
          style={styles.iframe}
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="encrypted-media"
          title="iframe youtube"
        ></iframe>
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
  iframe: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "80%",
    height: "70%",
    transform: "translate(-50%,-50%)"
  }
};

export default PlayerVideo;
