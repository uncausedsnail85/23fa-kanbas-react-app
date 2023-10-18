import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";
function PathParameters() {
  return (
    <div>
      <h2>Path Parameters</h2>
      <Link to="/Labs/a3/add/1/2">1 + 2</Link> <br />
      <Link to="/Labs/a3/add/3/4">3 + 4</Link>
      <Routes>
        <Route path="a3/add/:a/:b" element={<Add />} />
      </Routes>
    </div>
  ); // if at .../a3/add/:a/:b, show element Add
     // colon declares that these stuff in the path are params
     // to pass into useParams() hook
}
export default PathParameters;