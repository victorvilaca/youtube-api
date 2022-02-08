import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import CartolaLogo from "../../../shared/img/cartola-logo.png";
import YoutubeLogo from "../../../shared/img/youtube.png";

const Login = () => {
  const [redirect, setRedirect] = useState(null);

  const responseGoogle = res => {
    if (res && res.profileObj) {
      setRedirect(
        <Redirect
          to={{
            pathname: "/videos",
            state: { user: res.profileObj.name }
          }}
        />
      );
    }
  };

  return (
    <div style={styles.backgroundImagem}>
      <img src={CartolaLogo} alt="Logo Cartola" align="center" style={styles.logoCartola} />
      <img src={YoutubeLogo} alt="Logo Youtube" align="center" style={styles.logoYoutube} />
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_ID}
        buttonText="Login"
        cookiePolicy="single_host_origin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className={styles.loginButton}
        render={renderProps => (
          <button onClick={renderProps.onClick} style={styles.loginButton}>
            Entrar
          </button>
        )}
      ></GoogleLogin>
      {redirect}
    </div>
  );
};

const styles = {
  backgroundImagem: {
    height: "100%",
    width: "100%",
    position: "fixed",
    backgroundColor: "#e3682a"
  },
  logoCartola: {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100px"
  },
  logoYoutube: {
    position: "fixed",
    top: "48%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100px"
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "250px",
    border: "2px solid rgb(227, 103, 42)",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "white",
    fontSize: "18px",
    color: "rgb(227, 103, 42)",
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    position: "fixed",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold"
  }
};

export default Login;
