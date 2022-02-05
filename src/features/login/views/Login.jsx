import React, { useState } from "react";
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
        clientId="66114303598-mogdi0fc09ptl6ldovqf4kcs0mtr3h3i.apps.googleusercontent.com"
        buttonText="Login"
        cookiePolicy="single_host_origin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        className={styles.loginButton}
        render={renderProps => (
          <button onClick={renderProps.onClick} style={styles.loginButton}>
            Login
          </button>
        )}
      ></GoogleLogin>
      {redirect}
    </div>
  );
};

var styles = {
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "250px",
    border: "none",
    borderBottom: "2px solid rgba(0, 0, 0, 0.25)",
    borderRadius: "3px",
    cursor: "pointer",
    backgroundColor: "#e3672a",
    fontSize: "18px",
    color: "white",
    letterSpacing: "-0.04em",
    fontFamily: 'proximanova-bold,"Helvetica Neue",Arial,sans-serif',
    textAlign: "center",
    textDecoration: "none",
    textTransform: "uppercase",
    transition: ".35s",
    whiteSpace: "nowrap",
    position: "fixed",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

export default Login;
