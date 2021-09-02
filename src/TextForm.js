import React, { useState } from 'react'

function TextForm(props) {


    const [text, setText] = useState('');

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleCamelCase=()=>{
        setText(text.toLowerCase().split(' ').map(word=>" "+word.charAt(0).toUpperCase()+word.slice(1)).join(''));
    }

    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleCopy=()=>{
        let newText=document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleClear=()=>{
        setText('');

    }


    return (
        <>
            <div className="container mb-3 my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8" onChange={handleOnChange}></textarea>
            </div>
            <div className="container mb-3 my-3 ">
                <button className="btn btn-primary mx-2" onClick={handleUpperCase} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleCamelCase}>Convert to CamelCase</button>
                <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove extra space</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} <strong>words</strong>  {text.length} <strong>characters</strong></p>
                <p>{0.008*text.length} <strong>Minutes to read.</strong></p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter text to Preview"}</p>
            </div>
        </>
    )
}

export default TextForm;



