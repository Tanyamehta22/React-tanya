import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      
      let newText = text.tolowerCase();
      setText(newText)

  }
  
  const handleClearClick = ()=>{
      
    let newText =('');
    setText(newText)
}
    const handleUpChange = (event)=> {
        console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      console.log("I am copy");
      var text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0,9999);
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = ()=> {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark'? 'white': '#042743'}} >
<div class="mb-3" >
  <h1>{props.heading} </h1>
  <textarea className ="form-control" value= {text} onChange = {handleUpChange} style={{backgroundColor:props.mode==='dark'? 'grey': 'white', color:props.mode==='dark'? 'white': '#042743'}} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn- primary" mx-1 onClick = {handleUpClick}>Convert to uppercase</button>
 <button className="btn btn- primary" mx-1 onClick = {handleLoClick}>Convert to lowercase</button>
 <button className="btn btn- primary" mx-1 onClick = {handleClearClick}>Clear text</button>
 <button className="btn btn- primary" mx-1 onClick = {handleCopy}>Copy text</button>
 <button className="btn btn- primary" mx-1 onClick = {handleExtraSpace}>Remove extra space</button>
</div>
    

    <div className='container my-3' style={{color:props.mode==='dark'? 'white': '#042743'}}>
     <h1>Your text summary</h1>
     <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008* text.split(" ").length} Minutes read</p>
     <h2> Preview</h2>
     <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
