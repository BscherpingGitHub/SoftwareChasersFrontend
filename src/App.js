import Home from "./containers/Home";
import Help from "./containers/Help"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
require("./index.css");

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route Component={Home} exact path = '/'/>
    <Route Component={Help} exact path = '/Help'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
