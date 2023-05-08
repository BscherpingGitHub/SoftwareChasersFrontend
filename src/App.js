import Home from "./containers/Home";
import Help from "./containers/Help"
import {Route, Routes } from 'react-router-dom'
require("./index.css");

function App() {
  return (
      <Routes>
        <Route Component={Home} exact path = '/SoftwareChasersFrontend'/>
        <Route Component={Help} exact path = '/SoftwareChasersFrontend/Help'/>
      </Routes>
  );
}

export default App;
