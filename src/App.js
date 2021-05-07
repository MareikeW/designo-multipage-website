
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/home";
import About from "./pages/about";
import AppDesign from "./pages/appDesign";
import Contact from "./pages/contact";
import GraphicDesign from "./pages/graphicDesign";
import Location from "./pages/locations";
import WebDesign from "./pages/webDesign";


const App = () => {
  return (
    <Fragment>
      {/*Globale Styles müssen als Geschwisterkomponente zu den Haupt Komponenten hinzugefügt werden.*/}
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/webdesign">
            <WebDesign />
          </Route>

          <Route path="/appdesign">
            <AppDesign />
          </Route>

          <Route path="/graphicdesign">
            <GraphicDesign />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/location">
            <Location />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
