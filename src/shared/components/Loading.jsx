import logo from "../img/loading.gif";

const Loading = () => {
  return (
    <div style={styles.loading}>
      <img src={logo} alt="loading..." />
    </div>
  );
};

const styles = {
  loading: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)"
  }
};

export default Loading;
