import React, { useState } from 'react'
import styled from 'styled-components'

function TextForm(props) {

    const [text, setText] = useState('Enter Text Here');
    

    const handleUpClick=()=>{
       // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLoClick=()=>{
        // console.log("Uppercase was clicked");
         let newText=text.toLowerCase();
         setText(newText);
     }

     const handleClear=()=>{   
         setText("");
     }

    const handleOnChange=(event)=>{
        console.log("OnChange was clicked");
        setText(event.target.value);
    }

    return (
        <>
        <Container>
           <Wrap>
               <h2>{props.heading}</h2>
               <EntryPoint>
               <TextField id="outlined-basic" value={text} onChange={handleOnChange} rows="8"/>
               </EntryPoint> 
               <Wraper>
               <Button onClick={handleUpClick}>
                   Convert to UpperCase
               </Button>
               <Button onClick={handleLoClick}>
                   Convert to LowerCase
               </Button>
               
               <Button>
                   Convert to CamelCase
               </Button>
               <Button>
                   CopyText
               </Button>
               <Button onClick={handleClear}>
                   Clear Text
               </Button>
               </Wraper>
           </Wrap>
        </Container>
        <Container>
            <Wrap>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words</p>
                <p>{text.length} characters</p>
                <p>{0.008*text.length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </Wrap>
        </Container>
        </>
    )
}

export default TextForm;

const Container=styled.div`
       min-height:40vh;
       width:100vw;
       bakcground:#fff;
`
const Wrap=styled.div`
     display:flex;
     flex-direction:column;
     padding:5px;
     h2{
         text-align:center;
         align-items:center;
         padding:10px;
         margin-top:20px;
     }
`

const EntryPoint=styled.div`
     justify-content:center;
     display:flex;
`
const TextField=styled.textarea`
     width:80%;
`

const Wraper=styled.div`
      display:flex;
      justify-content:space-between;
      margin-top:10px;
`


const Button=styled.button`
      width:30vw;
      padding:2px;
      display:flex;
      margin-right:5px;
      justify-content:center;
      background:blue;
      color:white;
      border:1px solid transparent;
      border-radius:4px;
      align-items:center;
      text-align:center;
`



