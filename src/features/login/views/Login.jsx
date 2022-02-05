import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = res => {
    console.log(res);
    console.log(res.profileObj);
  };

  return (
    <GoogleLogin
      clientId="66114303598-mogdi0fc09ptl6ldovqf4kcs0mtr3h3i.apps.googleusercontent.com"
      buttonText="Login"
      cookiePolicy="single_host_origin"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    ></GoogleLogin>
  );
};

export default Login;
