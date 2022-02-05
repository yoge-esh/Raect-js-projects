import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home/Home";
import Tech from "./Pages/Tech/Tech";
import Business from "./Pages/Business/Business";
import Public from "./Pages/Public/Public";
import Footer from "./Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="content">
            <h2 className="headerName">News App</h2>
            <p className = 'Navline'>
              Belive in yourself Make a attitude of
              <span className="span">"I am the One"</span>
            </p>
          </div>
          <div className="navbar">
            <Navigation />
          </div>
          <div className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Tech" render={() => <Tech />} />
              <Route exact path="/Business" render={() => <Business />} />
              <Route exact path="/Public" render={() => <Public />} />
            </Switch>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
