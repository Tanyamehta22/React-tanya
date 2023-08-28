import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convertes to uppercase!,success");
    }

    const handleLoClick = ()=>{
      
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Convertes to Lowercase!,success");

  }
  
  const handleClearClick = ()=>{
      
    let newText =('');
    setText(newText)
    props.showAlert("Cleared!,success");
}
    const handleUpChange = (event)=> {
        // console.log("On change");
        setText(event.target.value);
         
    }

    const handleCopy = ()=>{
      // console.log("I am copy");
      navigator.clipboard.writeText(text.valueOf);
      props.showAlert("Copied!,success");
    }

    const handleExtraSpace = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Removed extra space!,success");

    }
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'? 'white': '#042743'}} >
<div className="mb-3" >
  <h1 className='mb-2 '>{props.heading} </h1>
  <textarea className ="form-control" value= {text} onChange = {handleUpChange} style={{backgroundColor:props.mode==='dark'? '#13466e': 'white', color:props.mode==='dark'? 'white': '#042743'}} id="myBox" rows="8"></textarea>
</div>
 <button disabled={text.length===0} className="btn btn- primary mx-1 my-1"  onClick = {handleUpClick}>Convert to uppercase</button>
 <button disabled={text.length===0} className="btn btn- primary mx-1 my-1"  onClick = {handleLoClick}>Convert to lowercase</button>
 <button disabled={text.length===0} className="btn btn- primary mx-1 my-1"  onClick = {handleClearClick}>Clear text</button>
 <button disabled={text.length===0}  className="btn btn- primary mx-1 my-1"  onClick = {handleCopy}>Copy text</button>
 <button className="btn btn- primary mx-1 my-1" onClick = {handleExtraSpace}>Remove extra space</button>
</div>
    

    <div className='container my-3' style={{color:props.mode==='dark'? 'white': '#042743'}}>
     <h1>Your text summary</h1>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
     <h2> Preview</h2>
     <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
