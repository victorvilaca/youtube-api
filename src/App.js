import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <Routes isAuthenticated={false} />
      </BrowserRouter>
    </div>
  );
};

export default App;
