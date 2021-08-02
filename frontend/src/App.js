import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Preguntas from "./components/Preguntas";
import Resultado from "./components/Resultado";

const ConditionalFooter = (props) => {
  const {location} = props;
  if(location.pathname.match(/preguntas/)){
    return null;
  }
  return (
      <footer>
        <div className="footer-wrapper">
          Powered by <img src="logo_tecoding.svg" alt="tecoding" className="footer-logo"/>
          <img src="logo_fetec.svg" alt="fetec" className="footer-logo"/>
        </div>
      </footer>
  )
}

const Footer = withRouter(ConditionalFooter)

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Inicio/>
          </Route>
          <Route path="/preguntas">
            <Preguntas/>
          </Route>
          <Route path="/resultado">
            <Resultado/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
