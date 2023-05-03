import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("ENTER TEXT HERE");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button type="button" onClick={handleUpClick} className="btn btn-primary">
        Convert to upper case
      </button>
    </div>
  );
}
