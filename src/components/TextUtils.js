import React from "react";

function TextUtils() {
    const [text, setText] = React.useState("");

    const handleUppercase = () => {
        setText(text.toUpperCase());
    }

    const handleLowercase = () => {
        setText(text.toLowerCase());
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    } 
  
    return (
    <>
        <div className="mx-3">
            <textarea cols={80} rows={5} className="my-2" onChange={handleOnChange}></textarea>
            <button className="btn btn-primary mx-0" onClick={handleUppercase}>Convert to Uppercase</button>
            <button className="btn btn-secondary mx-2" onClick={handleLowercase}>Convert to Lowercase</button>
        </div>
        <div>
            <p className="mx-3 my-2">{text.length} Characters and {text.split(" ").filter(Boolean).length} Words</p>
            <p className="mx-3 my-2">{text}</p>
        </div>
    </>
  );
}

export default TextUtils;
