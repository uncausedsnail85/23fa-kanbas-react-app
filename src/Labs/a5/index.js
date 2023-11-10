import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href="http://localhost:4000/a5/welcome"
             className="list-group-item">
            Welcome
          </a>
        </div>
        <hr />
        <WorkingWithArrays />
        <hr />
        <EncodingParametersInURLs />
        <hr />
        <WorkingWithObjects />
        <hr />
        {/* <SimpleAPIExamples /> */}
      </div>
    );
  }
  export default Assignment5;