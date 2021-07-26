import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from "./components/Inicio";
import Preguntas from "./components/Preguntas";
import Resultado from "./components/Resultado";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <img src="logo_hitec.svg" alt="hitec" className="hitec-logo"/>
            <Inicio/>
            <Link to="/preguntas" className="btn-start">Iniciar</Link>
          </Route>
          <Route path="/preguntas">
            <Preguntas/>
            <Link to="/" className="btn-back-to-home">Ir a Inicio</Link>
            <Link to="/resultado">Resultado</Link>
          </Route>
          <Route path="/resultado">
            <Resultado/>
            <Link to="/" className="btn-back-to-home btn-back-to-home--resultado">Ir a Inicio</Link>
          </Route>
        </Switch>
        <footer>
          Powered by <img src="logo_tecoding.svg" alt="tecoding" className="footer-logo"/> 
                      <img src="logo_fetec.svg" alt="fetec" className="footer-logo"/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
