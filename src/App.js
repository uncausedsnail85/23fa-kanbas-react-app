import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter } from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import Nav from "./Labs/a3/Nav";
// import Signin from "./Kanbas/Users/signin"

// const BASE_API = process.env.REACT_APP_BASE_API_URL

function App() {
  // console.log(BASE_API)
  // console.log(process.env.REACT_APP_BASE_API_URL)
  // console.log("asdsadas")
  return (
    <HashRouter>
      <div>
        {/* <HelloWorld />
        <Labs />
        <Kanbas /> */}
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          {/* <Route path="/signin" element={<Signin />} /> */}
        </Routes>
        
      </div>
    </HashRouter>
  );
}
export default App;