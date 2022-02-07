import "./App.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App" id="app">
      <BrowserRouter basename="/">
        <Routes isAuthenticated={false} />
      </BrowserRouter>
    </div>
  );
};

export default App;
