import React from "react";
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
        <h1>HiTec</h1>
        <hr />
        <Switch>
          <Route path="/" exact>
            <Inicio/>
            <Link to="/preguntas">Empezar</Link>
          </Route>
          <Route path="/preguntas">
            <Preguntas/>
            <Link to="/">Regresar a Inicio</Link>
          </Route>
          <Route path="/resultado">
            <Resultado/>
            <Link to="/">Regresar a Inicio</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
