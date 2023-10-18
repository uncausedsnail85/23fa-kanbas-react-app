import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from "./Labs/a3/Nav";

function App() {
  // i put nav here so it appears in every screen (before <Route> container)
  // if we want a screen without Nav, remove it here and re-add to every other
  return (
    <HashRouter>
      <div>
        {/* <HelloWorld />
        <Labs />
        <Kanbas /> */}
        <Nav />
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
        
      </div>
    </HashRouter>
  );
}
export default App;