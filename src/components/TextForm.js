import React, {useState} from 'react'



export default function TextForm(props) {

const handleOnChange = (event)=> {
    // console.log("on changed");
    setText(event.target.value);
}

const handleUpClick = ()=> {
    // console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    // setText("text is changed")
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}

const handleLowClick = ()=> {
    // console.log("lower case was clicked");
    let newText = text.toLowerCase();
    // setText("text is changed")
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
}


const handleAltClick = ()=> {
    let newText;
     newText = text.split('').map((c,i) => 
        i % 2 == 0 ? c.toLowerCase() : c.toUpperCase()
    ).join('');   
    setText(newText);
    props.showAlert("Converted to alternate case!", "success");
}


const handleCopy = ()=> {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
}


const handleClear = ()=> {
    setText("");
    props.showAlert("Cleared everything!", "success");
}

    const [text, setText] = useState("Enter text here");
    return (
    <>
    <div className='container' style={{color: props.mode === "dark"?"white":"black"}}>
        <div className = "mb-3">
            <h2>{props.heading}</h2>
            {/* <label for="myBox" className="form-label">Example textarea</label> */}
            <textarea className = "form-control" value={text} onChange={handleOnChange} id="myBox" rows="5" style={{backgroundColor: props.mode === "dark"?"#090e29":"white", color: props.mode === "dark"?"white":"black"}}></textarea>
            <button className = "btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className = "btn btn-primary my-3 mx-1" onClick={handleLowClick}>Convert to lowercase</button>
            <button className = "btn btn-primary my-3 mx-1" onClick={handleAltClick}>Convert to alternate cases</button>
            <button className = "btn btn-primary my-3 mx-1" onClick={handleCopy}>Copy text</button>
            <button className = "btn btn-primary my-3 mx-1" onClick={handleClear}>Clear all</button>
        </div>
    </div>
    <div className="container" style={{color: props.mode === "dark"?"white":"black"}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> Approx {(0.008 * text.split(" ").length).toFixed(3)} minutes to read</p>
        <h2>PREVIEW:</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
