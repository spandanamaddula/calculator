import React,{useState} from 'react'

const Calculators = () => {
    const [input,setInput]=useState("");

    const handler = e =>{
        setInput(e.target.value);
    }
    
  return (
    <div>
        <center>
            <input type ="text" name ="input" value={input} onChange ={handler}/>
        </center>
        <button onClick={()=> setInput(eval(input))}> Result</button>
     
    

    <button onClick={()=> setInput(input +'1')}>1</button>
    <button onClick={() => setInput(input +'2')}>2</button>
    <button onClick={()=> setInput(input +'3')}>3</button>
    <button onClick={() => setInput(input +'4')}>4</button>
    <br/>
    <button onClick={()=> setInput(input +'5')}>5</button>
    <button onClick={() => setInput(input +'6')}>6</button>
    <button onClick={()=> setInput(input +'7')}>7</button>
    <button onClick={() => setInput(input +'8')}>8</button>
    <br/>
    <button onClick={()=> setInput(input +'9')}>9</button>
    <button onClick={() => setInput(input +'0')}>0</button>
    <button onClick={()=> setInput(input +'+')}>+</button>
    <button onClick={() => setInput(input +'-')}>-</button>
    <br/>
    <button onClick={()=> setInput(input +'*')}>*</button>
    <button onClick={() => setInput(input +'%')}>%</button>
    <button onClick={()=> setInput(input +'=')}>=</button>
    <button onClick={() => setInput('')}>clr</button>

    <h3> Result is ={input}</h3>

    </div>


  )
}

export default Calculators