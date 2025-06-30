import React, {useState} from "react";

const Form = (props) => {
    
    const [text, setText] = useState("subrat@blockstack.tech");

    //setText("Shreya");

    const handleUpClick = () => {
        console.log("On click");
        setText("subrat@diamanteblockchain.com");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    return(
        <>
        <h3>{props.kelma}</h3>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={text} onChange={handleOnChange} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleUpClick}>Submit</button>
        </form>
        </>
    );
};
export default Form;