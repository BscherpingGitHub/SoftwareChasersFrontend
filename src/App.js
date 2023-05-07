import Home from "./containers/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
require("./index.css");

function App() {
  return (
    <BrowserRouter>
    {/* <div style={{ height: "100%", width: "100%" }}>
      <Home />
    </div> */}
    <Routes>
    <Route Component={Home} exact path = '/'/>
    {/* <Route Component={Help} exact path = '/Help'/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
