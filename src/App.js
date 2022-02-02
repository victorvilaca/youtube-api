import "./App.css";
import GoogleLogin from "react-google-login";

const App = () => {
  const responseGoogle = res => {
    console.log(res);
    console.log(res.profileObj);
  };

  return (
    <div className="App">
      <GoogleLogin
        clientId="66114303598-mogdi0fc09ptl6ldovqf4kcs0mtr3h3i.apps.googleusercontent.com"
        buttonText="Login"
        cookiePolicy="single_host_origin"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ></GoogleLogin>
    </div>
  );
};

export default App;
