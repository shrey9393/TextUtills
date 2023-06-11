import React, { useState } from "react";

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    document.title = "Text Converted To Upper Case";
  };
  
  const toLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    document.title = "Text Converted To Lower Case";
  };
  const toClearWindow = () => {
    let newText = "";
    setText(newText);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
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

        <button type="button" onClick={toUpperCase} className="btn btn-primary">
          Convert to upper case
        </button>

        <button
          type="button"
          onClick={toLowerCase}
          className="btn btn-primary mx-3"
        >
          Convert to lower case
        </button>

        <button
          type="button"
          onClick={toClearWindow}
          className="btn btn-primary"
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>your text summery</h1>
        <p>
          {text.split(" ").length} words, {text.length} character
        </p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
