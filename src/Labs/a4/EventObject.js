import React, { useState } from "react";
function EventObject() {
  const [event, setEvent] = useState(null);
  const handleClick = (e) => {
    e.target = e.target.outerHTML; // replace DOM with string representation
    delete e.view; // is the browser and contains the button. rendering the will render the button and so on and so forth
    setEvent(e);
  };
  return (
    <div>
      <h2>Event Object</h2>
      <button id="event-button"
        onClick={(e) => handleClick(e)}
        className="btn btn-primary">
        Display Event Object
      </button>
      <pre>{JSON.stringify(event, null, 2)}</pre>
    </div>
  );
}
export default EventObject;