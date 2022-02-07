import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import CartolaLogo from "../../../shared/img/cartola-logo.png";

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
      <img src={CartolaLogo} alt="Logo Cartola" align="center" style={styles.logo} />
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
    backgroundColor: "#e8642c"
  },
  logo: {
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "250px",
    border: "2px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    cursor: "pointer",
    backgroundColor: "#e3672a",
    fontSize: "18px",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    position: "fixed",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

export default Login;
